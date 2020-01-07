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
import FlipCard from 'react-png-flipcard';
import card1 from "../assets/img/mountain-portal.png"
import card2 from "../assets/img/awaken-giant-beeple.webp"
import card3 from "../assets/img/mountain-portal.png"
import sleeping from "../assets/img/sleeping-giant-beeple.webp"
import gemini from "../assets/img/gemini-beeple.webp"
import self from "../assets/img/self-beeple.webp"
import catalytic from "../assets/img/catalytic-beeple.webp"
import BannerHeader from "./BannerHeader";
import portal from "../assets/img/SquareWhitePortalSplash.mp4"



// const EntityServices = () => (
class EntityServices extends React.Component {

    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleHoverFlip = this.handleHoverFlip.bind(this);
    }

    handleHoverFlip(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {

        return (

            <div className={"portalBackground"}>
                <BannerHeader/>
                <MDBJumbotron fluid>
                    <MDBContainer className={"mt-5"}>
                        <MDBRow>
                            <MDBRow>
                                <MDBCol md={"4"} middle={"true"}>
                                    <MDBCard border={"0"} className={"my-auto"}>
                                        <MDBAnimation type={"fadeInRight"} duration={"2s"}>
                                            <MDBCardTitle className="h1-responsive jumbo-title text-center">
                                                conjure hybrid friends
                                            </MDBCardTitle>
                                        </MDBAnimation>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol md={"4"} sm={"4"} xs={"2"} middle={"true"}>
                                    <MDBAnimation type={"fadeIn"} duration={"2s"}>

                                        <MDBCard border={"0"} className={"my-auto"}>
                                            <video muted loop id="myVideo" autoPlay={true}>
                                                <source src={portal} type="video/mp4"/>
                                            </video>
                                        </MDBCard>
                                    </MDBAnimation>

                                </MDBCol>
                                <MDBCol md={"4"} sm={"6"} xs={"2"} middle={"true"}>

                                    <MDBCard border={"0"} className={"my-auto"}>
                                        <MDBAnimation type={"fadeInLeft"} duration={"2s"}>

                                            <MDBCardTitle className="h1-responsive  text-left">
                                                [LLC/Non-Profit]
                                                <br/>
                                                controlled via
                                                <br/>
                                                [DAO/ERC20 Token/Multi-Sig Wallet/Public Key]
                                            </MDBCardTitle>
                                        </MDBAnimation>
                                    </MDBCard>
                                </MDBCol>
                                <MDBContainer className={"text-center"}>
                                    <MDBAnimation type={"fadeInDown"} duration={"2s"}>

                                        <MDBCardTitle className="h1-responsive title pt-3 m-5">
                                            <h1 className="entity-type-description bold">The Portal Beckons</h1>
                                        </MDBCardTitle>

                                    </MDBAnimation>
                                    <h2> It speaks no audible language,</h2>
                                    <h2>but in your mind the question forms:</h2>
                                    <br/>
                                    <MDBAnimation type="bounceIn" reveal>
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

                                {/* Fun Features row*/}


                            </MDBRow>
                        </MDBRow>
                    </MDBContainer>
                </MDBJumbotron>

                    <MDBRow className={"mt-1 cards-background fluid"}>
                        {/*/!*Title*!/*/}
                        <MDBCol className={"text-center mb-2"} lg={"12"}>
                            <MDBAnimation type="fadeIn" delay="8s" reveal>
                                <Link href={"/"}>
                                    <strong className="mt-4 logoText">ETHERIZE</strong>
                                </Link>
                                <div className="mt-4"/>
                            </MDBAnimation>
                        </MDBCol>


                        {/* Products/cards row*/}
                        <MDBCol className={"text-center mb-2"} lg={"12"}>

                        </MDBCol>
                        <MDBContainer>
                            <MDBRow>
                                {/*Card layout/design loosely based on : https://bootstrapmade.com/demo/Remember/*/}

                                <MDBCol lg="4" className="mb-4">
                                    <FlipCard
                                            front={
                                                <div>
                                                    <MDBCard cascade className={"text-center"}>

                                                    <MDBCardImage className="img-fluid" src={card2} waves/>
                                                    <MDBCardBody cascade>
                                                        <MDBCardTitle>
                                                            <div/>
                                                            <p className="card-title h3">Design Entity</p> from
                                                            <div/>
                                                            💦 & 🧠</MDBCardTitle>

                                                        <MDBCardText>
                                                        </MDBCardText>
                                                        <p> our wizard🧙 generates documents for you & co-founders to review and, if
                                                            the stars align, sign
                                                        </p>
                                                        <MDBBtn size="lg" href={"/draft"} className={"btn-secondary"}>
                                                            Begin <MDBIcon icon="bolt"/>
                                                        </MDBBtn>
                                                    </MDBCardBody>
                                                    </MDBCard>
                                                </div>
                                            }
                                            back={
                                                <MDBCard cascade className={"text-center"}>
                                                    <MDBCardBody cascade>
                                                        <MDBCardText>
                                                            <li>Design a Hybrid Entity with the help of our Wizard 🧙‍</li>
                                                            <li> Draft your Articles of Incorporation and Operating Agreement</li>
                                                            <li>Submit the filings yourself, or hire Etherize to do it for you
                                                                later
                                                            </li>
                                                        </MDBCardText>
                                                        <h4><MDBBadge className="mr-2 mt-2 badge-info"> Any
                                                            State</MDBBadge><MDBBadge className="mr-2 mt-2 badge-info">Any Crypto
                                                            Network</MDBBadge><MDBBadge className="mr-2 mt-2 badge-info">Non-Profit or
                                                            LLC</MDBBadge></h4>

                                                    </MDBCardBody>
                                                </MDBCard>
                                            }
                                            height={700}
                                            direction="horizontal"
                                            flip={this.state.isFlipped}
                                        />
                                </MDBCol>




                                {/*Card 2 Back*/}
                                {/*<MDBCol lg="4" className="mb-4">*/}
                                {/*    <MDBCard cascade className={"text-center"}>*/}
                                {/*        <MDBCardBody cascade>*/}
                                {/*            <MDBCardText>*/}
                                {/*                <li>Design a Hybrid Entity with the help of our Wizard 🧙‍</li>*/}
                                {/*                <li> Draft your Articles of Incorporation and Operating Agreement</li>*/}
                                {/*                <li>Submit the filings yourself, or hire Etherize to do it for you*/}
                                {/*                    later*/}
                                {/*                </li>*/}
                                {/*            </MDBCardText>*/}
                                {/*            <h4><MDBBadge className="mr-2 mt-2 badge-info"> Any*/}
                                {/*                State</MDBBadge><MDBBadge className="mr-2 mt-2 badge-info">Any Crypto*/}
                                {/*                Network</MDBBadge><MDBBadge className="mr-2 mt-2 badge-info">Non-Profitor*/}
                                {/*                LLC</MDBBadge></h4>*/}

                                {/*        </MDBCardBody>*/}
                                {/*    </MDBCard>*/}
                                {/*</MDBCol>*/}


                                {/*Card 1 Front*/}
                                {/*<MDBCol lg="4" className="mb-4">*/}

                                {/*    <MDBCard cascade className={"text-center"}>*/}
                                {/*        <MDBCardImage className="img-fluid" src={self} waves/>*/}
                                {/*        <MDBCardBody cascade>*/}
                                {/*            <MDBCardTitle>*/}
                                {/*                <div/>*/}
                                {/*                <p className="card-title h3">Form Hybrid Entity</p>*/}
                                {/*                <div/>*/}
                                {/*                <h6>from</h6><h3>$700 | 5<MDBIcon fab icon="ethereum"/></h3>*/}

                                {/*            </MDBCardTitle>*/}

                                {/*            <MDBCardText>*/}
                                {/*            </MDBCardText>*/}
                                {/*            <p> our team of machine elves🧚‍ will toil until your hybrid entity is*/}
                                {/*                formed and making its first steps on Earth</p>*/}
                                {/*            <MDBBtn size="lg" href={"/draft"} className={"btn-secondary"}>*/}
                                {/*                Begin <MDBIcon icon="bolt"/>*/}
                                {/*            </MDBBtn>*/}

                                {/*        </MDBCardBody>*/}
                                {/*    </MDBCard>*/}
                                {/*</MDBCol>*/}

                                {/*/!*Card 1 Back*!/*/}
                                {/*<MDBCol lg="4" className="mb-4">*/}
                                {/*    <MDBAnimation reveal type="fadeInUp">*/}
                                {/*        <MDBCard cascade className={"text-center"}>*/}
                                {/*            <MDBCardBody cascade>*/}
                                {/*                <MDBCardText>*/}
                                {/*                    <li>manage your Hybrid Entity using your email or network address*/}
                                {/*                    </li>*/}
                                {/*                    <li>limit participants' liability</li>*/}
                                {/*                    <li>operating agreement crafted from your input & our templates</li>*/}
                                {/*                    <li>two consultations included</li>*/}
                                {/*                </MDBCardText>*/}
                                {/*                <h4><MDBBadge*/}
                                {/*                    className="mr-2 mt-2 badge-info"> Wyoming</MDBBadge><MDBBadge*/}
                                {/*                    className="mr-2 mt-2 badge-info">Non-Profit or*/}
                                {/*                    LLC</MDBBadge><MDBBadge className="mr-2 mt-2 badge-info">Any Crypto*/}
                                {/*                    Network</MDBBadge></h4>*/}
                                {/*            </MDBCardBody>*/}
                                {/*        </MDBCard>*/}
                                {/*    </MDBAnimation>*/}
                                {/*</MDBCol>*/}


                                {/*/!*Card 3 Front*!/*/}
                                {/*<MDBCol lg="4" className="mb-4">*/}

                                {/*    <MDBCard cascade className={"text-center"}>*/}
                                {/*        <MDBCardImage className="img-fluid" src={sleeping} waves/>*/}
                                {/*        <MDBCardBody cascade>*/}
                                {/*            <MDBCardTitle>*/}
                                {/*                <div/>*/}
                                {/*                <p className="card-title h3">Form Legal Entity</p>*/}
                                {/*                <div/>*/}
                                {/*                <h6>from</h6><h3>$500 | 4<MDBIcon fab icon="ethereum"/></h3>*/}

                                {/*            </MDBCardTitle>*/}

                                {/*            <MDBCardText>*/}
                                {/*            </MDBCardText>*/}
                                {/*            <p> form your new legal entity without having to sign a single piece of*/}
                                {/*                paper - you can add on blockchain components later</p>*/}
                                {/*            <MDBBtn size="lg" href={"/draft"} className={"btn-secondary"}>*/}
                                {/*                Begin <MDBIcon icon="bolt"/>*/}
                                {/*            </MDBBtn>*/}

                                {/*        </MDBCardBody>*/}
                                {/*    </MDBCard>*/}
                                {/*</MDBCol>*/}

                                {/*/!*Card 3 Back*!/*/}
                                {/*<MDBCol lg="4" className="mb-4">*/}
                                {/*    <MDBAnimation reveal type="fadeInUp">*/}
                                {/*        <MDBCard cascade className={"text-center"}>*/}
                                {/*            <MDBCardBody cascade>*/}
                                {/*                <MDBCardText>*/}
                                {/*                    <li>your EIN and Formation Certificate will be sent to your inbox*/}
                                {/*                    </li>*/}
                                {/*                    <li>enjoy the lowest taxes and strongest protections in the US</li>*/}
                                {/*                    <li>one consultation included to help you get things rolling</li>*/}
                                {/*                </MDBCardText>*/}
                                {/*                <h4><MDBBadge*/}
                                {/*                    className="mr-2 mt-2 badge-info"> Wyoming</MDBBadge><MDBBadge*/}
                                {/*                    className="mr-2 mt-2 badge-info">Non-Profit or LLC</MDBBadge></h4>*/}
                                {/*            </MDBCardBody>*/}
                                {/*        </MDBCard>*/}
                                {/*    </MDBAnimation>*/}
                                {/*</MDBCol>*/}

                            </MDBRow>
                        </MDBContainer>
                    </MDBRow>

            </div>
        )
    }
}

export default EntityServices;
