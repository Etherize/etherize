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
import awaken from "../assets/img/awaken-giant-beeple.webp"
import sleeping from "../assets/img/sleeping-giant-beeple.webp"
import self from "../assets/img/self-beeple.webp"
import BannerHeader from "./BannerHeader";
import portal from "../assets/img/portal-6.svg"
import FeatureCard from "./FeatureCard";
import ProductCard from "./ProductCard";


class EntityServices extends React.Component {

    render() {

        return (

            <div className={"mainBackground"}>
                <BannerHeader/>
                <MDBJumbotron fluid >
                    <MDBContainer className={"mt-5"}>
                            <MDBRow>

                                <MDBCol lg={"4"} md={"12"} middle={true}>
                                        <MDBAnimation type={"fadeInRight"} duration={"2s"}>
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
                                        <MDBAnimation type={"fadeInLeft"}  duration={"2s"}>
                                            <MDBCardTitle className="text-center">
                                            summon your <br/>
                                            <TypedText
                                              strings={[
                                                '^400DAO LLC^5000',
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
                                            Rally your team,
                                            harness decentralization,
                                            govern towards abundance.
                                        </MDBCardTitle>
                                    </MDBAnimation>

                                    <MDBAnimation type={"fadeIn"}  reveal={true}>
                                        <MDBCardTitle className={"mt-5"}>
                                            Go ahead,
                                        </MDBCardTitle>
                                    </MDBAnimation>
                                </MDBCol>
                                <br/>
                                <MDBCol className={"text-center mb-5"} lg={"12"}>
                                    <MDBAnimation type="fadeIn" reveal={true}>
                                        <MDBBtn size="lg" href={"#products"} className={"btn-primary"}>
                                            Open the Portal
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

                        <MDBContainer >
                        {/* no gutters for better mobile display: https://getbootstrap.com/docs/4.0/layout/grid/#no-gutters*/}
                            <MDBRow id={"products"} className={"no-gutters"}>

                                {/*Card */}
                                <ProductCard
                                    title={"Form Hybrid Entity"}
                                    image={<MDBCardImage waves={false} className="img-fluid"  src={self}/>}>

                                    <MDBCardText className={"mb-5 mt-3"}>
                                        Bring your own DAO or wallet address, or allow us to help you create one.
                                        We will pair it to a legal entity, allowing the same organization to conduct
                                        business with both mortals and etheric entities. Our service automates the
                                        paperwork involved in forming legal entities and blockchain entities.
                                        <br/>
                                        <MDBBadge className="mr-2 mt-2 badge-info">Wyoming</MDBBadge>
                                        <MDBBadge className="mr-2 mt-2 badge-info">Non-Profit or LLC</MDBBadge>
                                        <MDBBadge className="mr-2 mt-2 badge-info">Ethereum</MDBBadge>
                                    </MDBCardText>
                                    <MDBBtn size="lg" href={"/create"} className={"btn-secondary"}>
                                        Begin <MDBIcon icon="bolt"/>
                                    </MDBBtn>
                                </ProductCard>


                                {/*Card */}
                                <ProductCard
                                    title={"Form Legal Entity"}
                                    image={<MDBCardImage waves={false} className="img-fluid fullWidth" src={sleeping}/>}>

                                    <MDBCardText className={"mb-5 mt-3"}>
                                      Or, simply place your crypto-tokens in a Wyoming LLC, so that at least your assets are protected if the DAO implodes.
                                        Form your new legal entity without having to sign a single piece of
                                            paper - you can add on blockchain components later. Your EIN
                                            and Formation Certificate will be sent to your inbox. Enjoy
                                            the lowest taxes and strongest protections in the US. One
                                            consultation is included to help you get things rolling.
                                        <br/>
                                        <MDBBadge className="mr-2 mt-2 badge-info">Wyoming</MDBBadge>
                                        <MDBBadge className="mr-2 mt-2 badge-info">Non-Profit or LLC</MDBBadge>
                                    </MDBCardText>
                                    <MDBBtn size="lg" href={"/create"} className={"btn-secondary"}>
                                        Begin <MDBIcon icon="bolt"/>
                                    </MDBBtn>
                                </ProductCard>


                                {/*Card */}
                                <ProductCard
                                    title={"Design Entity"}
                                    image={ <MDBCardImage waves={false} className="img-fluid fullWidth" src={awaken}/> }>

                                    <MDBCardText className={"mb-5 mt-3"}>
                                        Our wizard🧙 generates documents for you & co-founders
                                        to review and, if
                                        the stars align, sign. Documents include Articles of
                                        Incorporation
                                        and an Operating Agreement. Afterwards you can submit
                                        the filings yourself
                                        or hire Etherize to do it for you later.
                                        <br/>
                                        <MDBBadge className="mr-2 mt-2 badge-info">Any Blockchain</MDBBadge>
                                        <MDBBadge className="mr-2 mt-2 badge-info">Non-Profit or LLC</MDBBadge>
                                    </MDBCardText>
                                    <MDBBtn size="lg" href={"/create"} className={"btn-secondary"}>
                                        Begin <MDBIcon icon="bolt"/>
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
