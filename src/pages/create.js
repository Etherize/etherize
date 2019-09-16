import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import openlaw
import { APIClient, Openlaw } from "openlaw";
import OpenLawForm from "openlaw-elements";
import ice from '../assets/img/ice-pool-beeple.webp'
import AgreementPreview from "../components/AgreementPreview";
import HeavenlyInterface from "../components/HeavenlyInterface";
import ModalSelector from "../components/ModalSelector";
import "openlaw-elements/dist/openlaw-elements.min.css";
// importing UI components
import { Button, Image, Header, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import _ from 'lodash'
// configure openlaw
const URL = "https://etherizeit.openlaw.io";
// You can change TEMPLATE_NAME to 'articles-of-organization' to make the code work ...
// Right now, both deal templates on Etherizeit instance are causing the same issue
const TEMPLATE_NAME = "articles-of-organization";
const OPENLAW_USER = 'etherize@protonmail.com';
const OPENLAW_PASSWORD = 'useresponsibly'



class Create extends React.Component {

  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })


  render() {
    const { open, dimmer } = this.state

    return (
        <React.Fragment>
          <HeavenlyInterface templateName={'Formation Service Agreement'}/>
        </React.Fragment>
      )
  }
}




  export default Create;
