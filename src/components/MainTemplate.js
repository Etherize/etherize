import React, { Component } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Route,
  NavLink,
  BrowserRouter as Router,
  Switch, } from 'react-router-dom';
import './MainTemplate.css';
import BodyWrapper from '../components/BodyWrapper';
import BannerHeader from '../components/BannerHeader';
import ice from '../assets/img/ice-pool-beeple.webp';




export default class MainTemplate   extends Component  {


Navbar() {
  return (
<div></div>
  );
}
/*

*/


Footer() {
  return (
    <div className="footer"></div>
  );
}

render() {
  return (

    <div className="Background" style={{
       backgroundImage: `url(${ice})`,
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       backgroundAttachment: 'fixed',
       height: '100%!important',
     }}>


     <BannerHeader/>

      <BodyWrapper>
        {this.props.children}
      </BodyWrapper>
    </div>

  );
}
}
