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
    MDBCardHeader,
    MDBRow
} from "mdbreact";
import Footer from "../components/Footer";
import { withRouter, Router } from 'next/router'
import API from "../components/API";


type Props={
    router: Router
}
type State = {
    signUpExplanation: JSX.Element
    title:string
}

class Paid extends React.Component<Props, State>{

    state={
        signUpExplanation: null,
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
                          </h1>
                          <h3 className="text-center"><i>Next Steps:</i></h3>

                      </MDBContainer>
                    </MDBRow>


                      <MDBRow>
                        <MDBCol lg={"4"}  className={"text-center mx-auto"}>
                        <MDBCard cascade={true}>
                            <MDBCardBody>
                            <MDBCardTitle className={"card-title h2"}>1. Sign </MDBCardTitle>
                                <h5 className={"mt-2"}><i>Required - Now </i></h5>

                           <MDBCardText className={"mt-2"}>
                           <br/>
                               Check your inbox for the Formation Agreement from Etherize.<br/><br/>
                               Your e-mail or MetaMask signature will be recorded to the Rinkeby network.<br/><br/>
                           </MDBCardText>
                       </MDBCardBody>
                       </MDBCard>
                       </MDBCol>
                       <MDBCol lg={"4"}  className={"text-center mx-auto"}>
                       <MDBCard cascade={true}>
                           <MDBCardBody>
                           <MDBCardTitle className={"card-title h2 "}>2. Confirm</MDBCardTitle>
                               <h5 className={"mt-2"}><i>Required - Later</i></h5>

                          <MDBCardText className={"mt-2"}>
                          <br/>
                              Our team of machine elves will assess the viability of your Entity.<br/><br/>
                              They will seek Confirmation via the specified contact method.<br/><br/>
                              You may receive a full refund before the Confirmation by request.<br/>
                          </MDBCardText>
                      </MDBCardBody>
                      </MDBCard>
                      </MDBCol>
                       <MDBCol lg={"4"}  className={"text-center mx-auto"}>
                       <MDBCard cascade={true}>
                           <MDBCardBody>
                           <MDBCardTitle className={"card-title h2"}>3. Consult</MDBCardTitle>
                               <h5 className={"mt-2"}><i>Optional - Anytime</i></h5>
                          <MDBCardText className={"mt-2"}>

                              <br/>
                              The Formation Service includes one hour of consultation with our experts. <br/><br/>
                              Allow us to walk you through deploying an Ethereal component, or answer any other questions on how to work with the Entity.
                              <br/><br/>
                        </MDBCardText>
                               <MDBBtn size="lg" href={"https://calendly.com/etherize/consultation"} className={"btn-primary"}>
                                   <p className={"ethericText h3"}>Scheldule </p>
                               </MDBBtn>

                      </MDBCardBody>
                      </MDBCard>
                       </MDBCol>
                            {
                                this.state.signUpExplanation == null ?
                                    <div/>
                                    :
                                    <MDBCol lg={"12"}  className={"text-center mx-auto"}>
                                    <MDBCard className={"mt-3"} >
                                        <MDBCardBody>
                                        <MDBCardTitle className={"card-title h2"}>{this.state.title}</MDBCardTitle>
                                                {this.state.signUpExplanation}
                                            <MDBBtn size="lg" onClick={this.resendSignUpLink} className={"btn-secondary"}>
                                               Resend signup link
                                            </MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                    </MDBCol>
                            }

                        </MDBRow>
                    </MDBContainer>
                    <MDBRow/>
                </div>
                <Footer/>
            </>
        )
    }

    showSignUpBenefitsIfNewUser = async () => {
        const emailStart = this.props.router.asPath.indexOf("email=");
        const email = this.props.router.asPath.slice(emailStart+6);

        // console.log("email is: " + email);

        // check if they already have an account to view the draft
        const userExists = await API.CheckIfUserExists(email);
        if (!userExists){
            const explanation = <MDBCardText className={"mt-2"}> If you create an account you can see a history of any documents you've interacted
                with. Check your email for a sign up link. <br/>
                Don't see the sign up link in your email? click the button below </MDBCardText>;
            this.setState({
                signUpExplanation: explanation,
                title: "Dear New User"
            })
        }
    };

    resendSignUpLink = async () => {
        const email = this.props.router.query.email as string;
        console.log("email is: " + email);
        if (email == null || email == ""){
            console.log("error: no email passed in query parameter ");
            return
        }
        const apiClient = await API.GetOpenLawAPIClient("");
        API.SendInviteToUserFromAdminAccount(email);
    }
}
export default withRouter(Paid);
