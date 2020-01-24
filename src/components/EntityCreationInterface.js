import React from 'react';
import {Openlaw} from "openlaw";
import OpenLawForm from "openlaw-elements";
import {
    MDBAnimation,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdbreact";
import BannerHeader from "./BannerHeader";
import API from "./API";
import Modal from "./Modal";
import LoadingPortal from "./LoadingPortal";
import Footer from "./Footer";
import Constants, {EntityTypes} from "./Constants";
import {withRouter} from "next/router";

// configure openlaw
// You can change TEMPLATE_NAME to 'articles-of-organization' to make the code work ...
// Right now, both deal templates on Etherizeit instance are causing the same issue
// import getConfig from 'next/config'

class EntityCreationInterface extends React.Component {


    state = {
        // State variables for OpenLaw
        apiClient:null,
        title: "",
        template: "",
        compiledTemplate: null,
        parameters: {},
        executionResult: null,
        variables: null,
        cost: this.getBasePrice(),
    };

    constructor(props){
        super(props);
        this.ChoosePaymentMethodModal = React.createRef();
        this.PaymentModal = React.createRef();
        this.MiscellaneousModal = React.createRef();
        this.calculatePriceThenTogglePaymentModal = this.calculatePriceThenTogglePaymentModal.bind(this);
        this.payCrypto = this.payCrypto.bind(this);
        this.openLawHtmlDoc = React.createRef();
        this.loadOpenLaw(Constants.AgreementsPerEntity[EntityTypes.hybridEntity]);
    }

    getBasePrice(){
        return 0;
    }

    // TODO: compute the correct product name to show on checkout
    getProductName(){
        return "Hybrid Legal Entity";
    }

    loadOpenLaw = async (templateName) => {

        const apiClient = await API.GetOpenLawAPIClient(templateName);

        //Retrieve your OpenLaw template by name, use async/await
        //   console.log("openlaw instance hosted at: " + openLawConfig.server);
        const template = await apiClient.getTemplate(templateName);

        //Retreive the OpenLaw Template, including MarkDown
        const content = template.content;

        // console.log("template..", template);

        // TODO should we use versions?
        // // Get the most recent version of the OpenLaw API Tutorial Template
        // const versions = await apiClient.getTemplateVersions(
        //     templateName,
        //     20,
        //     1
        // );
        // console.log("versions..", versions[0], versions.length);

        const title = template.title;


        //Get my compiled Template, for use in rendering the HTML in previewTemplate
        const compiledTemplate = await Openlaw.compileTemplate(content);
        if (compiledTemplate.isError) {
            throw "template error: " + compiledTemplate.errorMessage;
        }

        // console.log("my compiled template..", compiledTemplate);
        const parameters = {
            "Organizer Signature": '{"email":"'+ Constants.legalEmail +'"}',
            "Total Price": this.getBasePrice().toString()
        };
        const { executionResult, errorMessage } = await Openlaw.execute(
            compiledTemplate.compiledTemplate,
            {},
            parameters
        );

        // console.log("execution result:", executionResult);

        // ** This is helpful for logging in development, or throwing exceptions at runtime.
        if (errorMessage) {
            console.error("Openlaw Execution Error:", errorMessage);
        }

        const variables = await Openlaw.getExecutedVariables(executionResult, {});
        // console.log("variables:", variables);

        this.setState({
            apiClient,
            title,
            template,
            compiledTemplate,
            parameters,
            executionResult,
            variables
        });
    };


    tryExecuteTemplate(){
        const { compiledTemplate } = this.state;

        const { executionResult, errorMessage } = Openlaw.execute(
            compiledTemplate.compiledTemplate,
            {},
            this.state.parameters
        );
        if (errorMessage!== "") {
            console.log("openlaw execute error: " + errorMessage);
            return errorMessage;
        }

        const validationResult = Openlaw.validateContract(executionResult);
        const missingInputs = Openlaw.getMissingInputs(validationResult);
        if (missingInputs.length>0){
            let missingField =  missingInputs[0];
            if (missingField === Constants.OpenLawMemberEmailKey){
                missingField = "Member Email"
            }
            return "Please fill out all fields, we're missing your " + missingField;
        }

        const errorArray = Openlaw.validationErrors(validationResult);
        if (errorArray.length>0){
            console.log("errors:");
            console.log(errorArray);
            return errorArray[0];
        }

        const variables = Openlaw.getExecutedVariables(executionResult, {});
        this.setState({ variables, executionResult });
        return null;
    }


    uploadParamsHasValidEmail(uploadParams){
        // try to parse their email in the parameters
        let json = null;
        try {
            json = JSON.parse(uploadParams.parameters["Member Signature"]);

        } catch(e) {
            return [false, ""];
        }

        const memberEmail = json["email"];
        return [true, memberEmail];
    }


    buildOpenLawParamsFromState() {
        const template = this.state.template;
        const { parameters } = this.state;
        const object = {
            templateId: template.id,
            title: template.title,
            text: template.content,
            creator: "Etherize",
            parameters,
            overriddenParagraphs: {},
            agreements: {},
            draftId: "",
            // options: {sendNotification: true},
        };
        return object;
    }

    buildOpenLawParamsWithOverload( parameters) {
        const template = this.state.template;
        const object = {
            templateId: template.id,
            title: template.title,
            text: template.content,
            creator: "Etherize",
            parameters,
            overriddenParagraphs: {},
            agreements: {},
            draftId: "",
            // options: {sendNotification: true},
        };
        return object;
    }


    sendDraft = async () => {
        const { apiClient } = this.state;

        this.MiscellaneousModal.current.SetTextAndTitle("Sending Draft",
            "");
        this.MiscellaneousModal.current.ToggleShowing();
        this.MiscellaneousModal.current.ToggleLoading(true);

        try {

            //login to api
            const [jwt, err] = await API.getJWT();
            if (err !== "" || jwt === ""){
                alert(err);
                return;
            }
            apiClient.jwt = jwt;

            const errorInForm = this.tryExecuteTemplate();
            if (errorInForm != null){
                this.MiscellaneousModal.current.SetTextAndTitle("Error",
                    errorInForm);
                return;
            }

            //add Open Law params to be uploaded
            const uploadParams = this.buildOpenLawParamsFromState();

            // don't need to check for valid email, OpenLaw validateContract + checkMissingInputs does this
            const [_, memberEmail] = this.uploadParamsHasValidEmail(uploadParams);

            let modalTitle = "Success!";
            let signUpIfRequired = "";

            // check if they already have an account to view the draft
            const userExists = await API.CheckIfUserExists(memberEmail);
            if (!userExists){
                modalTitle = "Sign Up Required!";
                signUpIfRequired = "In order to view/edit your draft you MUST sign up first." +
                    " Check your email for a sign up link before you try to open your draft. <br>";
                // send invite to sign up an account
                API.SendInviteToUserFromAdminAccount(memberEmail);
            }

            // console.log(uploadParams.parameters);
            const contractId = await apiClient.uploadDraft(uploadParams);
            // console.log("Contract ID: ", contractId);
            await apiClient.sendDraft([], [], contractId);

            this.MiscellaneousModal.current.SetTextAndTitle(modalTitle,
                signUpIfRequired +"You should receive your draft at: " + memberEmail);

        } catch (error) {
            this.MiscellaneousModal.current.SetTextAndTitle("Error",
                "We tried to send the draft, but got an error: " + error);
        }

    };

    // returns [boolean success, string error message]
    RequestSignatureFromEtherize = async () => {
        const { apiClient } = this.state;
        let contractId = "";

        const errorInForm = this.tryExecuteTemplate();
        if (errorInForm != null){
            return [false, errorInForm];
        }
        //add Open Law params to be uploaded
        const uploadParams2 = this.buildOpenLawParamsFromState();

        // if all parameters were parsed correctly, get the JWT and submit to OL
        try {
            const [jwt, err] = await API.getJWT();
            if (err !== "" || jwt === "") {
                throw err;
            }
            apiClient.jwt = jwt;

            // don't need to check for valid email, OpenLaw validateContract + checkMissingInputs does this
            const [_, memberEmail] = this.uploadParamsHasValidEmail(uploadParams2);
            console.log("member email: ", memberEmail);

            // send invite to sign up an account
            API.SendInviteToUserFromAdminAccount(memberEmail);

        } catch (error) {
            console.log(error);
            return [false, error];
        }


        // Let's try to upload the contract
        try{
            contractId = await apiClient.uploadContract(uploadParams2);
            console.log("Contract ID: ", contractId);
        }

        // if we fail, send the draft to us
        catch (error) {
            console.log(error);

            // we couldn't upload the contract, upload as a draft and send draft to us
            return await this.uploadAndSendDraftOnContractError(apiClient, contractId);
        }

        // Let's send the contract after uploading it
        try{
            if (contractId === ""){
                console.log("warning: we didn't get an error from contractID but it is blank");
                throw "contract id is blank";
            }
            // looks like openlaw automatically sends the email to the member, so just send to us here
            await apiClient.sendContract([Constants.legalEmail], [Constants.legalEmail], contractId);
            return [true, ""];
        }

        // if we fail, send the draft to us
        catch (error) {
            console.log("error, but we're handling it with a draft upload: " + error);
            // we couldn't send the contract, upload as a draft and send draft to us
            return await this.uploadAndSendDraftOnContractError(apiClient, contractId);

        }
    };




    payFiat = async () => {
        this.ChoosePaymentMethodModal.current.ToggleShowing();
        this.PaymentModal.current.ToggleShowing();
        this.PaymentModal.current.ToggleLoading(true);
        // TODO; how can we submit to openlaw only after customer is redirected to success url? - We'll still have to
        // wait for the true billing confirmation but at least this would cut a bit down on spam
        const [success, err] = await this.RequestSignatureFromEtherize();
        if (!success){
            this.PaymentModal.current.SetTextAndTitle("Error", "Failure to upload to OpenLaw: " + err);
            return;
        }
        // hide the payment modal - we're going to stripe's website
        this.PaymentModal.current.ToggleShowing();

        //add Open Law params to be uploaded
        const uploadParams = this.buildOpenLawParamsFromState();

        // don't need to check for valid email, OpenLaw validateContract + checkMissingInputs does this
        const [_, memberEmail] = this.uploadParamsHasValidEmail(uploadParams);

        // console.log("member email: " + memberEmail);
        // after emailing doc to us, show customer the stripe checkout
        const json = await API.getFiatTransaction(memberEmail, this.state.cost, this.getProductName());

        const sessionID = json["id"];
        // live key:
        // const stripe = window.Stripe(process.env.StripePrivate);

        // test key:
        const stripe = window.Stripe(process.env.StripeTest);

        const {error} = await stripe.redirectToCheckout({
            sessionId: sessionID
        });

        if (error!= null){
            alert("Failure to get Stripe Checkout: " + error.message);
        }

    };



    togglePaymentModal(){
        console.log("total cost: " + this.state.cost);

        const errorInForm = this.tryExecuteTemplate();
        if (errorInForm != null){
            this.MiscellaneousModal.current.SetTextAndTitle("Error",
                errorInForm);
            this.MiscellaneousModal.current.ToggleShowing();
            return;
        }

        this.ChoosePaymentMethodModal.current.SetTextAndTitle("Choose a Payment Method",
            "");
        this.ChoosePaymentMethodModal.current.ToggleShowing();

    }


    calculatePriceThenTogglePaymentModal() {
        // start from the base price every time
        let newCost = this.getBasePrice();
        const startOfPriceString="($";

        // find all prices based on string matching and add them to the new cost
        for (const key of Object.keys(this.state.parameters)) {
            // console.log(key);
            const parameterValue = this.state.parameters[key];
            // ignore non price values
            if (!parameterValue.includes(startOfPriceString)) {
                continue
            }
            // parse out price from string
            const startI = parameterValue.indexOf(startOfPriceString);
            const endI = parameterValue.indexOf(")",startI);
            const priceOfService = parameterValue.slice(startI + startOfPriceString.length, endI);
            console.log(priceOfService);
            newCost +=  parseInt(priceOfService);
        }

        // set the new cost on the openlaw form
        const newParams = this.state.parameters;
        newParams["Total Price"] = newCost.toString();

        // set the new cost on our state - then toggle the payment modal
        this.setState({
            cost:newCost,
            parameters:newParams,
            },
            this.togglePaymentModal
        )
    }

    // returns [boolean success, string error message]
    async uploadAndSendDraftOnContractError( apiClient, contractId){

        let uploadParams = this.buildOpenLawParamsFromState();
        const previousEmail = uploadParams.parameters[Constants.OpenLawMemberEmailKey];

        // if they successfully uploaded the contract, rename it to error
        if (contractId !== ""){
            apiClient.changeContractAlias( contractId, "Error - discard")
        }

        // take out their email so they don't get a draft
        const parametersWithoutUser = this.state.parameters;
        parametersWithoutUser[Constants.OpenLawMemberEmailKey] = Constants.legalEmail;
        uploadParams = this.buildOpenLawParamsWithOverload(parametersWithoutUser);

        try {
            const draftId = await apiClient.uploadDraft(uploadParams);
            await apiClient.sendDraft([], [], draftId);
            API.SendEtherizeWarningEmailOfErrorOnFrontEnd("Draft uploaded but contract not sent," +
            " with draft id: " + draftId);
            // change email back to original
            uploadParams.parameters[Constants.OpenLawMemberEmailKey] = previousEmail;
            return [true, ""];
        }
        catch (error) {
            // TODO: email us about this problem
            return [false, "We're having trouble communicating with our servers right now"]
        }
    }

    async payCrypto(cryptoCurrency) {

        this.ChoosePaymentMethodModal.current.ToggleShowing();
        this.PaymentModal.current.ToggleShowing();
        this.PaymentModal.current.ToggleLoading(true);

        const [success, err] = await this.RequestSignatureFromEtherize();
        if (!success){
            this.PaymentModal.current.SetTextAndTitle("Error", "Failure to upload to OpenLaw: " + err);
            return;
        }

        //add Open Law params to be uploaded
        const uploadParams = this.buildOpenLawParamsFromState();

        // don't need to check for valid email, OpenLaw validateContract + checkMissingInputs does this
        const [_, memberEmail] = this.uploadParamsHasValidEmail(uploadParams);

        // console.log("member email: " + memberEmail);
        const json = await API.getCryptoTransaction(cryptoCurrency, this.state.cost, memberEmail);

        if (json["error"] !== "ok") {
            this.PaymentModal.current.SetTextAndTitle("Error", json["error"]);
            return;
        }

        const result = json["result"];
        const address = result["Address"];
        const statusUrl = result["status_url"];
        const explanation = "Please send your " + cryptoCurrency +" to the following address: <br/> <br/>" + address + "<br/> <br/> ";
        const followingExplanation = "Monitor the status of your payment <a href=" +statusUrl+"> here </a> ";
        this.PaymentModal.current.SetTextAndTitle("Transaction Created!", explanation + followingExplanation);
    };


    onChange = (key, value) => {
        // console.log("onchange key: " + key + " value: " + value );

        // Fill the email param to reference elsewhere
        const parameters = key
            ? {
                ...this.state.parameters,
                [key]: [key].includes("Email")
                    ? JSON.stringify({ email: value })
                    : value
            }
            : this.state.parameters;
        this.setState({parameters});

        // Only update form for dynamic keys
        if (!Constants.OpenLawDynamicFieldKeys.includes(key))
          return;

        // Here we capture user input to show previously unnecessary forms/fields
        const { compiledTemplate } = this.state;
        const { executionResult, errorMessage } = Openlaw.execute(
            compiledTemplate.compiledTemplate,
            {},
            parameters
        );
        const variables = Openlaw.getExecutedVariables(executionResult, {});
        this.setState({ parameters, variables, executionResult });
    };



    templatePage(){
        return(
            <>
                {/*MODALS*/}
                <Modal ref={this.MiscellaneousModal}/>
                <Modal ref={this.PaymentModal}/>
                <Modal ref={this.ChoosePaymentMethodModal} >
                    <MDBRow center={true} >
                        <MDBCol lg={"8"} className={"mb-4"}>
                            <MDBCard border={"0"}>
                                <MDBBtn size="lg" onClick={this.payFiat} className={"btn-secondary"}>
                                    Pay ${this.state.cost} in USD
                                </MDBBtn>
                                <MDBBtn size="lg" onClick={()=> this.payCrypto("LTCT")} className={"btn-secondary"}>
                                    Pay ${this.state.cost} in BTC (LTCT)
                                </MDBBtn>
                                <MDBBtn size="lg"  onClick={()=> this.payCrypto("ETH")} className={"btn-secondary"}>
                                    Pay ${this.state.cost} in ETH
                                </MDBBtn>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </Modal>

                {/*OPENLAW FORM*/}
                <MDBContainer>
                    <MDBRow className="py-5 mt-5 ">
                        <MDBCol md="12">
                            <MDBAnimation type={"fadeInUp"}>
                                <MDBCard cascade >
                                    <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                        <div>
                                        </div>
                                        <p className="card-title h1">Entity Parameters</p>
                                        <div>
                                        </div>
                                    </MDBCardHeader>

                                    <MDBCardBody className={"text-center"}   >
                                        <div ref={this.openLawHtmlDoc}>
                                        <OpenLawForm  style={{width: '50%'}}
                                                      apiClient={this.state.apiClient}
                                                      executionResult={this.state.executionResult}
                                                      parameters={this.state.parameters}
                                                      onChangeFunction={this.onChange}
                                                      openLaw={Openlaw}
                                                      variables={this.state.variables}
                                                      // inputExtraTextMap={{"Entity Name":<a href={"https://wyobiz.wy.gov/business/filingsearch.aspx"}>Check here if your name is available</a>}}
                                                      // inputExtraTextMap={{"Entity":<a href={"/FAQ#"+Constants.ownershipFAQTag}>What's a proof of ownership token?</a>}}
                                                      // inputProps={{'Title':{"children":<a href="http://localhost:8080/travel/t_form.jsp"> userlogin</a>}}}
                                        />
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBAnimation>
                        </MDBCol>
                    </MDBRow>


                    {/*spacing*/}
                    <MDBRow className={"mt-5 mb-5"} >

                        {/*<MDBRow className={"mt-5 mb-5"} >*/}
                        <MDBCol className={"text-center"} md={"12"}>
                            <MDBAnimation type={"fadeInUp"}>
                                <MDBCard >
                                    <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                        <div>
                                        </div>
                                        <p className="card-title h1">Select Spell</p>
                                        <div>
                                        </div>
                                    </MDBCardHeader>


                                    {/*begin cards row*/}
                                    <MDBRow className={"mt-2"}>

                                        <MDBCol lg="6" className="mb-3">
                                            <MDBAnimation reveal type="fadeInUp">
                                                <MDBCard cascade >
                                                    <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                                        <div/>
                                                        <p className="card-title h4">Save Draft</p>
                                                        <div/>
                                                    </MDBCardHeader>
                                                    <MDBCardBody cascade>
                                                        <MDBCardText>
                                                            A draft of the Formation Agreement and the specifics of the Entity will be sent to you via electronic mail. <br/><br/>
                                                            Forward the draft to your lawyer or co-founders for review, or to hello@etherize.io when you are ready to Summon.
                                                        </MDBCardText>

                                                        <MDBBtn size="lg" className={"btn-secondary"} onClick={this.sendDraft}>
                                                                  <h3 className="ethericText">Draft</h3>
                                                        </MDBBtn>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBAnimation>
                                        </MDBCol>



                                        <MDBCol lg="6" className="mb-3">
                                            <MDBAnimation reveal type="fadeInUp">
                                                <MDBCard cascade >
                                                    <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                                        <div/>
                                                        <p className="card-title h4">Summon Entity</p>
                                                        <div/>
                                                    </MDBCardHeader>
                                                    <MDBCardBody cascade>
                                                        <MDBCardText>
                                                            Etherize will issue a Formation Agreement, verify the viability of the Entity, and confirm with you before Filing. <br/> <br/>
                                                            Give life to the Entity by infusing it with the currency of your choosing. Full refund if requested before Filing.
                                                        </MDBCardText>
                                                        <MDBBtn size="lg" onClick={this.calculatePriceThenTogglePaymentModal} className={"btn-secondary"}>
                                                            <h3 className="ethericText">Summon</h3>

                                                        </MDBBtn>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBAnimation>
                                        </MDBCol>


                                    </MDBRow>
                                </MDBCard>
                            </MDBAnimation>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footer/>

            </>

        )
    }

    render () {

        return (
            <div className={"mainBackground"}>
                {!this.state.executionResult ?
                    <div>
                        <BannerHeader/>
                        <LoadingPortal/>
                    </div>
                    :
                    <div>
                        <BannerHeader/>
                        {
                            this.templatePage()
                        }
                    </div>

                }
            </div>
        )
    }
}
export default withRouter(EntityCreationInterface);
