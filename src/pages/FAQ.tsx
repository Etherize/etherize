import React from "react";
import Head from "next/head";
import BannerHeader from "../components/BannerHeader";
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Footer from "../components/Footer";
import Constants from "../components/Constants";


type State = {
}


export default class FAQ extends React.Component<{}, State>{
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
                                <QuestionCard title={"What is Etherize?"} text={""}/>
                                <QuestionCard title={"What is a Hybrid Entity?"} text={""}/>
                                <QuestionCard title={"What's so great about a Wyoming LLC?"} text={"It's good for your soul"}/>
                                <QuestionCard id={Constants.ownershipFAQTag} title={"What is an Etheric Proof-of-Ownership token?"}
                                              text={" It's a non-fungible token that proves your Ethereum address owns the" +
                                              " company."}/>
                                <QuestionCard title={"What is OpenLaw?"} text={""}/>
                                <QuestionCard title={"What can I do with an OpenLaw account?"} text={""}/>
                                <QuestionCard title={"What is a DAO?"} text={""}/>
                        </MDBRow>
                    </MDBContainer>
                    <MDBRow/>
                </div>
                <Footer/>
            </>
        )
    }
}



type QProps={
    title:string
    text:string
    id?:string
}

class QuestionCard extends React.Component<QProps, {}>{

    render(){
        return (
            <MDBCol lg={"12"} className={"mt-1 mb-1"} id={this.props.id}>
                <MDBCard className={"text-center "} border={"0"}  >
                    <MDBCardBody className={"mt-5 mb-5 ml-3"} >
                        <MDBCardTitle className={"card-title h2"}> {this.props.title} </MDBCardTitle>
                        <MDBCardText className={"mt-2"}> {this.props.text}</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }
}
