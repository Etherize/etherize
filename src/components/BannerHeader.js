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
import { withRouter } from 'next/router'
class  BannerHeader extends React.Component {
    constructor(props) {
        super(props);
        this.url = props.router.asPath;
        this.state = {
            collapseID: ""
        };
    }


    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    determineActive( slug ){
        return (this.url.endsWith(slug))
    }

    render () {
        return (
            <MDBNavbar scrolling light expand="md">
                <MDBNavbarBrand >
                    <Link href={"/"}>
                    <strong className="logoText">ETHERIZE</strong>
                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse1")}/>
                <MDBCollapse id="navbarCollapse1"
                             isOpen={this.state.collapseID}
                             navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem className={"subTitle"} active={this.determineActive("create")}>
                            <Link href="/create">
                                <a className="nav-link">Create</a>
                            </Link>
                        </MDBNavItem>
                        <MDBNavItem className={"subTitle"}  active={this.determineActive("registry")} >
                            <Link href="/registry">
                                <a className="nav-link">Registry</a>
                            </Link>
                        </MDBNavItem>
                        <MDBNavItem className={"subTitle"} active={this.determineActive("tools")}>
                            <Link href="/tools">
                                <a className="nav-link">Tools</a>
                            </Link>
                        </MDBNavItem>
                        <MDBNavItem className={"subTitle"} active={this.determineActive("contact")}>
                            <Link href="/contact">
                                <a className="nav-link">Contact</a>
                            </Link>
                        </MDBNavItem>
                        <MDBNavItem className={"subTitle"} active={this.determineActive("blog")}>
                            <Link href="/blog">
                                <a className="nav-link">Blog</a>
                            </Link>
                        </MDBNavItem>
                    </MDBNavbarNav>

                </MDBCollapse>
            </MDBNavbar>


        )
    }


}
export default withRouter(BannerHeader);