import React from 'react';
import {
    MDBBtn,
    MDBCardText,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBBadge,
    MDBRow,
    MDBIcon,
    MDBCardImage,
    MDBCol,
    MDBJumbotron,
    MDBAnimation,
    MDBCardGroup
} from "mdbreact";
import Typed from 'typed.js';
import TypedText from "./TypedText";
import "./EntityServices.css";
import Link from 'next/link';
// import flower from "../assets/img/floral.jpg"
// import card1 from "../assets/img/mountain-portal.png"
import awaken from "../assets/img/awaken-giant-beeple.webp"
// import card3 from "../assets/img/mountain-portal.png"
import sleeping from "../assets/img/sleeping-giant-beeple.webp"
// import gemini from "../assets/img/gemini-beeple.webp"
import self from "../assets/img/self-beeple.webp"
// import catalytic from "../assets/img/catalytic-beeple.webp"
import BannerHeader from "./BannerHeader";
import portal from "../assets/img/portal-6.svg"



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

            <div className={"mainBackground"}>
                <BannerHeader/>
                <MDBJumbotron fluid >
                    <MDBContainer className={"mt-5"}>
                        <MDBRow>
                            <MDBRow>
                                <MDBCol md={"4"} middle={true}>
                                    <MDBCard border={"0"} className={"my-auto"}>

                                        <MDBAnimation type={"fadeInRight"} duration={"2s"}>
                                            <MDBCardTitle className="jumbo-title text-center">
                                                hybrid formation portal
                                            </MDBCardTitle>
                                          </MDBAnimation>
                                </MDBCol>
                                <MDBCol md={"4"} sm={"4"} xs={"2"} middle={true}>
                                    <MDBAnimation type={"fadeIn"} duration={"2s"}>


                                               <img src={portal} className="img-fluid" alt="" />

                                    </MDBAnimation>

                                </MDBCol>
                                <MDBCol md={"4"} sm={"6"} xs={"2"} middle={true}>


                                        <MDBAnimation type={"fadeInLeft"} delay="2" duration={"2s"}>

                                            <MDBCardTitle className="text-center">
                                            make your first <br/>
                                            <TypedText
                                              strings={[
                                                '^5000DAO LLC^5000',
                                                'Multi-Sig Non-Profit^5000',
                                                'Hybrid Entity'
                                              ]}
                                            />
                                            </MDBCardTitle>
                                        </MDBAnimation>

                                </MDBCol>
                                <MDBContainer className={"text-center"}>
                                  <MDBAnimation delay="66s" type={"fadeOutLeft"}>
                                    <MDBAnimation delay="28s" type={"fadeInDown"} duration={"2s"}>

                                        <MDBCardTitle className="title pt-3 m-5 entity-type-description bold">
                                            The Portal Beckons
                                        </MDBCardTitle>

                                    </MDBAnimation>
                                      <MDBAnimation delay="31s" type={"fadeIn "} duration={"2s"}>
                                    <h2> in your mind the words form:</h2>
                                    <br/>
                                    </MDBAnimation>

                                    <MDBAnimation type="fadeInLeft" delay="33s" >
                                    <TypedText
                                        strings={[
                                        '^35000are you ready?^4000',
                                        'to rally your team?^3000',
                                        'to harness decentralization?^3000',
                                        'to govern towards abundance?^2000',
                                        'to govern towards abundance^1000.^10000',
                                        ''


                                      ]}
                                      typeSpeed={['1s']}
                                    />
                                    </MDBAnimation>
                                    <br/>
                                    </MDBAnimation>
                                </MDBContainer>

                                {/* Fun Features row*/}


                            </MDBRow>
                        </MDBRow>
                    </MDBContainer>
                </MDBJumbotron>

                    <MDBRow className={"mt-1 mainBackground2  fluid"}>
                        {/*/!*Title*!/*/}
                        <MDBCol className={"text-center mb-2"} lg={"12"}>
                            <MDBAnimation type="fadeIn" delay="62s">
                                <Link href={"/"}>
                                    <strong className="mt-4 logoText">ETHERIZE</strong>
                                </Link>
                                <div className="mt-4"/>
                            </MDBAnimation>
                        </MDBCol>

                        {/*CARDS*/}
                        {/*Card layout/design loosely based on : https://0x.org/launch-kit*/}
                        <MDBContainer>
                            <MDBRow>

                                {/*Card */}
                                <MDBCol lg="12" className="mb-5 mt-5">
                                    <MDBCardGroup>
                                        {/*LEFT SIDE*/}
                                        <MDBCol lg={"6"}>
                                            <MDBCard cascade className={"text-left h-100"} >
                                                <MDBCardBody cascade className={"mt-5 mb-5 ml-3"}>
                                                    <MDBCardTitle className={"mb-3"}>
                                                        <div>
                                                        <p className="card-title text-center h1">Form Hybrid Entity</p>

                                                        </div >
                                                    </MDBCardTitle>

                                                    <MDBCardText className={"mb-5 mt-5"}>
                                                        Bring your own DAO or wallet address, or allow us to help you create one.
                                                        We will pair it to a legal entity, allowing the same organization to conduct business with both mortals and etheric entities.
                                                        Our service automates the paperwork involved in forming legal entities and blockchain entities.


                                                        <MDBBadge
                                                            className="mr-2 mt-2 badge-info"> Wyoming</MDBBadge><MDBBadge
                                                        className="mr-2 mt-2 badge-info">Non-Profit or
                                                        LLC</MDBBadge><MDBBadge className="mr-2 mt-2 badge-info">Any Crypto
                                                        Network</MDBBadge>

                                                    </MDBCardText>
                                                    <MDBRow>
                                                    <MDBCol>
                                                        from $700 or 5<MDBIcon fab icon="ethereum"/>
                                                    <MDBBtn size="lg" href={"/create"} className={"btn-secondary"}>
                                                        Begin <MDBIcon icon="bolt"/>
                                                        </MDBBtn>
                                                        </MDBCol>
                                                        <MDBCol>
                                                          Read more.
                                                        </MDBCol>
                                                        </MDBRow>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <MDBCol lg={"6"}>
                                            <MDBCardImage className="img-fluid" style={{maxWidth:"125%"}}  src={self} waves/>
                                        </MDBCol>
                                    </MDBCardGroup>
                                </MDBCol>


                                {/*Card */}
                                <MDBCol lg="12" className="mb-5 mt-5">
                                    <MDBCardGroup>
                                        {/*LEFT SIDE*/}
                                        <MDBCol lg={"6"}>
                                            <MDBCard cascade className={"text-left h-100"} >
                                                <MDBCardBody cascade className={"mt-5 mb-5 ml-3"}>
                                                    <MDBCardTitle className={"mb-3"}>
                                                        <div/>
                                                        <p className="card-title h3">Form Legal Entity</p>
                                                        from $500 | 4 <MDBIcon fab icon="ethereum"/>
                                                        <div/>
                                                    </MDBCardTitle>

                                                    <MDBCardText className={"mb-5 mt-5"}>
                                                      Or, simply place your crypto-tokens in a Wyoming LLC, so that at least your assets are protected if the DAO implodes.
                                                        Form your new legal entity without having to sign a single piece of
                                                            paper - you can add on blockchain components later. Your EIN
                                                            and Formation Certificate will be sent to your inbox. Enjoy
                                                            the lowest taxes and strongest protections in the US. One
                                                            consultation is included to help you get things rolling.


                                                        <MDBBadge
                                                            className="mr-2 mt-2 badge-info"> Wyoming</MDBBadge><MDBBadge
                                                        className="mr-2 mt-2 badge-info">Non-Profit or LLC</MDBBadge>
                                                    </MDBCardText>
                                                    <MDBBtn size="lg" href={"/create"} className={"btn-secondary"}>
                                                        Begin <MDBIcon icon="bolt"/>
                                                    </MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <MDBCol lg={"6"}>
                                            <MDBCardImage className="img-fluid fullWidth" src={sleeping} waves/>
                                        </MDBCol>
                                    </MDBCardGroup>
                                </MDBCol>


                                {/*Card */}
                                <MDBCol lg="12" className="mb-5 mt-5">
                                    <MDBCardGroup>
                                    {/*LEFT SIDE*/}
                                        <MDBCol lg={"6"}>
                                         <MDBCard cascade className={"text-left h-100"} >
                                            <MDBCardBody cascade className={"mt-5 mb-5 ml-3"}>
                                            <MDBCardTitle className={"mb-3"}>
                                                <div/>
                                                <p className="card-title h3">Design Entity</p>
                                                <div/>
                                            </MDBCardTitle>

                                            <MDBCardText className={"mb-5 mt-5"}>
                                                 Our wizard🧙 generates documents for you & co-founders to review and, if
                                                    the stars align, sign. Documents include Articles of Incorporation
                                                    and an Operating Agreement. Afterwards you can submit the filings yourself
                                                    or hire Etherize to do it for you later.

                                                <MDBBadge className="mr-2 mt-2 badge-info"> Any
                                                    State</MDBBadge><MDBBadge className="mr-2 mt-2 badge-info">Any Crypto
                                                    Network</MDBBadge><MDBBadge className="mr-2 mt-2 badge-info">Non-Profitor
                                                    LLC</MDBBadge>
                                            </MDBCardText>

                                                <MDBBtn size="lg" href={"/create"} className={"btn-secondary"}>
                                                    Begin <MDBIcon icon="bolt"/>
                                                </MDBBtn>
                                            </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <MDBCol lg={"6"}>
                                            <MDBCardImage className="img-fluid fullWidth" src={awaken} waves/>
                                        </MDBCol>
                                    </MDBCardGroup>
                                </MDBCol>


                            </MDBRow>
                        </MDBContainer>
                    </MDBRow>

            </div>
        )
    }
}

export default EntityServices;
