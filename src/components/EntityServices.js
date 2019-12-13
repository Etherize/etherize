import React, { } from 'react';
import {
  MDBBtn,
  MDBCardText,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle, MDBBadge, MDBRow, MDBIcon, MDBCardImage, MDBCol, MDBJumbotron, MDBAnimation, MDBCardHeader, MDBMedia
} from "mdbreact";
import "./EntityServices.css";


import Link from 'next/link';
import card1 from "../assets/img/mountain-portal.png"
import card2 from "../assets/img/mountain-portal.png"
import card3 from "../assets/img/mountain-portal.png"
import BannerHeader from "./BannerHeader";
import portal from "../assets/img/SquareWhitePortalSplash.mp4"

const EntityServices = () => (

<div className={"portalBackground"}>
  <BannerHeader/>

  <MDBJumbotron fluid >



    <MDBContainer className={"mt-5"} >
      <MDBRow>
    <MDBRow>
    <MDBCol md={"4"} middle={"true"}>



      <MDBCard border={"0"} className={"my-auto"}>
        <MDBAnimation type={"fadeInRight"} duration={"2s"}>
      <MDBCardTitle className="h1-responsive jumbo-title text-center">
            Portal:

    </MDBCardTitle>
        </MDBAnimation>
      </MDBCard>
  </MDBCol>
    <MDBCol md={"4"} sm={"4"} xs={"2"}  middle={"true"}>
      <MDBAnimation type={"fadeIn"} duration={"2s"}>

  <MDBCard border={"0"} className={"my-auto"} >
      <video muted loop id="myVideo" autoPlay={true} >
        <source src={portal} type="video/mp4"/>
      </video>
      </MDBCard>
      </MDBAnimation>

    </MDBCol>
      <MDBCol md={"4"} sm={"6"} xs={"2"} middle={"true"}>

      <MDBCard border={"0"} className={"my-auto"} >
        <MDBAnimation type={"fadeInLeft"} duration={"2s"} >

        <MDBCardTitle className="h1-responsive jumbo-title text-left">
        pened

      </MDBCardTitle>
        </MDBAnimation>
      </MDBCard>
    </MDBCol>
    <MDBContainer className={"text-center"}>
      <MDBAnimation type={"fadeInDown"} duration={"2s"}>

      <MDBAnimation type="bounce"  count={7}>

      <MDBCardTitle className="h1-responsive title pt-3 m-5">
                <h1 className="entity-type-description bold">The Portal Beckons 🤙</h1>
      </MDBCardTitle>

      </MDBAnimation>
      </MDBAnimation>



                  <h2> It speaks no audible language,</h2>
                  <h2>but in your mind the question forms:</h2>
                  <br/>
                  <MDBAnimation type="bounceIn"  reveal>
                      <h1 className="bold">"Are you ready?"</h1>
            </MDBAnimation>

                <br/>
                <MDBAnimation type="fadeInRight" delay="2s" reveal>
                        <h3>...to rally your team?</h3>
                </MDBAnimation>
                <MDBAnimation type="fadeInRight" delay="4s" reveal>
                          <h3>...to secure your assets?</h3>
                </MDBAnimation>

                <MDBAnimation type="fadeInRight" delay="6s" reveal>
                          <h3>...to govern legally & etherically?</h3>
                </MDBAnimation>

                      </MDBContainer>
                      </MDBRow>
                    <MDBContainer className={"text-center"}>


                </MDBContainer>

  {/* Fun Features row*/}

  <MDBRow className={"mt-1 cards-background fluid"}>
    {/*/!*Title*!/*/}
    <MDBCol className={"text-center mb-2"} lg={"12"}>


    <MDBAnimation type="fadeInLeft" delay="8s" reveal>
        <Link href={"/"}>
        <strong className="logoText">ETHERIZE</strong>
        </Link>
    </MDBAnimation>


            </MDBCol>
            </MDBRow>
            </MDBRow>
            </MDBContainer>

      </MDBJumbotron>


</div>
)

export default EntityServices;
