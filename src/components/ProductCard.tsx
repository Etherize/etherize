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
        <MDBCol lg="12" className="mb-3 mt-5">
            <MDBCardGroup>
            <MDBCol lg={"6"}>
                {this.props.image}
            </MDBCol>
            <MDBCol lg={"6"}>
                <MDBCard cascade className={" h-80"} border={"0"} >
                    <MDBCardBody cascade className={"mt-2 card-margin mb-2"}>
                        <MDBCardTitle className={"card-title  h1"}> {this.props.title} </MDBCardTitle>
                        {this.props.children}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            </MDBCardGroup>
        </MDBCol>

        )
    }
}
