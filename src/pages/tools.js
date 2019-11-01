import React, { Component } from 'react';
// import { Grid, List } from 'semantic-ui-react'
// import ContentPanel from '../components/ContentPanel';
import BannerHeader from "../components/BannerHeader";
import {
    MDBAnimation,
    MDBCard,
    MDBCardBody,
    MDBCardHeader, MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow
} from "mdbreact";
import Head from "next/head";


class Tools extends Component {
  render() {
    return (
        <>
            <Head>
                <title>Etherize Tools</title>
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
                                    <div/>
                                    <p className="card-title h1">Tools</p>
                                    <div/>
                                    </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBContainer className={"text-center h2"} >
                                        <strong> <MDBIcon icon='rocket' /> </strong>
                                        Other Hybrid Entities
                                    </MDBContainer>
                                    <MDBContainer className={"text-center"}>
                                        <a href='https://medium.com/openlawofficial/the-lao-a-for-profit-limited-liability-autonomous-organization-9eae89c9669c'>LAO (Moloch Fork/ Delaware LLC)</a><br/>
                                        <a href='http://openesq.tech'>OpenESQ (Aragon DAO/ NY LLC)</a><br/>
                                        <a href='https://github.com/dOrgTech/LL-DAO'>dORG (LL-DAO, Vermont)</a><br/>
                                        <MDBContainer className={"text-center h2"} >
                                            <strong> <MDBIcon far icon='file-alt' /> </strong>
                                            Open Law Agreements
                                        </MDBContainer>
                                        <a href='https://etherizeit.openlaw.io/template/deal-entity'>Full Entity Creation Deal</a> <br/>
                                        <a href='https://etherizeit.openlaw.io/template/service-argreement-organizer'>Service Agreement: Entity Organizer</a><br/>
                                        <a href='https://etherizeit.openlaw.io/template/bylaws-dao-non-profit'>Service Agreement: Registered Agent</a><br/>
                                        <a href='https://app.openlaw.io/template/LLC-DAO%20Operating%20Agreement%20(NY)'>Operating Agreement: DAO/LLC (NY)</a><br/>
                                        <a href='https://etherizeit.openlaw.io/template/bylaws-dao-non-profit'>Operating Agreement: DAO/Series LLC (WY)</a><br/>
                                        <MDBContainer className={"text-center h2"} >
                                            <strong> <MDBIcon icon='code' /> </strong>
                                            Code
                                        </MDBContainer>

                                        <a href='https://hack.aragon.org/docs/getting-started'>Aragon (DAO Platform)</a>
                                        <br/>
                                        <a href='https://github.com/open-esq'>OpenESQ Github (Legal Engineering)</a>
                                        <br/>
                                        <a href='http://github.com/jierdin/etherize'> Etherize Github</a>
                                        <MDBContainer className={"text-center h2"} >
                                            <strong> <MDBIcon fab icon="telegram-plane"/> </strong>
                                            Telegram
                                        </MDBContainer>
                                        <a href='https://t.me/etherize'>Etherize Announcements</a>
                                        <br/>
                                        <a href='https://t.me/hybridentities'>Hybrid Entities Discussion</a>
                                        <br/>
                                        <a href='https://t.me/OpenEsquire'>Open ESQ Announcements</a>

                                    </MDBContainer>
                                </MDBCardBody>
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
export default Tools;

