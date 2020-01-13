import React, {Component} from "react";
import Head from "next/head";
import BannerHeader from "../components/BannerHeader";
import {MDBCard, MDBCardHeader, MDBCol, MDBContainer, MDBJumbotron, MDBRow} from "mdbreact";
import Footer from "../components/Footer";

export default class Paid extends Component {

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
                       <MDBCardHeader>Success! You'll have your business in no time, check your inbox for updates from us. </MDBCardHeader>
                       </MDBCard>
                        </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBRow/>
                </div>
                <Footer/>
            </>
        )
    }
}
