import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mountain from '../assets/img/mountain-portal.jpg'
import ice from '../assets/img/ice-pool-beeple.webp'
import { Accordion, Button, Grid, Portal, Segment, Header, Form, Divider } from 'semantic-ui-react';
import EntityServices from '../components/EntityServices.js';

import './home.css';





class Home extends Component {

  render() {
    return (
      <Grid centered relaxed stackable>
         <Grid.Row />
         <Grid.Row>
            <Grid.Column  tablet={14}  mobile={16} computer={8}>
                <EntityServices/>
            </Grid.Column>
            <Grid.Column/>
          </Grid.Row>
       </Grid>
          )
      }
    }


export default Home;
