import React, { Component } from 'react';
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
    MDBCardImage,
    MDBRow
} from "mdbreact";
import Head from "next/head";
import Footer from "../components/Footer";
import portal from "../assets/img/portal.webp"


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
                <MDBRow className="py-5 mt-5">
                  <MDBCol md="6" className={"mt-3"}>
                          <MDBAnimation type={"fadeInLeft"}>
                            <MDBCard cascade >
                                  <MDBCardBody className="lessBottomPadding">
                                    <MDBCardImage className="img-fluid" src={portal} waves />
                                    <MDBCardText className="card-subtitle card-subtitle-padding">
                                       may these tools be your guide to the other side
                                    </MDBCardText>
                                  </MDBCardBody>
                              </MDBCard>
                          </MDBAnimation>
                  </MDBCol>
                    <MDBCol md="6" className={"mt-3"}>
                        <MDBAnimation type={"fadeInRight"}>
                            <MDBCard cascade >

                                <MDBCardBody>
                                    <MDBCardHeader className={"text-center cardHeader shortyCardHeader h2"} >
                                      Hybrids 👾
                                    </MDBCardHeader>
                                    <MDBContainer className={"text-center cardContent"}>
                                        <a href='https://medium.com/openlawofficial/the-lao-a-for-profit-limited-liability-autonomous-organization-9eae89c9669c'>LAO (Moloch DAO/Delaware LLC)</a><br/>
                                        <a href='https://github.com/open-esq'>OpenESQ (Aragon DAO/NY LLC)</a><br/>
                                        <a href='https://github.com/dOrgTech/LL-DAO'>dORG (LL-DAO, Vermont)</a><br/>
                                        <a href='https://github.com/metacartel/MCV/blob/master/Whitepaper.pdf'>MetaCartel Venture DAO (Moloch  DAO/Delaware LLC)</a><br/>
                                    </MDBContainer>
                                    <MDBCardHeader className={"text-center cardHeader shortyCardHeader h2"} >
                                       Templates <MDBIcon far icon='file-alt' />
                                    </MDBCardHeader >
                                      <MDBContainer className={"cardContent text-center"}>
                                        <a href='https://github.com/Ro5s/Startup-Starter-Pack'>Startup Starter Pack 🎒</a> <br/>
                                        <a href='https://dao.openlaw.io/'>OpenLaw: DAO Formation & Usage</a><br/>
                                        <a href='https://lib.openlaw.io/web/etherizeit/template/Hybrid%20Formation%20Service%20Agreement'>Hybrid Formation Agreement</a><br/>
                                        <a href='https://app.openlaw.io/template/LLC-DAO%20Operating%20Agreement%20(NY)'>Operating Agreement: DAO/LLC (NY)</a><br/>
                                        </MDBContainer>
                                        <MDBCardHeader className={"text-center cardHeader shortyCardHeader h2"} >
                                            Code <MDBIcon icon='code' />
                                          </MDBCardHeader>
                                            <MDBContainer className={" cardContent text-center"}>
                                          <a href='http://github.com/jierdin/etherize'> Etherize Github</a>
                                          <br/>
                                          <a href='https://docs.openlaw.io/markup-language/'>OpenLaw Docs (Legal Templating)</a>
                                          <br/>
                                          <a href='https://hack.aragon.org/'>Aragon Docs (DAO Framework)</a>
                                          </MDBContainer>
                                        <MDBCardHeader className={"text-center cardHeader shortyCardHeader h2"} >

                                            Communications  <MDBIcon fab icon="telegram-plane"/>
                                        </MDBCardHeader>
                                          <MDBContainer className={"cardContent text-center"}>
                                          <a href='https://t.me/hybridentities'>Hybrid Entities Discussion</a>
                                          <br/>
                                          <a href='https://t.me/etherize'>Etherize Announcements</a>
                                          <br/>
                                          <a href='https://t.me/OpenEsquire'>OpenESQ Announcements</a>
                                          </MDBContainer>
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
export default Tools;
