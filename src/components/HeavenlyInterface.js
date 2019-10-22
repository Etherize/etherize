import React, { } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import SelectionPanel from "../components/SelectionPanel";
// import SubPanel from "../components/SubPanel";
// importing UI components
// import { Grid, Button, Card, Container  } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
// import "../components/Unused/ContentPanel.css"

// import openlaw
import { APIClient, Openlaw } from "openlaw";
import OpenLawForm from "openlaw-elements";
import AgreementPreview from "../components/AgreementPreview";
import {
    MDBAnimation, MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader, MDBCardText,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdbreact";

import "openlaw-elements/dist/openlaw-elements.min.css";
import "./HeavenlyInterface.css";

import BannerHeader from "./BannerHeader";
// configure openlaw
const URL = "https://etherizeit.openlaw.io";
// You can change TEMPLATE_NAME to 'articles-of-organization' to make the code work ...
// Right now, both deal templates on Etherizeit instance are causing the same issue
const OPENLAW_USER = 'etherize@protonmail.com';
const OPENLAW_PASSWORD = 'useresponsibly'

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
   progressMessage: ""
 };

 fileInputRef = React.createRef();
 componentDidMount = async () => {


   //create config
   const openLawConfig = {
     server: URL,
     templateName: this.props.templateName,
     userName: OPENLAW_USER,
     password: OPENLAW_PASSWORD
   };

   const apiClient = new APIClient(openLawConfig.server);
   console.log(openLawConfig.userName);
   //const { web3, accounts, contract } = this.props;
   //create an instance of the API client with url as parameter
   apiClient
     .login(openLawConfig.userName, openLawConfig.password)
     .then(console.log);

   //Retrieve your OpenLaw template by name, use async/await
   const template = await apiClient.getTemplate(openLawConfig.templateName);
   console.log(template);



   //Retreive the OpenLaw Template, including MarkDown
   const content = template.content;
   console.log("template..", template);

   //Get the most recent version of the OpenLaw API Tutorial Template
   const versions = await apiClient.getTemplateVersions(
     openLawConfig.templateName,
     20,
     1
   );
   console.log("versions..", versions[0], versions.length);

   const title = template.title;



   //Get my compiled Template, for use in rendering the HTML in previewTemplate
   const compiledTemplate = await Openlaw.compileTemplate(content);
   if (compiledTemplate.isError) {
     throw "template error" + compiledTemplate.errorMessage;
   }
   console.log("my compiled template..", compiledTemplate);



   const parameters = {
     "Organizer Signature": '{"email":"etherize@protonmail.com"}',
   };
   const { executionResult, errorMessage } = await Openlaw.execute(
     compiledTemplate.compiledTemplate,
     {},
     parameters
   );

   console.log("execution result:", executionResult);

   // ** This is helpful for logging in development, or throwing exceptions at runtime.
   if (errorMessage) {
     console.error("Openlaw Execution Error:", errorMessage);
   }

   const variables = await Openlaw.getExecutedVariables(executionResult, {});
   console.log("variables:", variables);

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
   console.log(parameters);

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
         const token = await apiClient.login(
           openLawConfig.userName,
           openLawConfig.password
         );


         const OPENLAW_JWT = token.headers.openlaw_jwt;

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


 payFiat = async () => {
    alert("Pay Fiat is not yet enabled.")
 }


 payCrypto = async () => {


 }


 onSubmit = async () => {
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
         const token = await apiClient.login(
           openLawConfig.userName,
           openLawConfig.password
         );

         const OPENLAW_JWT = token.headers.openlaw_jwt;

         //add Open Law params to be uploaded
         const uploadParams = await this.buildOpenLawParamsObj(
           this.state.template

         );
         console.log("parmeters from user..", uploadParams.parameters);
         const contractId = await apiClient.uploadContract(uploadParams);
         console.log("Contract ID: ", contractId);
         await apiClient.sendContract(["ineptitude@gmail.com"], ["ineptitude@gmail.com"], contractId);
         alert("Success! You should receive a request to sign the Agreement via e-mail.");
         } catch (error) {
           alert("Fail: " + error)
           await this.setState({
           progressMessage: "Uh oh, we've run into an error..."
         });
         console.log(error);
       }
     }
   );
 };



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
    if (!executionResult) return (
        // loading spinner:
        <MDBContainer>
            <MDBRow className="py-5 mt-5 ">
                <MDBCol  md="12" className={"text-center"}>
      <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
    return (
      <>
          <div className={"mainBackground"}>
              <BannerHeader/>
              <MDBContainer>
                  <MDBRow className="py-5 mt-5 ">
                      <MDBCol md="12">
                          <MDBAnimation type={"fadeInUp"}>
                              <MDBCard cascade >
                                  <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                      <div>
                                      </div>
                                      <p className="card-title h1">Define</p>
                                      <div>
                                      </div>
                                  </MDBCardHeader>
                                  <MDBCardBody className={"text-center"}>
                                      <OpenLawForm  style={{width: '50%'}}
                                                    apiClient={apiClient}
                                                    executionResult={executionResult}
                                                    parameters={parameters}
                                                    onChangeFunction={this.onChange}
                                                    openLaw={Openlaw}
                                                    variables={variables}
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
                                  <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                      <div>
                                      </div>
                                      <p className="card-title h1">Review</p>
                                      <div>
                                      </div>
                                  </MDBCardHeader>
                                  <MDBCardBody className={"text-center"}>
                                     { this.state.showReview ? null
                                       :
                                       <MDBBtn id="generateButton" className="huge pink ui right labeled icon button pillButton bottomMargin " onClick={this.setTemplatePreview}>Generate Agreement<i className="play icon">

                                       </i></MDBBtn>
                                     }



                                     <AgreementPreview  className="subPanel minnish" id="preview" previewHTML={previewHTML} />
                                  </MDBCardBody>
                              </MDBCard>
                          </MDBAnimation>
                      </MDBCol>
                  </MDBRow>

                  {/*spacing*/}
                  <MDBRow className={"mt-5"} >


                  {/*spacing*/}

                  {/*<MDBRow className={"mt-5 mb-5"} >*/}
                      <MDBCol className={"text-center"} md={"12"}>
                          <MDBAnimation type={"fadeInUp"}>
                              <MDBCard >
                                  <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
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
                                  <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                      <div/>
                                      <p className="card-title h4">Email Draft</p>
                                      <div/>
                                  </MDBCardHeader>
                                  <MDBCardBody cascade>
                                      <MDBCardText>
                                          <p>You can forward the Draft to your lawyer or your co-founders. </p>
                                          <p>You can convert the Draft into a Contract when you are ready to Form Entity.</p>
                                      </MDBCardText>

                                      <MDBBtn size="lg" className={"btn-pink"} onClick={this.sendDraft}>
                                          Save
                                      </MDBBtn>
                                  </MDBCardBody>
                              </MDBCard>
                          </MDBAnimation>
                      </MDBCol>



                      <MDBCol lg="4" className="mb-3">
                          <MDBAnimation reveal type="fadeInUp">
                              <MDBCard cascade >
                                  <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                      <div/>
                                      <p className="card-title h4">Purchase</p>
                                      <div/>
                                  </MDBCardHeader>
                                  <MDBCardBody cascade>
                                      <MDBCardText>
                                          Buy now, pay in fiat.
                                      </MDBCardText>
                                      <MDBBtn size="lg" onClick={this.payFiat} className={"btn-pink"}>
                                          Pay Fiat
                                      </MDBBtn>
                                  </MDBCardBody>
                              </MDBCard>
                          </MDBAnimation>
                      </MDBCol>

                      <MDBCol lg="4" className="mb-3">
                          <MDBAnimation reveal type="fadeInUp">
                              <MDBCard cascade >
                                  <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                      <div/>
                                      <p className="card-title h4">Purchase</p>
                                      <div/>
                                  </MDBCardHeader>
                                  <MDBCardBody cascade>
                                      <MDBCardText>
                                          Buy now, pay in crypto.
                                      </MDBCardText>
                                      <MDBBtn size="lg" onClick={this.payCrypto} className={"btn-pink"}>
                                          Pay Crypto
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
</div>
</>
    );




  }
}



{/*<Grid stackable={true}>*/}
{/*<Grid.Row>*/}

{/*</Grid.Row>*/}
{/*<Grid.Row>*/}
{/*  <Grid.Column width={3}>*/}

{/*  </Grid.Column>*/}
{/*  <Grid.Column  width={10}>*/}
{/*<div    className="contentPanel ">*/}
{/*  <div className="ui segment contentHeader ">*/}
{/*    <h1 className="contentHeaderText playNormal"><b>DEFINE</b></h1>*/}
{/*  </div>*/}

{/*  <Container textAlign='center'>*/}
{/*         <OpenLawForm  style={{width: '50%'}}*/}
{/*                     apiClient={apiClient}*/}
{/*                     executionResult={executionResult}*/}
{/*                     parameters={parameters}*/}
{/*                     onChangeFunction={this.onChange}*/}
{/*                     openLaw={Openlaw}*/}
{/*                     variables={variables}*/}
{/*                   /></Container>*/}
{/*</div>*/}
{/*  </Grid.Column>*/}
{/*  <Grid.Column width={3}>*/}
{/*  </Grid.Column>*/}
{/*</Grid.Row>*/}

{/*<Grid.Row>*/}
{/*  <Grid.Column width={3}>*/}
{/*  </Grid.Column>*/}
{/*  <Grid.Column width={10}>*/}


{/*<div className="contentPanel minnish ">*/}
{/*  <div className="ui segment contentHeader ">*/}
{/*    <h1 className="contentHeaderText playNormal"><b>REVIEW</b></h1>*/}
{/*  </div>*/}

{/*   { this.state.showReview ? null*/}
{/*     :*/}
{/*     <Button id="generateButton" className="huge pink ui right labeled icon button pillButton bottomMargin " onClick={this.setTemplatePreview}>Generate Agreement<i className="play icon"></i></Button>*/}
{/*   }*/}



{/*   <AgreementPreview  className="subPanel minnish" id="preview" previewHTML={previewHTML} />*/}
{/*</div>*/}


{/*</Grid.Column>*/}
{/*  <Grid.Column width={3}>*/}

{/*  </Grid.Column>*/}
{/*</Grid.Row>*/}
{/*          <Grid.Row>*/}
{/*            <Grid.Column width={3}>*/}
{/*            </Grid.Column>*/}
{/*            <Grid.Column width={10}>*/}
{/*            <div className="contentPanel minnish ">*/}

{/*            <div   className="ui segment contentHeader ">*/}
{/*              <h1 className="ui playNormal contentHeaderText"><b>FINALIZE</b></h1>*/}
{/*            </div>*/}

{/*            <Card.Group centered>*/}
{/*  <Card className="customCard">*/}
{/*    <Card.Content>*/}

{/*      <Card.Header>MAYBE LATER?</Card.Header>*/}
{/*      <Card.Meta>Send Draft to Your Email</Card.Meta>*/}
{/*      <Card.Description>*/}
{/*         <p>You can forward the Draft to your lawyer or your co-founders. </p><p>You can convert the Draft into a Contract when you are ready to Form Entity.</p>*/}
{/*      </Card.Description>*/}
{/*    </Card.Content>*/}
{/*    <Card.Content extra>*/}
{/*      <div  onClick={this.sendDraft} className='ui one buttons'>*/}
{/*        <Button big color='blue' className='large pillButton draftButton'>*/}
{/*          Save Draft*/}
{/*        </Button>*/}
{/*      </div>*/}
{/*    </Card.Content>*/}
{/*  </Card>*/}

{/*  <Card className="customCard">*/}
{/*    <Card.Content>*/}

{/*      <Card.Header>Pay Fiat</Card.Header>*/}
{/*      <Card.Meta></Card.Meta>*/}
{/*      <Card.Description>*/}

{/*      </Card.Description>*/}
{/*    </Card.Content>*/}
{/*    <Card.Content extra>*/}
{/*      <div className='ui one buttons'>*/}
{/*        <Button   onClick={this.payFiat} color='green' className='large pillButton'>*/}
{/*          Pay Fiat*/}
{/*        </Button>*/}
{/*      </div>*/}
{/*    </Card.Content>*/}
{/*  </Card>*/}

{/*  <Card className="customCard">*/}
{/*    <Card.Content>*/}

{/*      <Card.Header>Pay Crypto</Card.Header>*/}
{/*      <Card.Meta></Card.Meta>*/}
{/*      <Card.Description>*/}

{/*      </Card.Description>*/}
{/*    </Card.Content>*/}
{/*    <Card.Content extra>*/}
{/*      <div className='ui one buttons'>*/}
{/*        <Button   onClick={this.payCrypto} color='purple' className='large pillButton'>*/}
{/*          Pay Crypto*/}
{/*        </Button>*/}
{/*      </div>*/}
{/*    </Card.Content>*/}
{/*  </Card>*/}


{/*  <Card className="customCard">*/}
{/*    <Card.Content>*/}

{/*      <Card.Header>LET'S DO IT</Card.Header>*/}
{/*      <Card.Meta>Issue Formation Agreement</Card.Meta>*/}
{/*      <Card.Description>*/}
{/*        <p>You will receive an e-mail requesting autorization for 'Etherize Entities' to Form Entity on your behalf. </p>*/}
{/*        <p>No Payment is due until Entity's viability is Verified.</p>*/}
{/*      </Card.Description>*/}
{/*    </Card.Content>*/}
{/*    <Card.Content extra>*/}
{/*      <div className='ui one buttons'>*/}
{/*        <Button   onClick={this.onSubmit} color='pink' className='large pillButton'>*/}
{/*          Pay Later*/}
{/*        </Button>*/}
{/*      </div>*/}
{/*    </Card.Content>*/}
{/*  </Card>*/}

{/*</Card.Group>*/}





{/*             </div>*/}
{/*            </Grid.Column>*/}
{/*            <Grid.Column width={3}>*/}

{/*            </Grid.Column>*/}
{/*          </Grid.Row>*/}

{/*        </Grid>*/}

