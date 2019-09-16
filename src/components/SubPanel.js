import React, { Component, useState, useEffect } from 'react';
import "./SelectionPanel.css";


export default class SubPanel extends React.Component {

  render () {
    return (
      <div className="ui subPanel ">
          <h2>{this.props.title}</h2>
          <h4> {this.props.subTitle}</h4>
          <h4>{this.props.body}</h4>
      </div>
    );
  }
}
