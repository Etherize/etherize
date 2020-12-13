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
                            <QuestionCard title={"What is Etherize?"} text={<MDBCardText>Etherize Entities LLC provides formation and consulting services for both conventional and decentralized organizations. Etherize is a collective of Entities manifesting the potential of self-sovereign technologies towards a techno-utopic timeline; where blockchains are used for planetary liberation rather than further entrenching inequalities.</MDBCardText>}/>
                            <QuestionCard title={"What is a Hybrid Entity?"} text={<MDBCardText>A Hybrid Entity is an organization that has both a legal entity, such as an LLC, as well as decentralized component, such as a crypto-token. Crypto signatures can be used to signal Member voting; making an immutable and legallly binding record. While the Hybrids in existence are at present time infants, we are confident that Hybrids will usurp entrenched corporations that do not heed the winds of change.</MDBCardText>}/>
                            <QuestionCard title={"What is a Summoner?"} text={<MDBCardText>A Summoner brings forth Hybrid Entities into this world. They are not just responsible for deploying smart contracts and forming legal entities, but also building a community that breathes life into the construct, making the entity 'real'.</MDBCardText>}/>
                            <QuestionCard title={"What do you mean by 'ethereal'?"} text={<MDBCardText>Relating to, or similar to, Ethereum. Synonymous with 'decentralized'. An 'ethereal' component may run on the Ethereum network or any number of distributed ledgers similarly capable of computation. An 'ethereal' component, such as a DAO, is both physical and non-physical, much like the concept of ether in metaphysics.</MDBCardText>}/>
                            <QuestionCard title={"Why Wyoming?"} text={<MDBCardText>In addition to being one of the most affordable places to incorporate legal entities, Wyoming's legislature has passed an impressive collection of bills that have made it the leader in recognizing and protecting crypto-assets.  </MDBCardText>}/>
                            <QuestionCard title={"What is with the Portal?"} text={<MDBCardText>The Portal is a metaphor for Wyoming's pro-crypto legislation, which has opened the possibility for Hybrid Entities to incarnate here on Earth with more material certainty than previously possible.</MDBCardText>}/>
                            <QuestionCard id={Constants.ownershipFAQTag} title={"What is a Proof-of-Ownership crypto-token?"} text={<MDBCardText>Your token can be used to prove that you own a legal entity without revealing your human identity. Your 'public key' can store a limitless number of tokens, which can be examined by anyone on a "block explorer" site such as <a href={"https://www.etherscan.io"}>etherscan</a>.</MDBCardText>}/>
                            <QuestionCard title={"What is OpenLaw?"} text={<MDBCardText>A platform for issuing legally binding contracts. Signatures are requested via e-mail and recorded on a distributed ledger. Legal templates may contain Ethereum smart contracts that may be called after all parties have signed the legal contract.</MDBCardText>}/>
                            <QuestionCard title={"What can I do with an OpenLaw account?"} text={<MDBCardText>Your OpenLaw account will allow you to keep track of Contracts you've signed, as well as edit existing Templates to issue new Drafts and Contracts.</MDBCardText>}/>
                            <QuestionCard id={Constants.betaFAQTag} title={"Why are you in Beta?"} text={<MDBCardText>OpenLaw is still a  bit experimental in nature, and thus so is our platform. You Entity is safe, but you may want to keep a copy of any Contracts, and may need to re-issue Contracts if there are errors while Signing to the Ethereum testnet Rinkeby.</MDBCardText>}/>
                            <QuestionCard title={"What is a DAO?"} text={<MDBCardText>A Decentralized Autonomous Organization is a governance structure placed on a distributed ledger such as Ethereum. Typically, a DAO can mint crypto-tokens that are used for voting. Wyoming legislation recognizes that the votes performed by a DAO can control a legal entity. </MDBCardText>}/>
                            <QuestionCard title={"Are you Ethereum maximalists?"} text={<MDBCardText>We believe in the unity of all things, and the harmony of all chains, as foretold by the book of <a href={"https://ceptr.org/whitepapers/"} >Ceptr</a>.</MDBCardText>}/>
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
                <MDBCard className={"text-center "} border={"0"} >
                    <MDBCardTitle className={"card-title h2 mt-5"}> {this.props.title} </MDBCardTitle>
                    <MDBCardBody className={"mt-2 mb-3 ml-3"} >
                            {this.props.text}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }
}
