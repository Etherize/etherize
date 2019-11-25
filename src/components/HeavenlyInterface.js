import React from 'react';
// import openlaw
import {APIClient, Openlaw} from "openlaw";
import OpenLawForm from "openlaw-elements";
import AgreementPreview from "../components/AgreementPreview";
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

import "openlaw-elements/dist/openlaw-elements.min.css";
import "./HeavenlyInterface.css";

import BannerHeader from "./BannerHeader";
import API from "./API";
import ModalPage from "./Modal";
import LoadingPortal from "./LoadingPortal";
import Footer from "./Footer";

// configure openlaw
const URL = "https://etherizeit.openlaw.io";
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

    // modal requirements
    modalOpen:false,
 };

  constructor(props){
      super(props);
      this.Modal = React.createRef();
      this.payCrypto = this.payCrypto.bind(this);
  }

 fileInputRef = React.createRef();
 componentDidMount = async () => {

   //create config
   const openLawConfig = {
     server: URL,
     templateName: this.props.templateName,
   // username: "SECRET",
   // password: "SECRET_TOO"
   };

   // We get the JWT from out backend now instead of logging in via username+password
   // console.log( "api host location: " + process.env.API_HOST);
   const apiClient = new APIClient(openLawConfig.server);
   const [jwt, err] = await API.getJWT();
       if (err !== "" || jwt === ""){
           alert(err);
           return;
       }
    apiClient.jwt = jwt;
   // console.log( "api jwt: " + apiClient.jwt);


   //Retrieve your OpenLaw template by name, use async/await
   const template = await apiClient.getTemplate(openLawConfig.templateName);
   // console.log(template);



   //Retreive the OpenLaw Template, including MarkDown
   const content = template.content;
   // console.log("template..", template);

   //Get the most recent version of the OpenLaw API Tutorial Template
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
     throw "template error" + compiledTemplate.errorMessage;
   }
   // console.log("my compiled template..", compiledTemplate);



   const parameters = {
     "Organizer Signature": '{"email":"etherize@protonmail.com"}',
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
   const { compiledTemplate } = this.state;
   const parameters = key
     ? {
         ...this.state.parameters,
         [key]: [key].includes("Email")
           ? JSON.stringify({ email: value })
           : value
       }
     : this.state.parameters;

   const { executionResult, errorMessage } = Openlaw.execute(
     compiledTemplate.compiledTemplate,
     {},
     parameters
   );
   const variables = Openlaw.getExecutedVariables(executionResult, {});
     this.setState({ parameters, variables, executionResult });
 };

 setTemplatePreview = async () => {
   const { parameters, compiledTemplate } = this.state;
   // console.log(parameters);

   const executionResult = await Openlaw.execute(
     compiledTemplate.compiledTemplate,
     {},
     parameters
   );
   const agreements = await Openlaw.getAgreements(
     executionResult.executionResult
   );
   const previewHTML = await Openlaw.renderForReview(
     agreements[0].agreement,
     {}
   );
   await this.setState({ previewHTML });
   document.getElementById("preview").scrollIntoView({
     behavior: "smooth"
   });
    this.setState({ showReview: true });
 };


 buildOpenLawParamsObj = async template => {


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
 };

 sendDraft = async () => {
   const { openLawConfig, apiClient, progress, progressMessage } = this.state;
   //login to api
   this.setState(
     {
       loading: true,
       progress: 20,
       progressMessage: "Uploading to OpenLaw..."
     },
     async () => {
       try {
         const { accounts, contract, web3 } = this.props;

         const [jwt, err] = await API.getJWT();
         if (err !== "" || jwt === ""){
             alert(err);
             return;
         }
         apiClient.jwt = jwt;

         //add Open Law params to be uploaded
         const uploadParams = await this.buildOpenLawParamsObj(
           this.state.template
         );
         console.log("parmeters from user..", uploadParams.parameters);
         const contractId = await apiClient.uploadDraft(uploadParams);
         console.log("Contract ID: ", contractId);
         await apiClient.sendDraft([], [], contractId);

         alert("Success! You should receive your Draft via e-mail.");

         } catch (error) {
           alert(error + ". Did you specify an e-mail address in the 'Define' section?")
           await this.setState({
           progressMessage: "Uh oh, we've run into an error..."
         });
         console.log(error);

       }
     }
   );
 };

 sendContract = async () => {
   alert("Not yet enabled. Waiting for OpenLaw to fix their Deal feature, to issue multiple Contracts at once. ")
 };





 //
 // onSubmit = async () => {
 //   const { openLawConfig, apiClient, progress, progressMessage } = this.state;
 //   //login to api
 //   this.setState(
 //     {
 //       loading: true,
 //       progress: 20,
 //       progressMessage: "Uploading to OpenLaw..."
 //     },
 //     async () => {
 //       try {
 //         const { accounts, contract, web3 } = this.props;
 //         const token = await apiClient.login(
 //           openLawConfig.userName,
 //           openLawConfig.password
 //         );
 //
 //         const OPENLAW_JWT = token.headers.openlaw_jwt;
 //
 //         //add Open Law params to be uploaded
 //         const uploadParams = await this.buildOpenLawParamsObj(
 //           this.state.template
 //
 //         );
 //         console.log("parmeters from user..", uploadParams.parameters);
 //         const contractId = await apiClient.uploadContract(uploadParams);
 //         console.log("Contract ID: ", contractId);
 //         await apiClient.sendContract(["ineptitude@gmail.com"], ["ineptitude@gmail.com"], contractId);
 //         alert("Success! You should receive a request to sign the Agreement via e-mail.");
 //         } catch (error) {
 //           alert("Fail: " + error)
 //           await this.setState({
 //           progressMessage: "Uh oh, we've run into an error..."
 //         });
 //         console.log(error);
 //       }
 //     }
 //   );
 // };
 //

    payFiat = async () => {

        const json = await API.getFiatTransaction();
        const sessionID = json["id"];
        const stripe = window.Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

        const {error} = await stripe.redirectToCheckout({
            // Make the id field from the Checkout Session creation API response
            // available to this file, so you can provide it as parameter here
            // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
            sessionId: sessionID
        })
// If `redirectToCheckout` fails due to a browser or network
// error, display the localized error message to your customer
// using `error.message`.

    };

    async payCrypto(cryptoCurrency) {
        this.Modal.current.ToggleShowing();
        this.Modal.current.ToggleLoading(true);
        const json = await API.getCryptoTransaction(cryptoCurrency);
        
        if (json["error"] !== "ok") {
            this.Modal.current.SetTextAndTitle("Error", json["error"]);
            return;
        }

        const result = json["result"];
        const address = result["Address"];
        const statusUrl = result["status_url"];
        const explanation = "Please send your " + cryptoCurrency +" to the following address: <br/> <br/>" + address + "<br/> <br/> ";
        const followingExplanation = "Monitor the status of your payment <a href=" +statusUrl+"> here </a> ";
        this.Modal.current.SetTextAndTitle("Transaction Created!", explanation + followingExplanation);
    };



    templatePage(){
        return(
            <>
                <ModalPage ref={this.Modal}/>
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

                    <MDBRow className="py-5 mt-5 ">
                        <MDBCol md="12">
                            <MDBAnimation type={"fadeInUp"}>
                                <MDBCard cascade >
                                    <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                        <div>
                                        </div>
                                        <p className="card-title h1">Review</p>
                                        <div>
                                        </div>
                                    </MDBCardHeader>
                                    <MDBCardBody className={"text-center"}>
                                        { this.state.showReview ? null
                                            :
                                            <MDBBtn id="generateButton" className="huge pink ui right labeled icon button btn-secondary bottomMargin " onClick={this.setTemplatePreview}>Generate Agreement<i className="play icon">

                                            </i></MDBBtn>
                                        }


                                        <AgreementPreview  className="subPanel minnish" id="preview" previewHTML={this.state.previewHTML} />
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBAnimation>
                        </MDBCol>
                    </MDBRow>

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

                                        <MDBCol lg="4" className="mb-3">
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



                                        <MDBCol lg="4" className="mb-3">
                                            <MDBAnimation reveal type="fadeInUp">
                                                <MDBCard cascade >
                                                    <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                                        <div/>
                                                        <p className="card-title h4">Purchase</p>
                                                        <div/>
                                                    </MDBCardHeader>
                                                    <MDBCardBody cascade>
                                                        <MDBCardText>
                                                            Buy now, pay in fiat.
                                                        </MDBCardText>
                                                        <MDBBtn size="lg" onClick={this.payFiat} className={"btn-secondary"}>
                                                            Pay Fiat
                                                        </MDBBtn>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBAnimation>
                                        </MDBCol>

                                        <MDBCol lg="4" className="mb-3">
                                            <MDBAnimation reveal type="fadeInUp">
                                                <MDBCard cascade >
                                                    <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                                        <div/>
                                                        <p className="card-title h4">Purchase</p>
                                                        <div/>
                                                    </MDBCardHeader>
                                                    <MDBCardBody cascade>
                                                        <MDBCardText>
                                                            Buy now, pay in Bitcoin or Ether.
                                                        </MDBCardText>
                                                        <MDBBtn size="lg" onClick={()=> this.payCrypto("LTCT")} className={"btn-secondary"}>
                                                            Pay in BTC (LTCT)
                                                        </MDBBtn>
                                                        <MDBBtn size="lg" onClick={()=> this.payCrypto("ETH")} className={"btn-secondary"}>
                                                            Pay in ETH
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
      <>

              { !this.state.executionResult  ?
                  <div className={"portalBackground"}>
                      <BannerHeader/>
                      <LoadingPortal/>
                  </div>
                  :
                  <div className={"mainBackground"}>
                  <BannerHeader/>
                      {
                          this.templatePage()
                      }
                  </div>

              }

    </>
    );
  }
}



