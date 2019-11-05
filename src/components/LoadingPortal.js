import {MDBCol, MDBContainer, MDBMedia, MDBRow} from "mdbreact";
import React from "react";
import loaderSpinner from "../assets/img/loadingPortalSmallSquare.mp4";

export default class LoadingPortal extends React.Component
{

    render(){
        return (
            <MDBContainer>
                <MDBRow className="py-5 mt-5 ">
                    <MDBCol  md="12" className={"text-center"}>
                        <video loop id="loadingPortal" autoPlay={true} width={75} height={75} >
                            <source src={loaderSpinner} type={"video/mp4"}/>
                        </video>
                        {/*old spinner: */}
                        {/*<div className="spinner-border" role="status"/>*/}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}