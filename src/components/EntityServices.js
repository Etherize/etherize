import React, { } from 'react';
import {
  MDBBtn,
  MDBCardText,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle, MDBBadge, MDBRow, MDBCol, MDBJumbotron, MDBAnimation, MDBCardHeader, MDBMedia
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

    </MDBContainer>


    <MDBContainer className={"text-center"}>
  </MDBJumbotron>



  {/* Fun Features row*/}

  <MDBRow className={"mt-1 cards-background fluid"}>
    {/*/!*Title*!/*/}
    <MDBCol className={"text-center mb-2"} lg={"12"}>


    <MDBAnimation type="fadeInLeft" delay="8s" reveal>
        <Link href={"/"}>
        <strong className="logoText">ETHERIZE</strong>
        </Link>
    </MDBAnimation>






        <MDBAnimation type="fadeInRight" delay="8s" reveal>
        <MDBCardTitle className="h1-responsive pt-3 m-5">
            Entity Formation Services
        </MDBCardTitle>
          </MDBAnimation>
    </MDBCol>
    <MDBContainer>
      <MDBRow>
         {/*Card layout/design loosely based on : https://bootstrapmade.com/demo/Remember/*/}
        {/*Card 1*/}
    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp" delay="2s">
        <MDBCard cascade className={"text-center"}>
        <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-2">
          <div/> <p className="card-title h3">Legal  <MDBIcon far icon="address-card" />  </p><div/>
        </MDBCardHeader>
          <MDBCardBody cascade>

               <MDBCardTitle> Entity Formation</MDBCardTitle>
            <MDBCardText>
              <li>A small squad of machine elves will be deployed to summon your new LLC or non-profit</li>
              <li>Complete one form and be done</li>
              <li>You will emailed your entity's proof-of-identity after the elves shuffle the papers for you</li>
              </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>

        {/*Card 2*/}
    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp" delay="4s">

        <MDBCard cascade className={"text-center"}>
        <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-2">
          <div/> <p className="card-title h3">Crypto <MDBIcon fab icon="ethereum" /></p> <div/>
        </MDBCardHeader>
          <MDBCardBody cascade>
             <MDBCardTitle>Etheric Utility</MDBCardTitle>
            <MDBCardText>
              <li>Bring in your public key, multi-sig wallet, or decentralized organization</li>
              <li>Execute legally binding agreements using your all the above </li>
              <li> Limit the liability for participating in a decentralized organization</li>
              <li>We kindly accept any shitcoins</li>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>

        {/*Card 3*/}
    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp" delay="6s">
      <MDBCard cascade className={"text-center"}>
        <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-2">
          <div/> <p className="card-title h3">Wyoming <MDBIcon icon="mountain" /></p>  <div/>
        </MDBCardHeader>
          <MDBCardBody cascade>
            <MDBCardTitle>Sovereign Keep</MDBCardTitle>
            <MDBCardText >
              <li>Strongest protections in the US for your 'real' and 'crypto' assets</li>
              <li>Enjoy low tax rates and filing fees</li>
              <li>Remain anonymous to the pesky State and solicitors</li>
              <li>Surprisingly easy access to banking services</li>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>
      </MDBRow>
    </MDBContainer>

  </MDBRow>



  {/* Products/cards row*/}

  <MDBRow className={"mt-1 cards-background fluid"}>
    {/*/!*Title*!/*/}
    <MDBCol className={"text-center mb-2"} lg={"12"}>
      <MDBAnimation reveal type={"fadeInDown"}>

      <MDBCardTitle className="h1-responsive pt-3 m-5">
            <h1>Our Services</h1>
            <h4><i>Incarnation Incantations</i></h4>
      </MDBCardTitle>
      </MDBAnimation>
    </MDBCol>
    <MDBContainer>
      <MDBRow>
         {/*Card layout/design loosely based on : https://bootstrapmade.com/demo/Remember/*/}
        {/*Card 1*/}
    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp">
        <MDBCard cascade className={"text-center"}>
          <MDBCardImage className="img-fluid" src={card1} waves />
          <MDBCardBody cascade>
               <MDBCardTitle>           <div/> <p className="card-title h3">Form Entity</p> <div/>       Starting at $300 / 1.7 ETH</MDBCardTitle>

            <MDBCardText>
            </MDBCardText>

            <MDBBtn size="lg" href={"/draft"} className={"btn-secondary"}>
                    Details <MDBIcon icon="question-circle" />
                   </MDBBtn>  <MDBBtn size="lg" href={"/draft"} className={"btn-secondary"}>
                               Start <MDBIcon icon="bolt" />
                             </MDBBtn>

          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>

        {/*Card 2*/}
    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp">

        <MDBCard cascade className={"text-center"}>
                  <MDBCardImage className="img-fluid" src={card2} waves />
          <MDBCardBody cascade>
             <MDBCardTitle>Starting at $200 / 1.1 ETH</MDBCardTitle>
            <MDBCardText>
              <li>Pre-formed Series LLC company</li>
              <li>Park your assets and limit your DAO participation liability </li>
              <li> Get your EIN instantly</li>
              <li>Optionally: Control your entity using any applicable crypto-token</li>
            </MDBCardText>
            <h4><MDBBadge className="mr-2 mt-2 badge-info"> Wyoming Series LLC </MDBBadge></h4>

<<<<<<< Updated upstream
            <MDBBtn size="lg" href={"/adopt/registry"} className={"btn-secondary"}>
              Adopt
=======
            <MDBBtn disabled size="lg" href={"#"} className={"btn-secondary"}>
              Coming Soon
>>>>>>> Stashed changes
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>

        {/*Card 3*/}
    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp">
      <MDBCard cascade className={"text-center"}>
          <MDBCardImage className="img-fluid" src={card3} waves />
          <MDBCardBody cascade>
            <MDBCardTitle>Free</MDBCardTitle>
            <MDBCardText >
              <li>Design a Hybrid Entity with the help of our Wizard 🧙‍</li>
              <li> Draft your Articles of Incorporation and Operating Agreement</li>
              <li>Submit the filings yourself, or hire Etherize to do it for you later</li>
            </MDBCardText>
            <h4><MDBBadge className="mr-2 mt-2 badge-info"> LLC or Non-Profit </MDBBadge>
            <MDBBadge className="mr-2 mt-2 badge-info"> Any state</MDBBadge></h4>
            <MDBBtn size="lg" href={"/draft"} className={"btn-secondary"}>
              Draft <MDBIcon icon="pencil-alt" />
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>
      </MDBRow>
    </MDBContainer>

  </MDBRow>
</div>

)

export default EntityServices;
