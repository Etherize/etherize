import React from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBFooter,
    MDBIcon,
} from "mdbreact";
import Link from "next/link";
import ethicon from "../assets/img/mountain-portal.png"
import Constants from "./Constants";


export default class Footer extends React.Component{

    render(){
        return (
            <MDBFooter className="font-small pt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="2" className={"text-center"}>
                            <br/>
                            <img alt={"eth icon"} src={ethicon} width={"75"} />
                            <br/><br/>
                            Made with   🍳   in Denver, CO
                        </MDBCol>
                        <MDBCol md="3" className={"text-center"}>
                                <Link href="/create">
                                    <a className="nav-link">Create</a>
                                </Link>
                                <Link href="/adopt/registry">
                                    <a className="nav-link">Adopt</a>
                                </Link>
                            <Link href="/tools">
                                <a className="nav-link">Tools</a>
                            </Link>
                        </MDBCol>
                        <MDBCol md={"3"}>
                            <Link href="/contact">
                                <a className="nav-link">Contact</a>
                            </Link>
                            <Link href="/blog">
                                <a className="nav-link">Blog</a>
                            </Link>
                        </MDBCol>
                        <MDBCol md="4" className={"text-center"}>

                            <br/><br/>
                            <a color={"white"} className={"mr-4"} href={'mailto:' + Constants.email} ><strong> <MDBIcon size={"2x"} far icon='envelope' /> </strong></a>
                            <a className={"mr-4"} href={Constants.twitter}><strong> <MDBIcon  size={"2x"} fab icon="twitter" /> </strong> </a>
                            <a href={Constants.telegram}> <strong> <MDBIcon  size={"2x"} fab icon="telegram-plane" /> </strong></a>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} <a href={Constants.home}> {Constants.home} </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
};


}