import './BannerHeader.css'
import Link from 'next/link';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavbarToggler,
    MDBCollapse,
} from "mdbreact";

export default class BannerHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID: ""
        };
    }


    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render () {
        return (
            <MDBNavbar scrolling dark expand="md">
                <MDBNavItem>
                <MDBNavbarBrand >
                    <Link href={"/"}>
                    <strong className="logoText">ETHERIZE</strong>
                    </Link>
                </MDBNavbarBrand>
                </MDBNavItem>
                <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse1")}/>
                <MDBCollapse id="navbarCollapse1"
                             isOpen={this.state.collapseID}
                             navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem className={"subTitle"}>
                            <Link href="/create">
                                <a className="nav-link">Create</a>
                            </Link>
                        </MDBNavItem>
                        <MDBNavItem className={"subTitle"}>
                            <Link href="/registry">
                                <a className="nav-link">Registry</a>
                            </Link>
                        </MDBNavItem>
                        <MDBNavItem className={"subTitle"}>
                            <Link href="/tools">
                                <a className="nav-link">Tools</a>
                            </Link>
                        </MDBNavItem>
                        <MDBNavItem className={"subTitle"}>
                            <Link href="/contact">
                                <a className="nav-link">Contact</a>
                            </Link>
                        </MDBNavItem>
                    </MDBNavbarNav>

                </MDBCollapse>
            </MDBNavbar>


        )
    }

}
{/*<MDBNavbar*/}
{/*    dark*/}
{/*    expand="md"*/}
{/*    scrolling*/}
{/*>*/}
{/*        <MDBNavbarBrand href={"/"}>*/}
{/*            <strong className="logoText">ETHERIZE</strong>*/}
{/*        </MDBNavbarBrand>*/}
{/*        <MDBNavbarToggler*/}
{/*            onClick={this.toggleCollapse("navbarCollapse1")}*/}
{/*        />*/}
{/*        <MDBCollapse*/}
{/*            id="navbarCollapse1"*/}
{/*            isOpen={this.state.collapseID}*/}
{/*            navbar*/}
{/*        >*/}
{/*            <MDBNavbarNav left>*/}
{/*                <MDBNavItem className={"subTitle"}>*/}
{/*                    <Link href="/create">*/}
{/*                        <a className="nav-link">Create</a>*/}
{/*                    </Link>*/}
{/*                </MDBNavItem>*/}
{/*                <MDBNavItem className={"subTitle"}>*/}
{/*                    <Link href="/registry">*/}
{/*                        <a className="nav-link">Registry</a>*/}
{/*                    </Link>*/}
{/*                </MDBNavItem>*/}
{/*                <MDBNavItem className={"subTitle"}>*/}
{/*                    <Link href="/tools">*/}
{/*                        <a className="nav-link">Tools</a>*/}
{/*                    </Link>*/}
{/*                </MDBNavItem>*/}
{/*                <MDBNavItem className={"subTitle"}>*/}
{/*                    <Link href="/contact">*/}
{/*                        <a className="nav-link">Contact</a>*/}
{/*                    </Link>*/}
{/*                </MDBNavItem>*/}
{/*                /!*<MDBNavItem className={"subTitle"}>*!/*/}
{/*                /!*    <MDBNavLink to="/create">Create</MDBNavLink>*!/*/}
{/*                /!*</MDBNavItem>*!/*/}
{/*                /!*<MDBNavItem className={"subTitle"}>*!/*/}
{/*                /!*    <MDBNavLink to="/registry">Registry</MDBNavLink>*!/*/}
{/*                /!*</MDBNavItem>*!/*/}
{/*                /!*<MDBNavItem className={"subTitle"}>*!/*/}
{/*                /!*    <MDBNavLink to="/tools">Tools</MDBNavLink>*!/*/}
{/*                /!*</MDBNavItem>*!/*/}
{/*                /!*<MDBNavItem className={"subTitle"}>*!/*/}
{/*                /!*    <MDBNavLink to="/contact">Contact</MDBNavLink>*!/*/}
{/*                /!*</MDBNavItem>*!/*/}
{/*            </MDBNavbarNav>*/}

{/*        </MDBCollapse>*/}
{/*</MDBNavbar>*/}