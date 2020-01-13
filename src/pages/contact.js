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
import Constants from "../components/Constants";


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
                    <MDBCol md="3"/>
                    <MDBCol md="6">
                        <MDBAnimation type={"fadeInUp"}>
                            <MDBCard cascade >
                                <MDBCardHeader className="cardHeader d-flex justify-content-between align-items-center ">
                                    <div/> <p className="card-title h1">Contact</p> <div/>
                                </MDBCardHeader>
                                <MDBCardBody className={"text-center h3"}>
                                        <a color={"white"} href={'mailto:' + Constants.email} ><strong> <MDBIcon far icon='envelope' /> </strong></a>
                                       hello@etherize.io
                                        <br/> <br/>
                                        <a  href={Constants.twitter}><strong> <MDBIcon fab icon="twitter" /> </strong> </a>
                                         @EtherizePortal
                                        <br/> <br/>
                                        <a href={Constants.telegram}> <strong> <MDBIcon fab icon="telegram-plane" /> </strong></a>
                                        Etherize Channel
                                </MDBCardBody>
                            </MDBCard>
                        </MDBAnimation>
                    </MDBCol>
                   <MDBCol md="3"/>
                </MDBRow>
            </MDBContainer>
        </div>
    <Footer/>
    </>
    );
  }
}
