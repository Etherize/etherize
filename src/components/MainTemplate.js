import React, { Component } from 'react';

import BodyWrapper from '../components/BodyWrapper';
import BannerHeader from '../components/BannerHeader';
import './MainTemplate.css';

export default class MainTemplate   extends Component  {
//
// Navbar() {
//   return (
// <div></div>
//   );
// }
// /*
//
// */


// Footer() {
//   return (
//     <div className="footer"></div>
//   );
// }

render() {
  return (
      <div className={"mainBackground"}>
      <BannerHeader/>
      <BodyWrapper>
        {this.props.children}
      </BodyWrapper>
      </div>


  );
}

}
