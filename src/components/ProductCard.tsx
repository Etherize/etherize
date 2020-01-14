import {
    MDBCard,
    MDBCardBody,
    MDBCardGroup, MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow
} from "mdbreact";
import React from "react";

type Props={
    title:string
    image:HTMLElement
}

export default class ProductCard extends React.Component<Props, {}>{

    render(){
        return (
        <MDBCol lg="12" className="mb-5 mt-5">
            <MDBCardGroup>
            <MDBCol lg={"6"}>
                <MDBCard cascade className={"text-left h-100"} >
                    <MDBCardBody cascade className={"mt-5 mb-5 ml-3"}>
                        <MDBCardTitle className={"card-title h1 mb-3"}> {this.props.title} </MDBCardTitle>
                        {this.props.children}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
                <MDBCol lg={"6"}>
                    {this.props.image}
                </MDBCol>
            </MDBCardGroup>
        </MDBCol>

        )
    }
}