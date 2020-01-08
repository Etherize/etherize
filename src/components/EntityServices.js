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
                                            <MDBCardTitle className="jumbo-title text-center">
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

                                            <MDBCardTitle className="text-left">
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

                                        <MDBCardTitle className="title pt-3 m-5 entity-type-description bold">
                                            The Portal Beckons
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
                                                        <div/>
                                                        <p className="card-title h3">Form Hybrid Entity</p>
                                                        from $700 | 5<MDBIcon fab icon="ethereum"/>
                                                        <div/>
                                                    </MDBCardTitle>

                                                    <MDBCardText className={"mb-5 mt-5"}>
                                                         Our team of machine elves🧚‍ will toil until your hybrid entity is
                                                            formed and making its first steps on Earth. You can manage
                                                            your Hybrid Entity using your email or network address. Enjoy
                                                            limited liability, an operating agreement crafted from your
                                                            input & our templates and two consultations with our experts.

                                                        <MDBBadge
                                                            className="mr-2 mt-2 badge-info"> Wyoming</MDBBadge><MDBBadge
                                                        className="mr-2 mt-2 badge-info">Non-Profit or
                                                        LLC</MDBBadge><MDBBadge className="mr-2 mt-2 badge-info">Any Crypto
                                                        Network</MDBBadge>

                                                    </MDBCardText>

                                                    <MDBBtn size="lg" href={"/create"} className={"btn-secondary"}>
                                                        Begin <MDBIcon icon="bolt"/>
                                                    </MDBBtn>
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
                                                        Form your new legal entity without having to sign a single piece of
                                                            paper - you can add on blockchain components later. Your EIN
                                                            and Formation Certificate will be sent to your inbox. Enjoy
                                                            the lowest taxes and strongest protections in the US. One
                                                            consultation is included to help you get things rolling

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
