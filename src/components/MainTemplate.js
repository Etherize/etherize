import React, { Component } from 'react';

import BodyWrapper from '../components/BodyWrapper';
import './MainTemplate.css';

export default class MainTemplate   extends Component  {


render() {
  return (
      <BodyWrapper>
        {this.props.children}
      </BodyWrapper>
  );
}

}
