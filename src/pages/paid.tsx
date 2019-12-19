import React, {Component} from "react";
import Head from "next/head";
import BannerHeader from "../components/BannerHeader";
import {MDBCard, MDBCardHeader, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Footer from "../components/Footer";

export default class Paid extends Component {

    render() {
        return (
            <>
                <Head>
                    <title>Etherize Blog</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className={"mainBackground"}>

                    <BannerHeader/>
                    <MDBContainer>
                       <MDBCard>
                       <MDBCardHeader>Success! Check your inbox for updates from us. </MDBCardHeader>
                       </MDBCard>
                    </MDBContainer>
                    <MDBRow/>
                </div>
                <Footer/>
            </>
        )
    }
}
