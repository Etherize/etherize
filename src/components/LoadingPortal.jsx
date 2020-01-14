import { MDBCol, MDBContainer, MDBRow} from "mdbreact";
import React from "react";
import portal from "../assets/img/portal-6.svg"

export default class LoadingPortal extends React.Component
{

    render(){
        return (
            <MDBContainer>
                <MDBRow className="py-5 mt-5 ">
                    <MDBCol  md="12" className={"text-center"}>
                        <img src={portal} style={{height:"500px"}} alt="loading..." />
                        {/* old video portal spinner:*/}
                        {/*<video loop muted id="loadingPortal" autoPlay={true} width={300} height={300} >*/}
                        {/*    <source src={portal} type={"video/mp4"}/>*/}
                        {/*</video>*/}
                        {/* original spinner: */}
                        {/*<div className="spinner-border" role="status"/>*/}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}