import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdbreact";
import React from "react";

type Props={
    title:string
    icon:HTMLElement
    text:string

}

export default class FeatureCard extends React.Component<Props, {}>{

    render(){
        return (
            // design based on https://carta.com/
            <MDBCol md={"6"} lg={"4"} sm={"12"} xs={"12"}>
            <MDBCard className={"text-center "} border={"0"} style={{backgroundColor:"transparent"}} >
                <MDBCardBody className={"mt-5 mb-5 ml-3"} >
                    <MDBCardTitle className={"card-title h2"}>{this.props.icon} </MDBCardTitle>
                    <MDBCardTitle className={"card-title h2"}> {this.props.title} </MDBCardTitle>
                <MDBCardText className={"mt-2"}> {this.props.text}</MDBCardText>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        )
    }
}