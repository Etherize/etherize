import React from 'react';
// import openlaw
import {APIClient, Openlaw} from "openlaw";
import OpenLawForm from "openlaw-elements";
// import AgreementPreview from "../components/AgreementPreview";
import {
    MDBAnimation,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader, MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdbreact";

// import "openlaw-elements/dist/openlaw-elements.min.css";
// import "./HeavenlyInterface.css";

import BannerHeader from "./BannerHeader";
import API from "./API";
import Modal from "./Modal";
import LoadingPortal from "./LoadingPortal";
import Footer from "./Footer";
import OpenLawExtension from "./OpenLawExtensions";

const COST = "$400";
const EMAIL = "etherizehelp@gmail.com";
// configure openlaw
// You can change TEMPLATE_NAME to 'articles-of-organization' to make the code work ...
// Right now, both deal templates on Etherizeit instance are causing the same issue
// import getConfig from 'next/config'

export default class HeavenlyInterface extends React.Component {

    state = {
        // Variables for OpenLaw API
        openLawConfig: null,
        templateName: null,

        //Variables for the UI
        formVisible: true,
        reviewVisible: false,
        finalizeVisible: false,

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


    };

    constructor(props){
        super(props);
        this.ChoosePaymentMethodModal = React.createRef();
        this.PaymentModal = React.createRef();
        this.MiscellaneousModal = React.createRef();
        this.togglePaymentMethodModal = this.togglePaymentMethodModal.bind(this);
        this.payCrypto = this.payCrypto.bind(this);
    }

    componentDidMount = async () => {

        //create config
        const openLawConfig = {
            server: process.env.OpenlawHost,
            templateName: this.props.templateName,
            // username: "SECRET",
            // password: "SECRET_TOO"
        };

        // We get the JWT from out backend now instead of logging in via username+password
        // console.log( "api host location: " + process.env.API_HOST);

        const apiClient = new APIClient({root:openLawConfig.server
            // , auth:{
            // username:process.env.KaleidoUser,
            // password:process.env.KaleidoPass, }
        });

        const [jwt, err] = await API.getJWT();
        if (err !== "" || jwt === ""){
            alert(err);
            return;
        }
        apiClient.jwt = jwt;
        // console.log( "api jwt: " + apiClient.jwt);


        //Retrieve your OpenLaw template by name, use async/await
        //   console.log("openlaw instance hosted at: " + openLawConfig.server);
        const template = await apiClient.getTemplate(openLawConfig.templateName);
        // console.log("template..", template);


        //Retreive the OpenLaw Template, including MarkDown
        const content = template.content;

        // console.log("template..", template);

        // Get the most recent version of the OpenLaw API Tutorial Template
        const versions = await apiClient.getTemplateVersions(
            openLawConfig.templateName,
            20,
            1
        );
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
            openLawConfig,
            apiClient,
            title,
            template,
            compiledTemplate,
            parameters,
            executionResult,
            variables
        });
    };

    showReview() {
        console.log('Toggle Review');
    };

    showDefine() {
        console.log('Toggle Form/Define');
        this.setState(prevState => ({ formVisible: !prevState.formVisible }));
    };

    showFinalize() {
        console.log('Toggle Finalize');
        this.setState(prevState => ({ finalizeVisible: !prevState.finalizeVisible }));
    };


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

        // ***
        // Commented out below code and moved it to executeTemplate() as is slows the page down during form filling
        // ***

        // const { executionResult, errorMessage } = Openlaw.execute(
        //   compiledTemplate.compiledTemplate,
        //   {},
        //   parameters
        // );
        // const variables = Openlaw.getExecutedVariables(executionResult, {});
        //   this.setState({ parameters, variables, executionResult });
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
            draftId: ""
        };
        return object;

    }

    sendDraft = async () => {
        const { openLawConfig, apiClient, progress, progressMessage } = this.state;

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

            // send invite to sign up an account
            OpenLawExtension.sendUsersInviteIfNonexistent(apiClient.jwt, [memberEmail]);

            console.log(uploadParams.parameters);
            const contractId = await apiClient.uploadDraft(uploadParams);
            // console.log("Contract ID: ", contractId);
            await apiClient.sendDraft([], [], contractId);

            this.MiscellaneousModal.current.SetTextAndTitle("Success!",
                "You should receive your draft at: " + memberEmail);

        } catch (error) {
            this.MiscellaneousModal.current.SetTextAndTitle("Error",
                "We tried to send the draft, but got an error: " + error);
        }



    };


    RequestSignatureFromEtherize = async () => {
        const { openLawConfig, apiClient, progress, progressMessage } = this.state;

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


            console.log(uploadParams.parameters);
            const contractId = await apiClient.uploadContract(uploadParams);
            console.log("Contract ID: ", contractId);

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

        // after emailing doc to us, show cutomer the stripe checkout
        const json = await API.getFiatTransaction();
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

        const [success, err] = await this.RequestSignatureFromEtherize();
        if (!success){
            alert("Failure to upload to OpenLaw: " + err);
            return
        }

        this.ChoosePaymentMethodModal.current.ToggleShowing();
        this.PaymentModal.current.ToggleShowing();
        this.PaymentModal.current.ToggleLoading(true);
        const json = await API.getCryptoTransaction(cryptoCurrency);

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
                                    Pay {COST} in USD
                                </MDBBtn>
                                <MDBBtn size="lg" onClick={()=> this.payCrypto("LTCT")} className={"btn-secondary"}>
                                    Pay {COST} in BTC (LTCT)
                                </MDBBtn>
                                <MDBBtn size="lg"  onClick={()=> this.payCrypto("ETH")} className={"btn-secondary"}>
                                    Pay {COST} in ETH
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
                                        <p className="card-title h1">Define</p>
                                        <div>
                                        </div>
                                    </MDBCardHeader>
                                    <MDBCardBody className={"text-center"}>
                                        <OpenLawForm  style={{width: '50%'}}
                                                      apiClient={this.state.apiClient}
                                                      executionResult={this.state.executionResult}
                                                      parameters={this.state.parameters}
                                                      onChangeFunction={this.onChange}
                                                      openLaw={Openlaw}
                                                      variables={this.state.variables}
                                        />
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
                                        <p className="card-title h1">Finalize</p>
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
                                                            You can forward the Draft to your lawyer or your co-founders. <br/> <br/>
                                                            You can convert the Draft into a Contract when you are ready to Form Entity.
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
        const {
            apiClient,
            variables,
            parameters,
            executionResult,
            previewHTML,
            loading,
            success,
            ipfsLoading,
            progress,
            progressMessage
        } = this.state;



        return (
            <div className={"mainBackground"}>
                {!this.state.executionResult  ?
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
