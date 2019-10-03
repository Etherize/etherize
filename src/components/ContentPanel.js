import React, { Component } from 'react';
import "./ContentPanel.css";


export default class ContentPanel extends React.Component {
  render () {
    return (
      <div className="ui contentPanel ">
        <div   className="ui segment contentHeader ">
          <h1 className="ui center contentHeaderText">{this.props.header}</h1>
        </div>
        <div className="ui  content">
           {this.props.children}
        </div>
      </div>
    );
  }
}
