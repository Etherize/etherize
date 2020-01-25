import React from 'react';
import {
    MDBBtn,
    MDBCardText,
    MDBContainer,
    MDBCardTitle,
    MDBBadge,
    MDBRow,
    MDBIcon,
    MDBCardImage,
    MDBCol,
    MDBJumbotron,
    MDBAnimation,

} from "mdbreact";
import TypedText from "./TypedText";
// import "./EntityServices.css";
// import Link from 'next/link';
import gemini from "../assets/img/gemini-beeple.webp"
import sleeping from "../assets/img/sleeping-giant-beeple.webp"
import self from "../assets/img/self-beeple.webp"
import BannerHeader from "./BannerHeader";
import portal from "../assets/img/portal-6.svg"
import FeatureCard from "./FeatureCard";
import ProductCard from "./ProductCard";
import {EntityTypes} from "./Constants";


class EntityServices extends React.Component {

    render() {

        return (

            <div className={"mainBackground"}>
                <BannerHeader/>
                <MDBJumbotron fluid >
                    <MDBContainer className={"mt-5"}>
                            <MDBRow>

                                <MDBCol lg={"4"} md={"12"} middle={true}>
                                        <MDBAnimation type={"fadeIn"} duration={"2s"}>
                                            <MDBCardTitle className="jumbo-title text-center">
                                                Hybrid Formation Portal
                                            </MDBCardTitle>
                                          </MDBAnimation>
                                </MDBCol>

                                <MDBCol  lg={"4"} md={"6"} sm={"12"} xs={"12"} middle={true} className={"text-center"}>
                                    <MDBAnimation type={"fadeIn"} duration={"2s"}>
                                               <img src={portal} style={{maxWidth:"300px"}} className="img-fluid" alt="" />
                                    </MDBAnimation>
                                </MDBCol>

                                <MDBCol lg={"4"} md={"6"} sm={"12"} xs={"12"} middle={true}>
                                   <MDBAnimation type={"fadeIn"}  duration={"0.5s"}>
                                       <MDBCardTitle className="text-center overflow">
                                       summon your <br/>
                                       <TypedText
                                         strings={[
                                           '^3000 DAO LLC^5000',
                                           'Multi-Sig Non-Profit^5000',
                                           'Hybrid Entity'
                                         ]} />
                                       </MDBCardTitle>
                                   </MDBAnimation>
                           </MDBCol>

                            <MDBContainer className={"text-center"}>
                                <MDBCol className={"text-center mb-4 mt-5"} lg={"12"}>
                                    <MDBAnimation type={"fadeIn"} reveal={true}>
                                        <MDBCardTitle>
                                        <MDBAnimation type={"fadeIn"}  reveal={true}>
                                            <h4>Rally your team.</h4>
                                        </MDBAnimation>
                                        <MDBAnimation type={"fadeIn"}  reveal={true}>
                                            <h4>Cultivate shared incentives.</h4>
                                        </MDBAnimation>
                                        <MDBAnimation type={"fadeIn"}   reveal={true}>
                                            <h4>Organize legal and ethereal forces.</h4>
                                        </MDBAnimation>
                                        </MDBCardTitle>
                                    </MDBAnimation>


                                </MDBCol>
                                <br/>
                                <MDBCol className={"text-center mb-5"} lg={"12"}>
                                    <MDBAnimation type="fadeIn"   reveal={true}>
                                        <MDBBtn size="lg" href={"#products"} className={"btn-primary"}>
                                            <h2 className="ethericText">summon</h2>
                                        </MDBBtn>
                                    </MDBAnimation>
                                </MDBCol>
                            </MDBContainer>

                        </MDBRow>
                    </MDBContainer>
                </MDBJumbotron>

                    <MDBRow className={"mt-1 mainBackground2"}>


                        {/* Fun Features row*/}
                        <MDBContainer className={"mb-5"}>
                            <MDBRow className="mb-5 mt-5" id={"features"}>
                                <FeatureCard title={"Fast"} text={"Our legal automation makes things quick and easy"}
                                             icon={<MDBIcon className={"mb-3"} icon="skiing"/>}/>
                                <FeatureCard title={"Easy"} text={"Filling out the necessary information won't take longer than a few minutes"}
                                             icon={<MDBIcon className={"mb-3"} far icon="clock"/>}/>
                                <FeatureCard title={"Secure"} text={"Keep your assets secure with Wyoming's generous statutes"}
                                             icon={<MDBIcon className={"mb-3"} icon="lock"/>}/>
                                <FeatureCard title={"Private"} text={"Create a company using your blockchain wallet address"}
                                             icon={<MDBIcon className={"mb-3"} icon="key"/>}/>
                                <FeatureCard title={"Tamper-Proof"} text={"With a single source of truth, investors won't worry about fraud"}
                                             icon={<MDBIcon className={"mb-3"} icon="fingerprint"/>}/>
                                <FeatureCard title={"Blockchain Ready"} text={"Incorporate in the most blockchain-friendly state in the U.S."}
                                             icon={<MDBIcon className={"mb-3"} icon="briefcase"/>}/>
                            </MDBRow>
                        </MDBContainer>


                        {/*CARDS*/}
                        {/*Card layout/design loosely based on : https://0x.org/launch-kit*/}

                        <MDBContainer>
                        {/* no gutters for better mobile display: https://getbootstrap.com/docs/4.0/layout/grid/#no-gutters*/}
                            <MDBRow id={"products"} className={"no-gutters products"}>

                                {/*Card */}
                                {/*YOU MUST MANUALLY RESIZE IMAGE TO FIT CARD ON LEFT*/}
                                <ProductCard
                                    title={"Form Hybrid Entity"}
                                    image={<img  alt={"design"} className={"img-fluid cardCorners"}  src={self}
                                                 style={{height:"568px", width:"100%", objectFit:"cover" }}
                                    />}>

                                    <MDBCardText className={"mb-2 mt-3"}>
                                    A Hybrid Entity exists both in our world and some place beyond.<br/>
                                    Long theorized, yet only recently attainable, they are just as capable of transacting with mortals as they are executing smart contracts.<br/>
                                    Bring your existing multi-signature wallet, ERC20 token, or DAO; alternatively, allow us to help you deploy one.<br/>
                                    Our team will form a legal entity to specification, wrapping the experimental organization in the safety of limited liability.
                                        <div className="btn-tags">
                                        <MDBBadge className="mr-2 mt-2 badge-info">Includes Services Below</MDBBadge>
                                        <MDBBadge className="mr-2 mt-2 badge-info">Ethereum: Multi-Sig, ERC20, DAO</MDBBadge>
                                        <MDBBadge className="mr-2 mt-2 badge-info">Wyoming: Non-Profit/LLC/Series LLC</MDBBadge>
                                        </div>
                                    </MDBCardText>
                                    <MDBBtn size="lg" href={"/create?type=" + EntityTypes.hybridEntity} className={"btn-secondary btn-card"}>
                                        Start <MDBIcon icon="bolt"/>
                                    </MDBBtn>
                                </ProductCard>


                                {/*Card */}
                                {/*YOU MUST MANUALLY RESIZE IMAGE TO FIT CARD ON LEFT*/}
                                <ProductCard
                                    title={"Form Legal Entity"}
                                    image={<img  alt={"design"} className="img-fluid cardCorners fullWidth" src={sleeping}
                                                 style={{height:"504px", width:"100%", objectFit:"cover" }}
                                    />}>
                                    <MDBCardText className={"mb-2 mt-3"}>
                                      Protect your personal assets or rally your team around a new entity. <br/>
                                      Form the Entity without having to sign a single piece of paper.<br/>
                                      The EIN and Formation Certificate will be sent to your inbox. <br/>
                                      Enjoy Wyoming's incredibly low taxes and strong asset protections. <br/>
                                      One hour of consultation is included to help you get things rolling.<br/>
                                          <div className="btn-tags">
                                        <MDBBadge className="mr-2 mt-2 badge-info">Wyoming:Non-Profit, LLC, Series LLC</MDBBadge>
                                        <MDBBadge className="mr-2 mt-2 badge-info">EIN & Filing Receipt</MDBBadge>
                                        <MDBBadge className="mr-2 mt-2 badge-info">1 hour of consultation</MDBBadge>
                                        <MDBBadge className="mr-2 mt-2 badge-info">Optional: Operating Agreement</MDBBadge>
                                        </div>
                                    </MDBCardText>
                                    <MDBBtn size="lg" href={"/create?type=" + EntityTypes.legalEntity} className={"btn-secondary btn-card"}>
                                        Start <MDBIcon icon="bolt"/>
                                    </MDBBtn>
                                </ProductCard>


                                {/*Card */}
                                {/*YOU MUST MANUALLY RESIZE IMAGE TO FIT CARD ON LEFT*/}
                                <ProductCard
                                    title={"Form Ethereal Entity"}
                                    image={ <img  alt={"design"} className="img-fluid cardCorners fullWidth" src={gemini}
                                                  style={{height:"536px", width:"100%", objectFit:"cover" }}

                                    /> }>
                                    <MDBCardText className={"mb-2 mt-3"}>
                                        Curious to play with Ethereal matter, but aren't quite ready to call forth a Hybrid from the Summoning Portal?<br/>
                                        Our form will allow you to issue Crypto-Tokens, around which you & your co-founders' efforts may coalscence.<br/>
                                        After the 'Entity Information' document is signed, your chosen Ethereal component can be deployed via one click using MetaMask.<br/>
                                        <div className="btn-tags">
                                          <MDBBadge className="mr-2 mt-2 badge-info">Free</MDBBadge>
                                          <MDBBadge className="mr-2 mt-2 badge-info">ERC20 Token Generation</MDBBadge>
                                          <MDBBadge className="mr-2 mt-2 badge-info">🦅 DAO: Coming Soon</MDBBadge>
                                          <MDBBadge className="mr-2 mt-2 badge-info">👹 DAO: Coming Soon</MDBBadge>
                                          <MDBBadge className="mr-2 mt-2 badge-info">🦉 MultiSig: Coming Soon</MDBBadge>
                                        </div>
                                    </MDBCardText>
                                    <MDBBtn size="lg" href={"https://dao.openlaw.io/"} className={"btn-secondary btn-card"}>
                                        Start <MDBIcon icon="bolt"/>
                                    </MDBBtn>
                                </ProductCard>


                            </MDBRow>
                        </MDBContainer>
                    </MDBRow>

            </div>
        )
    }
}

export default EntityServices;
