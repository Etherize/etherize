import React, {} from "react";
import Head from "next/head";
import BannerHeader from "../components/BannerHeader";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdbreact";
import Footer from "../components/Footer";
import { withRouter, Router } from 'next/router'
import API from "../components/API";
import OpenLawExtensions from "../components/OpenLawExtensions";


type Props={
    router: Router
}
type State = {
    signUpExplanation: string
    title:string
}

class Paid extends React.Component<Props, State>{

    state={
        signUpExplanation:"",
        title:""
    };

    componentDidMount(): void {
        this.showSignUpBenefitsIfNewUser();
        this.resendSignUpLink = this.resendSignUpLink.bind(this);

    }

    render() {
        return (
            <>
                <Head>
                    <title>Payment Successful</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className={"mainBackground"}>

                    <BannerHeader/>
                    <MDBContainer className={"mt-5"}>

                    <MDBRow>
                      <MDBContainer lg={"16"}>
                          <h1 className="jumbo-title text-center">
                              Success!
                          </h1><br/>
                          <h3 className="text-center"><i>Next Steps:</i></h3>
                          <br/><br/>
                      </MDBContainer>
                    </MDBRow>


                      <MDBRow>
                        <MDBCol lg={"4"}  className={"text-center mx-auto"}>
                        <MDBCard cascade={true}>
                            <MDBCardBody>
                            <MDBCardTitle className={"card-title h4"}><h2>1. Sign Agreement</h2><h5><i>Required</i></h5></MDBCardTitle>
                           <MDBCardText className={"mt-2"}>
                           <br/>
                               Check your inbox for the Formation Agreement from Etherize.<br/><br/>
                               You can sign using your e-mail or MetaMask as the identifier.<br/><br/>
                           </MDBCardText>
                       </MDBCardBody>
                       </MDBCard>
                       </MDBCol>
                       <MDBCol lg={"4"}  className={"text-center mx-auto"}>
                       <MDBCard cascade={true}>
                           <MDBCardBody>
                           <MDBCardTitle className={"card-title h4"}><h2>2. Confirmation</h2><h5><i>Required</i></h5></MDBCardTitle>
                          <MDBCardText className={"mt-2"}>
                          <br/>
                              Our team will assess the viability of your Entity before we submit the paperwork.<br/><br/>
                              We will confirm with you via e-mail or your specified contact method before we do.<br/><br/>
                              You may request a full refund before the Confirmation.<br/>
                          </MDBCardText>
                      </MDBCardBody>
                      </MDBCard>
                      </MDBCol>
                       <MDBCol lg={"4"}  className={"text-center mx-auto"}>
                       <MDBCard cascade={true}>
                           <MDBCardBody>
                           <MDBCardTitle className={"card-title h4"}><h2>3. Scheldule Call</h2><h5><i>Optional</i></h5></MDBCardTitle>
                          <MDBCardText className={"mt-2"}>
                              <br/>
                              The Formation Service includes at least one hour of consultation. <br/><br/>
                              We can help you deploy the blockchain component, or answer any questions on how to work with the Entity.
                              <br/><br/>
                              <MDBBtn size="lg" href={"https://calendly.com/etherize/consultation"} className={"btn-primary"}>
                                  <h2 className="h5 ethericText">Scheldule</h2>
                              </MDBBtn>
                        </MDBCardText>
                      </MDBCardBody>
                      </MDBCard>
                            {
                                this.state.signUpExplanation == "" ?
                                    <div></div>
                                    :
                                    <MDBCard className={"mt-3"}>
                                        <MDBCardBody>
                                        <MDBCardTitle className={"card-title h4"}>{this.state.title}</MDBCardTitle>
                                            <MDBCardText className={"mt-2"}>
                                        {this.state.signUpExplanation}
                                            </MDBCardText>
                                            <MDBBtn size="lg" onClick={this.resendSignUpLink} className={"btn-secondary"}>
                                               Resend signup link
                                            </MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                            }
                        </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBRow/>
                </div>
                <Footer/>
            </>
        )
    }

    showSignUpBenefitsIfNewUser = async () => {

        const email = this.props.router.query.email;
        if (email == null){
            return
        }
        console.log("email is: " + email);

        const apiClient = await API.GetOpenLawAPIClient("");
        // check if they already have an account to view the draft
        const emailSearchResult = await apiClient.searchUsers(email, 1, 25);
        if (emailSearchResult["nbHits"] <= 0) {
            const explanation = "If you create an account you can see a history of any documents you've interacted " +
                "with. Check your email for a sign up link. " +
                "Don't see the sign up link in your email? click the button below";
            this.setState({
                signUpExplanation: explanation,
                title: "Dear New User"
            })
        }
    };

    resendSignUpLink = async () => {
        const email = this.props.router.query.email as string;
        if (email == null || email == ""){
            console.log("error: no email passed in query parameter ");
            return
        }
        const apiClient = await API.GetOpenLawAPIClient("");

        OpenLawExtensions.sendUsersInviteIfNonexistent(apiClient.jwt, [email]);

    }
}
export default withRouter(Paid);
