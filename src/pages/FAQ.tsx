import React from "react";
import Head from "next/head";
import BannerHeader from "../components/BannerHeader";
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Footer from "../components/Footer";
import Constants from "../components/Constants";


export default class FAQ extends React.Component<{}, {}>{
    render() {
        return (
            <>
                <Head>
                    <title>Etherize - FAQs</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className={"mainBackground"}>

                    <BannerHeader/>
                    <MDBContainer className={"mt-5"}>
                        <MDBRow>
                            <QuestionCard title={"What is Etherize?"} text={ <p>Etherize Entities LLC provides formation and consulting services for conventional and decentralized organizations. We believe that self-sovereignty can be attained by navigating between pragmatism and idealism. </p>}/>
                                <QuestionCard title={"What is a Hybrid Entity?"} text={<p>A Hybrid Entity is an organization that has both a legal entity, such as an LLC, as well as decentralized component, such as a crypto-token that may represent ownership of the legal entity. While the Hybrids in existence presently are all infants, we are confident that Hybrids will usurp many entrenched corporations that do not heed the winds of change.</p>}/>
                                <QuestionCard title={"What is a Summoner?"} text={<p>A Summoner brings forth Hybrid Entities into this world. They are not just responsible for deploying smart contracts and forming legal entities, but also building a community that breathes life into the construct, making the entity 'real'.</p>}/>
                                <QuestionCard title={"What do you mean by 'etheric'?"} text={<p>Relating to, or similar to, Ethereum. Synonymous with 'decentralized'. An 'etheric' component may run on the Ethereum network or any number of similar distributed ledgers capable of computation. An 'etheric' component, such as a DAO, is both physical and non-physical, much like the ether of metaphysics.</p>}/>
                            <QuestionCard title={"Why Wyoming?"} text={<p>In addition to being one of the most affordable places to incorporate legal entities, Wyoming's legislature has passed an impressive collection of bills that have made it the leader in recognizing and protecting crypto-assets.  Check out our <a href={"/blogposts/5dcb649599d94b25a2d08b4e"} > blogpost </a>  on the subject. </p>}/>
                                <QuestionCard title={"What is with the Portal?"} text={<p>The Portal is a metaphor for Wyoming's pro-crypto legislation, which has opened the possibility for hybrid entities to incarnate here on Earth with ease and grace.</p>}/>
                                <QuestionCard id={Constants.ownershipFAQTag} title={"What is a Proof-of-Ownership token?"} text={<p>Your token can be used to prove that you own a legal entity without revealing your human identity. Your 'public key' can store a limitless number of tokens, which can be examined by anyone on a site such as <a href={"https://www.etherscan.io"}>etherscan</a>.</p>}/>
                                <QuestionCard title={"What is OpenLaw?"} text={<p>A platform for issuing legally binding contracts. Signatures are requested via e-mail and recorded on a distributed ledger. Legal templates may contain Ethereum smart contracts that may be called after all parties have signed the legal contract.</p>}/>
                                <QuestionCard title={"What can I do with an OpenLaw account?"} text={<p>Your OpenLaw account will allow you to keep track of Contracts you've signed, as well as edit existing Templates to issue new Drafts and Contracts.</p>}/>
                                <QuestionCard title={"What is a DAO?"} text={<p>A Decentralized Autonomous Organization is a governance structure placed on a distributed ledger such as Ethereum. It typically has the means to mint crypto-tokens that are used for voting. </p>}/>
                                <QuestionCard title={"Are you Ethereum maximalists?"} text={<p>We believe in the unity of all things, and the harmony of all chains, as foretold by the book of <a href={"https://ceptr.org/whitepapers/"} >Ceptr</a>.</p>}/>
                        </MDBRow>
                    </MDBContainer>
                    <MDBRow/>
                </div>
                <Footer/>
            </>
        )
    }
}



type QProps={
    title:string
    text:JSX.Element
    id?:string
}

class QuestionCard extends React.Component<QProps, {}>{

    render(){
        return (
            <MDBCol lg={"12"} className={"mt-1 mb-1"} id={this.props.id}>
                <MDBCard className={"text-center "} border={"0"}  >
                    <MDBCardBody className={"mt-5 mb-5 ml-3"} >
                        <MDBCardTitle className={"card-title h2"}> {this.props.title} </MDBCardTitle>
                        <MDBCardText className={"mt-2"}> 
                            {this.props.text}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }
}
