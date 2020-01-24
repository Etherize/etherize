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
                        <MDBCol lg={"6"}  className={"text-center mx-auto"}>
                        <MDBCard cascade={true}>
                            <MDBCardBody>
                            <MDBCardTitle className={"card-title h4"}>Payment Complete!</MDBCardTitle>
                           <MDBCardText className={"mt-2"}>
                               We're working on creating your business, check your inbox for updates from us.
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

        API.SendInviteToUserFromAdminAccount(email);
        // OpenLawExtensions.sendUsersInviteIfNonexistent(apiClient.jwt, [email]);

    }
}
export default withRouter(Paid);
