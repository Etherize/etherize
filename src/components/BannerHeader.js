import React, { } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './BannerHeader.css'
import {

    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,

} from "mdbreact";

export default class BannerHeader extends React.Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

  render () {
    return (
        <main>
        <header>

            <MDBNavbar
                dark
                expand="md"
                scrolling
            >
                    <MDBNavbarBrand href={"/"}>
                        <strong className="logoText">ETHERIZE</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        onClick={this.toggleCollapse("navbarCollapse1")}
                    />
                    <MDBCollapse
                        id="navbarCollapse1"
                        isOpen={this.state.collapseID}
                        navbar
                    >
                        <MDBNavbarNav left>
                            <MDBNavItem className={"subTitle"}>
                                <MDBNavLink to="/create">Create</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className={"subTitle"}>
                                <MDBNavLink to="/registry">Registry</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className={"subTitle"}>
                                <MDBNavLink to="/tools">Tools</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className={"subTitle"}>
                                <MDBNavLink to="/contact">Contact</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>

                    </MDBCollapse>
            </MDBNavbar>


        </header>
        </main>

     )
  }

}
