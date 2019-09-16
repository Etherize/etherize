import React, { Component, useState, useEffect } from 'react';
import "./BodyWrapper.css";


export default class BodyWrapper extends React.Component {



  render () {
    return (
              <div className="ui bodyWrapper ">
                {this.props.children}
              </div>
    );
  }
}
