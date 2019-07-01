import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import './MainTemplate.css';
function Banner() {
  return (
    <div className="banner">
      <div className="bannerHeader">Etherize.it</div>
      <div className="bannerSub">Your Portal to Wyoming</div>
    </div>
  );
}
function Navbar() {
  return (
    <div className="navBar">
        <NavLink className="navbrand" to="/">Etherize.it</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Incorporate</NavLink>
        <NavLink to="/price">Pricing</NavLink>

    </div>
  );
}
/*
function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Router>
        <Navbar.Brand as={Link} to="/">Etherize.it</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Incorporate</Nav.Link>
          <Nav.Link href="/price">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="action">Action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="action">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Router>
    </Navbar>
  );
}
*/
function Footer() {
  return (
    <div className="footer"></div>
  );
}

export default function MainTemplate(props) {
  return (
    <div className="siteWrapper">
      <Banner />
      <Navbar />
      <div className="contentWrapper">
        {props.children}
      </div>
      <Footer />
    </div>

  );
}
