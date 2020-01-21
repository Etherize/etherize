import Link from 'next/link';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavbarToggler,
    MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
} from "mdbreact";
import {Router, withRouter} from 'next/router'
import React from "react";
import {bool} from "prop-types";
import {EntityTypes} from "./Constants";

type Props={
    router: Router
}

type State = {
    collapseID:string
}

class  BannerHeader extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

  state={
      collapseID: ""
  };


    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    determineActive( slug ){
        return (this.props.router.pathname.endsWith(slug))
    }

    render () {
        return (

            <MDBNavbar scrolling light expand="md">
                <MDBNavbarBrand >
                    <Link href={"/"}>
                    <strong className="logoText ethericText ml-4">ETHERIZE</strong>
                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse1")}/>
                <MDBCollapse id="navbarCollapse1"
                             isOpen={this.state.collapseID}
                             navbar>
                    <MDBNavbarNav right>
                        <MDBDropdown >
                            <MDBDropdownToggle nav={true} className={"subTitle nav-link"} >
                                <MDBNavItem  active={this.determineActive("create")}>Create</MDBNavItem>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu >
                                <MDBDropdownItem>
                                    <a className={"nav-link"} href={"/create?type=" + EntityTypes.hybridEntity} > Hybrid Entity </a>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <a className={"nav-link"}  href={"/create?type=" + EntityTypes.legalEntity} > Legal Entity </a>
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        <NavbarItem active={this.determineActive("blog")} title={"blog"} />
                        <NavbarItem active={this.determineActive("FAQ")} title={"FAQ"} />
                        <NavbarItem active={this.determineActive("contact")} title={"contact"} />
                        <NavbarItem active={this.determineActive("tools")} title={"tools"} />

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>

        );
    }

}
export default withRouter(BannerHeader);

type NavProps = {
    active:boolean,
    title:string
}

class NavbarItem extends React.Component<NavProps, {}>{
    render(){
        return (
            <MDBNavItem className={"subTitle"} active={this.props.active}>
                <Link href={"/"+this.props.title}>
                    <a className="nav-link">{this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1)}</a>
                </Link>
            </MDBNavItem>
        );
    }
}