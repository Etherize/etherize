import React, { Component } from 'react';
import {  Grid } from 'semantic-ui-react';
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
