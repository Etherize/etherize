import React from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBFooter,
} from "mdbreact";
import Constants from "./Constants";


export default class Footer extends React.Component{

    render(){
        return (
            <MDBFooter className="font-small footerBackground pt-4">
                <div className="footer-copyright  py-3">

                  <MDBContainer fluid>
                    <MDBRow>
                      <MDBCol md="3" className={" text-lg-left text-center "}>
                        Version 0.2
                      </MDBCol>
                      <MDBCol md="6" className="text-center" >
                          &copy; {new Date().getFullYear()} <a href={Constants.home}> Etherize Entities LLC </a>  | Code/Legal Templates MIT License |  Art by <a href="https://www.beeple-crap.com/everydays">Beeple</a>
                    </MDBCol>

                    <MDBCol md="3" className="text-lg-right text-center"  >
                    Made with   🥑    in Denver {/*<img alt={"eth icon"} src={ethicon} width={"50"} /> */}
                    </MDBCol>
                    </MDBRow>


                </MDBContainer>
                </div>
            </MDBFooter>
        );
};


}
