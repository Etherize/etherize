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
import OpenLawExtension from "./OpenLawExtensions";
import Constants, {EntityTypes} from "./Constants";


const EMAIL = "etherizehelp@gmail.com";
// configure openlaw
// You can change TEMPLATE_NAME to 'articles-of-organization' to make the code work ...
// Right now, both deal templates on Etherizeit instance are causing the same issue
// import getConfig from 'next/config'

export default class HeavenlyInterface extends React.Component {

    state = {
        // Variables for OpenLaw API
        //Variables for the UI
        // formVisible: true,
        // reviewVisible: false,
        // finalizeVisible: false,

        // State variables for OpenLaw
        apiClient:null,
        title: "",
        template: "",
        compiledTemplate: null,
        parameters: {},
        executionResult: null,
        variables: null,
        // State variables for preview component
        previewHTML: null,
        loading: false,
        ipfsLoading: false,
        success: false,
        progress: 0,
        progressMessage: "",
        cost:Constants.PricesPerEntity[this.props.entityType]/100,
    };

    constructor(props){
        super(props);
        this.ChoosePaymentMethodModal = React.createRef();
        this.PaymentModal = React.createRef();
        this.MiscellaneousModal = React.createRef();
        this.togglePaymentMethodModal = this.togglePaymentMethodModal.bind(this);
        this.payCrypto = this.payCrypto.bind(this);
        this.openLawHtmlDoc = React.createRef();
        this.loadOpenLaw(Constants.AgreementsPerEntity[this.props.entityType]);
        // console.log("entity cost: " + this.state.cost);
    }


    componentDidMount = async () =>{
        // this.insertToolTip()
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
            "Organizer Signature": '{"email":"'+ EMAIL +'"}',
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

    // showReview() {
    //     console.log('Toggle Review');
    // };
    //
    // showDefine() {
    //     console.log('Toggle Form/Define');
    //     this.setState(prevState => ({ formVisible: !prevState.formVisible }));
    // };
    //
    // showFinalize() {
    //     console.log('Toggle Finalize');
    //     this.setState(prevState => ({ finalizeVisible: !prevState.finalizeVisible }));
    // };


    onChange = (key, value) => {
        const parameters = key
            ? {
                ...this.state.parameters,
                [key]: [key].includes("Email")
                    ? JSON.stringify({ email: value })
                    : value
            }
            : this.state.parameters;
        this.setState({parameters});

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
            if (missingField === "Member Signature"){
                missingField = "Member Email"
            }
            return "Please fill all fields, we're missing your " + missingField;
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
            const emailSearchResult = await apiClient.searchUsers(memberEmail, 1, 25);
            if (emailSearchResult["nbHits"] <= 0){
                modalTitle = "Sign Up Required!";
                signUpIfRequired = "In order to view/edit your draft you MUST sign up first." +
                    " Check your email for a sign up link before you try to open your draft. <br>";
                // send invite to sign up an account
                OpenLawExtension.sendUsersInviteIfNonexistent(apiClient.jwt, [memberEmail]);

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


    RequestSignatureFromEtherize = async () => {
        const { apiClient } = this.state;

        try {
            // const {accounts, contract, web3} = this.props;

            const [jwt, err] = await API.getJWT();
            if (err !== "" || jwt === "") {
                alert(err);
                return;
            }
            apiClient.jwt = jwt;

            const errorInForm = this.tryExecuteTemplate();
            if (errorInForm != null){
                return [false, errorInForm];
            }

            //add Open Law params to be uploaded
            const uploadParams = this.buildOpenLawParamsFromState();

            // don't need to check for valid email, OpenLaw validateContract + checkMissingInputs does this
            const [_, memberEmail] = this.uploadParamsHasValidEmail(uploadParams);

            // send invite to sign up an account
            OpenLawExtension.sendUsersInviteIfNonexistent(apiClient.jwt, [memberEmail]);


            // console.log(uploadParams.parameters);
            const contractId = await apiClient.uploadContract(uploadParams);
            // console.log("Contract ID: ", contractId);

            // looks like openlaw automatically sends the email to the member, so just send to us here
            await apiClient.sendContract([EMAIL], [EMAIL], contractId);
            return [true, ""];

        } catch (error) {
            console.log(error);
            return [false, error];
        }
    };


    payFiat = async () => {
        // TODO; how can we submit to openlaw only after customer is redirected to success url? - We'll still have to
        // wait for the true billing confirmation but at least this would cut a bit down on spam
        const [success, err] = await this.RequestSignatureFromEtherize();
        if (!success){
            alert("Failure to upload to OpenLaw: " + err);
            return
        }

        //add Open Law params to be uploaded
        const uploadParams = this.buildOpenLawParamsFromState();

        // don't need to check for valid email, OpenLaw validateContract + checkMissingInputs does this
        const [_, memberEmail] = this.uploadParamsHasValidEmail(uploadParams);

        // console.log("email is:" + memberEmail);
        // after emailing doc to us, show customer the stripe checkout
        const json = await API.getFiatTransaction(memberEmail, this.props.entityType);

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


    togglePaymentMethodModal() {

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

        console.log(this.state.variables);

        // don't need to check for valid email, OpenLaw validateContract + checkMissingInputs does this
        const [_, memberEmail] = this.uploadParamsHasValidEmail(uploadParams);

        const json = await API.getCryptoTransaction(cryptoCurrency, this.props.entityType, memberEmail);

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


    // sendContract = async () => {
    //     alert("Not yet enabled. Waiting for OpenLaw to fix their Deal feature, to issue multiple Contracts at once. ")
    // };


    async insertToolTip(){
        const delay = ms => new Promise(res => setTimeout(res, ms));
        while (!this.state.executionResult){
            await delay(100);
        }
        console.log("yes no fields: " + this.openLawHtmlDoc.current.getElementsByClassName("openlaw-el-field-yesno").length)

        // const node = this.openLawHtmlDoc.current.getElementsByClassName("openlaw-el-field-yesno")[0];
        // console.log(node);
        // node.appendChild(<p>lollll!!</p>);
    }


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
                                        <p className="card-title h1">Entity Shapes</p>
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
                                                      // inputExtraTextMap={{"Entity":<a href={"/FAQ#"+Constants.ownershipFAQTag}>What's a proof of ownership token?</a>}}
                                                      // inputProps={{'Title':{"children":<a href="http://localhost:8080/travel/t_form.jsp"> userlogin</a>}}}
                                        />
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBAnimation>
                        </MDBCol>
                    </MDBRow>

                    {/*<MDBRow className="py-5 mt-5 ">*/}
                    {/*    <MDBCol md="12">*/}
                    {/*        <MDBAnimation type={"fadeInUp"}>*/}
                    {/*            <MDBCard cascade >*/}
                    {/*                <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">*/}
                    {/*                    <div>*/}
                    {/*                    </div>*/}
                    {/*                    <p className="card-title h1">Review</p>*/}
                    {/*                    <div>*/}
                    {/*                    </div>*/}
                    {/*                </MDBCardHeader>*/}
                    {/*                <MDBCardBody className={"text-center"}>*/}
                    {/*                    { this.state.showReview ? null*/}
                    {/*                        :*/}
                    {/*                        <MDBBtn id="generateButton" className="huge pink ui right labeled icon button btn-secondary bottomMargin " onClick={this.setTemplatePreview}>Generate Agreement<i className="play icon">*/}

                    {/*                        </i></MDBBtn>*/}
                    {/*                    }*/}


                    {/*                    <AgreementPreview  className="subPanel minnish" id="preview" previewHTML={this.state.previewHTML} />*/}
                    {/*                </MDBCardBody>*/}
                    {/*            </MDBCard>*/}
                    {/*        </MDBAnimation>*/}
                    {/*    </MDBCol>*/}
                    {/*</MDBRow>*/}

                    {/*spacing*/}
                    <MDBRow className={"mt-5 mb-5"} >


                        {/*spacing*/}

                        {/*<MDBRow className={"mt-5 mb-5"} >*/}
                        <MDBCol className={"text-center"} md={"12"}>
                            <MDBAnimation type={"fadeInUp"}>
                                <MDBCard >
                                    <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                        <div>
                                        </div>
                                        <p className="card-title h1">Summoning Spell</p>
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
                                                        <p className="card-title h4">Email Draft</p>
                                                        <div/>
                                                    </MDBCardHeader>
                                                    <MDBCardBody cascade>
                                                        <MDBCardText>
                                                            You can forward the Draft to your lawyer or co-founders. <br/> <br/>
                                                            When you are ready to form your entity, you can convert the
                                                            Draft into a Contract
                                                        </MDBCardText>

                                                        <MDBBtn size="lg" className={"btn-secondary"} onClick={this.sendDraft}>
                                                            Save
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
                                                        <p className="card-title h4">Purchase</p>
                                                        <div/>
                                                    </MDBCardHeader>
                                                    <MDBCardBody cascade>
                                                        <MDBCardText>
                                                            Buy now, pay in fiat or crypto.
                                                        </MDBCardText>
                                                        <MDBBtn size="lg" onClick={this.togglePaymentMethodModal} className={"btn-secondary"}>
                                                            Create
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
        // const {
        //     apiClient,
        //     variables,
        //     parameters,
        //     executionResult,
        //     previewHTML,
        //     loading,
        //     success,
        //     ipfsLoading,
        //     progress,
        //     progressMessage
        // } = this.state;

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
