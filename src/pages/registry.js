  import React, { Component } from 'react';
// importing UI components
import { Grid, Button, Icon, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ContentPanel from '../components/ContentPanel';

import {  Link } from 'react-router-dom';

class Registry extends React.Component {

  render() {
    return (
      <Grid stackable={true}>

          <Grid.Row>
            <br/>
          </Grid.Row>

          <Grid.Row>

          <Grid.Column width={3}>

        </Grid.Column>
         <Grid.Column className="width" width={10}>
         <ContentPanel header="WyDAO REGISTRY">
          <Table celled striped>
              <Table.Header>
                  <Table.Row className="clear">
                  <Table.HeaderCell className="topLeftRadius" colSpan='1'>Legal Name</Table.HeaderCell>
                    <Table.HeaderCell>Intended Use</Table.HeaderCell>
                      <Table.HeaderCell colSpan='1'>Country / State</Table.HeaderCell>
                            <Table.HeaderCell colSpan='1'>Included Assets</Table.HeaderCell>
                                  <Table.HeaderCell className="topRightRadius"  colSpan='1'></Table.HeaderCell>
                  </Table.Row>
                  </Table.Header>

                  <Table.Body>
                  <Table.Row>
                  <Table.Cell collapsing>
                   WyDAO LLC Series 300-399
                  </Table.Cell>
                  <Table.Cell collapsing>
                    Kleros Judicants
                  </Table.Cell>
                  <Table.Cell> United States / Wyoming  </Table.Cell>
                  <Table.Cell collapsing >
                     1000 PNK
                  </Table.Cell>

                  <Table.Cell  >
                  <Link to="/adopt">
                  <Button  className="large pink pillButton" floated='right'>
                    Lease
                  </Button>
                  </Link>
                  </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                  <Table.Cell>
                  WyDAO LLC Series 400-499
                  </Table.Cell>
                  <Table.Cell>DAO Sandbox </Table.Cell>
                  <Table.Cell> United States / Wyoming  </Table.Cell>
                  <Table.Cell collapsing >
                     1 ETH
                  </Table.Cell>

                  <Table.Cell  >
                  <Link to="/adopt">
                  <Button  className="large pink pillButton" floated='right'>
                    Lease
                  </Button>
                  </Link>
                  </Table.Cell>
                        </Table.Row>

                  <Table.Row>
                  <Table.Cell collapsing>
                   WyDAO LLC Series 500-699
                  </Table.Cell>
                  <Table.Cell collapsing>
                    Personal Assets
                  </Table.Cell>
                  <Table.Cell>  United States / Wyoming  </Table.Cell>
                  <Table.Cell collapsing >
                    1 Hour Consulting
                  </Table.Cell>

                  <Table.Cell  >
                  <Link to="/adopt">
                  <Button  className="large pink pillButton" floated='right'>
                    Lease
                  </Button>
                  </Link>
                  </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                  <Table.Cell collapsing>
                   WyDAO LLC Series 700-799
                  </Table.Cell>
                  <Table.Cell collapsing>
                   Non-Profit / Cooperatives
                  </Table.Cell>
                  <Table.Cell>United States / Wyoming  </Table.Cell>
                  <Table.Cell collapsing >
                     N/A
                  </Table.Cell>


                  <Table.Cell  >
                  <Link to="/adopt">
                  <Button  className="large pink pillButton" floated='right'>
                    Lease
                  </Button>
                  </Link>
                  </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                  <Table.Cell collapsing>
                   WyDAO LLC Series 800-899
                  </Table.Cell>
                  <Table.Cell collapsing>
                   For Profit
                  </Table.Cell>
                  <Table.Cell>United States / Wyoming  </Table.Cell>
                  <Table.Cell collapsing >
                     N/A
                  </Table.Cell>


                  <Table.Cell  >
                  <Link to="/adopt">
                  <Button  className="large pink pillButton" floated='right'>
                    Lease
                  </Button>
                  </Link>
                  </Table.Cell>
                  </Table.Row>


                  <Table.Row>
                  <Table.Cell collapsing>
                   WyDAO LLC Series 900-999
                  </Table.Cell>
                  <Table.Cell collapsing>
                    Etherize / Utilities
                  </Table.Cell>
                  <Table.Cell>United States / Wyoming  </Table.Cell>
                  <Table.Cell collapsing >
                     N/A
                  </Table.Cell>
                  <Table.Cell  >
                  N/A
                  </Table.Cell>
\
                  </Table.Row>


                  </Table.Body>
              </Table>
            </ContentPanel>

         </Grid.Column>
         <Grid.Column width={3}>
         </Grid.Column>



          </Grid.Row>






          <Grid.Row>

          <Grid.Column width={3}>

        </Grid.Column>
         <Grid.Column className="width" width={10}>

         <ContentPanel header="WyDAO HYBRID ENTITIES">
          <Table celled striped>
              <Table.Header>

              <Table.Row className="clear">
              <Table.HeaderCell className="topLeftRadius"  colSpan='1'>Legal Name</Table.HeaderCell>
                <Table.HeaderCell colSpan='1'>Emoji</Table.HeaderCell>
                  <Table.HeaderCell colSpan='1'>Doing Business As</Table.HeaderCell>
                      <Table.HeaderCell className="topRightRadius"  colSpan='1'>Etheric Component</Table.HeaderCell>
              </Table.Row>
              </Table.Header>

              <Table.Body>
              <Table.Row>
              <Table.Cell collapsing>
               WyDAO LLC
              </Table.Cell>
              <Table.Cell collapsing>
               🤠🌌
              </Table.Cell>
              <Table.Cell> WyDAO </Table.Cell>
              <Table.Cell>
                aragon 🦅 dao: <a className="link" href="https://mainnet.aragon.org/#/sprout/"> sprout 🌱</a>
              </Table.Cell>
              </Table.Row>

              <Table.Row>
              <Table.Cell>
              WyDAO LLC Series 999
              </Table.Cell>
              <Table.Cell>🤠🌌✨</Table.Cell>
              <Table.Cell> Etherize </Table.Cell>
              <Table.Cell  >
                aragon 🦅 dao: <a className="link" href="https://mainnet.aragon.org/#/etherize/"> etherize ✨</a>
              </Table.Cell>
                    </Table.Row>

              <Table.Row>
              <Table.Cell collapsing>
               WyDAO LLC Series 990
              </Table.Cell>
              <Table.Cell collapsing>
               🤠🌌✨👥
              </Table.Cell>
              <Table.Cell>  Etherize Entities  </Table.Cell>
              <Table.Cell  >
                TBD
              </Table.Cell>
              </Table.Row>

              <Table.Row>
              <Table.Cell collapsing>
               WyDAO LLC Series 970
              </Table.Cell>
              <Table.Cell collapsing>
                  🤠🌌✨🚗
              </Table.Cell>
              <Table.Cell> Entherize Autos  </Table.Cell>
              <Table.Cell  >
               TBD
              </Table.Cell>
              </Table.Row>


              </Table.Body>
              </Table>
            </ContentPanel>

         </Grid.Column>
         <Grid.Column width={3}>
         </Grid.Column>



          </Grid.Row>
          <Grid.Row>
            <br/>
              <br/>
                <br/>
                  <br/>
          </Grid.Row>
        </Grid>


    );
  }

}




  export default Registry;
