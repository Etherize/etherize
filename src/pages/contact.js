import React, { Component } from 'react';
import BannerHeader from "../components/BannerHeader";
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBContainer,
    MDBCardHeader,
    MDBAnimation,
    MDBCardTitle, MDBIcon, MDBCardText, MDBCardImage
} from "mdbreact";
import Head from "next/head";
import Footer from "../components/Footer";


export default class Contact extends Component {
  render() {
    return (
        <>
        <Head>
            <title>Etherize Contact</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={"mainBackground"}>
            <BannerHeader/>
            <MDBContainer>
                <MDBRow className="py-5 mt-5 ">
                    <MDBCol md="12">
                        <MDBAnimation type={"fadeInUp"}>
                            <MDBCard cascade >
                                <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                    <div/> <p className="card-title h1">Contact</p> <div/>
                                </MDBCardHeader>
                                <MDBCardBody className={"text-center h3"}>
                                        <a color={"white"} href='mailto:hello@etherize.io@'><strong> <MDBIcon far icon='envelope' /> </strong></a>
                                       hello@etherize.io
                                        <br/> <br/>
                                        <a href='https://twitter.com/aitherick'><strong> <MDBIcon fab icon="twitter" /> </strong> </a>
                                        @aitherick
                                        <br/> <br/>
                                        <a href='https://t.me/hybridentities'> <strong> <MDBIcon fab icon="telegram-plane" /> </strong></a>
                                        hybrid entity channel
                                </MDBCardBody>
                            </MDBCard>
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    <Footer/>
    </>
    );
  }
}
