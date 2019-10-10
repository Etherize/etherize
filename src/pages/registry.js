import React, { Component } from 'react';

import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBContainer,
    MDBBtn,
    MDBCardHeader,
    MDBAnimation
} from "mdbreact";
import "./registry.css"
import '../App.css'

import BannerHeader from "../components/BannerHeader";

class Registry extends React.Component {

    constructor(props){
        super(props);
        this.WyDAORegistry = {
            columns: [
                {
                    key:0,
                    label: "Legal Name",
                },
                {
                    key:1,
                    label: "Intended Use",
                },
                {
                    key:2,
                    label: "Country - State",
                },
                {
                    key:3,
                    label: "Included Assets",
                },
                {
                    key:4,
                    label: "Option",
                }

            ],
            rows:[
                {
                    heading0:"WyDAO LLC Series 300-399",
                    heading1:"Kleros Judicants",
                    heading2:"United States - Wyoming",
                    heading3:"1000 PNK",
                    last: (
                        <MDBBtn className={"btn-pink"} href={"/adopt"}>
                            Purchase
                        </MDBBtn>
                    ),
                },
                {
                    heading0:"WyDAO LLC Series 400-499",
                    heading1:"DAO Sandbox",
                    heading2:"United States - Wyoming",
                    heading3:"1 ETH",
                    last: (
                        <MDBBtn className={"btn-pink"} href={"/adopt"}>
                            Purchase
                        </MDBBtn>
                    ),
                },
                {
                    heading0:"WyDAO LLC Series 500-599",
                    heading1:"Personal Assets",
                    heading2:"United States - Wyoming",
                    heading3:"1 Hour Consulting",
                    last: (
                        <MDBBtn className={"btn-pink"} href={"/adopt"}>
                            Purchase
                        </MDBBtn>
                    ),
                },
                {
                    heading0:"WyDAO LLC Series 600-699",
                    heading1:"Non-Profit / Cooperatives",
                    heading2:"United States - Wyoming",
                    heading3:"N/A",
                    last: (
                        <MDBBtn className={"btn-pink"} href={"/adopt"}>
                            Purchase
                        </MDBBtn>
                    ),
                },
                {
                    heading0:"WyDAO LLC Series 700-799",
                    heading1:"For Profit",
                    heading2:"United States - Wyoming",
                    heading3:"N/A",
                    last: (
                        <MDBBtn className={"btn-pink"} href={"/adopt"}>
                            Purchase
                        </MDBBtn>
                    ),
                },
                {
                    heading0:"WyDAO LLC Series 800-899",
                    heading1:"Etherize / Utilities",
                    heading2:"United States - Wyoming",
                    heading3:"N/A",
                    last:"N/A"
                }

            ]
        }

        this.WyDAOHybridEntity={
            columns: [
                {
                    label: "Legal Name",
                },
                {
                    label: "Emoji",
                },
                {
                    label: "Doing Business As",
                },
                {
                    label: "Etheric Component",
                }

            ],
            rows:[
                {
                    heading0:"WyDAO LLC",
                    heading1:":)",
                    heading2:"WyDAO",
                    heading3:"aragon 🦅 dao: 🌱",

                },
                {
                    heading0:"WyDAO LLC Series 999",
                    heading1:"",
                    heading2:"Etherize",
                    heading3:"aragon 🦅 etherize ✨",

                },
                {
                    heading0:"WyDAO LLC Series 500-599",
                    heading1:"",
                    heading2:"Etherize Entities",
                    heading3:"TBD",

                },
                {
                    heading0:"WyDAO LLC Series 600-699",
                    heading1:"",
                    heading2:"Etherize Entities",
                    heading3:"TBD",

                }

            ]

        }
    }

    render() {
        return (
            <div className={"mainBackground"}>
                <BannerHeader/>
                <MDBContainer>
                    <MDBRow className="py-5 mt-5 ">
                        <MDBCol md="12">
                            <MDBAnimation type={"fadeInUp"}>
                                <MDBCard cascade narrow className={"card-table"}>
                                    <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                        <div>
                                        </div>
                                        <a className="white-text h2">WyDao Registry</a>
                                        <div>
                                        </div>
                                    </MDBCardHeader>
                                    <MDBCardBody>
                                        <MDBTable responsive className={"text-center"}>
                                            <MDBTableHead columns={this.WyDAORegistry.columns} />
                                            <MDBTableBody rows={this.WyDAORegistry.rows} />
                                        </MDBTable>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBAnimation>
                        </MDBCol>
                    </MDBRow>


                    <MDBRow className="py-3 mt-3">
                        <MDBCol md="12">
                            <MDBAnimation type={"fadeInUp"}>
                                <MDBCard cascade narrow className={"card-table"}>
                                    <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                        <div>
                                        </div>
                                        <a className="white-text h2">WyDao Hybrid Entities</a>
                                        <div>
                                        </div>
                                    </MDBCardHeader>
                                    <MDBCardBody>
                                        <MDBTable responsive className={"text-center"}>
                                            <MDBTableHead columns={this.WyDAOHybridEntity.columns} />
                                            <MDBTableBody rows={this.WyDAOHybridEntity.rows} />
                                        </MDBTable>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBAnimation>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }

}



{/*<Grid stackable={true}>*/}


{/*          <Grid.Row>*/}
{/*            <br/>*/}
{/*          </Grid.Row>*/}

{/*          <Grid.Row>*/}

{/*          <Grid.Column width={3}>*/}

{/*        </Grid.Column>*/}
{/*         <Grid.Column className="width" width={10}>*/}
{/*         <ContentPanel header="WyDAO REGISTRY">*/}
{/*          <Table celled striped>*/}
{/*              <Table.Header>*/}
{/*                  <Table.Row className="clear">*/}
{/*                  <Table.HeaderCell className="topLeftRadius" colSpan='1'>Legal Name</Table.HeaderCell>*/}
{/*                    <Table.HeaderCell>Intended Use</Table.HeaderCell>*/}
{/*                      <Table.HeaderCell colSpan='1'>Country / State</Table.HeaderCell>*/}
{/*                            <Table.HeaderCell colSpan='1'>Included Assets</Table.HeaderCell>*/}
{/*                                  <Table.HeaderCell className="topRightRadius"  colSpan='1'></Table.HeaderCell>*/}
{/*                  </Table.Row>*/}
{/*                  </Table.Header>*/}

{/*                  <Table.Body>*/}
{/*                  <Table.Row>*/}
{/*                  <Table.Cell collapsing>*/}
{/*                   WyDAO LLC Series 300-399*/}
{/*                  </Table.Cell>*/}
{/*                  <Table.Cell collapsing>*/}
{/*                    Kleros Judicants*/}
{/*                  </Table.Cell>*/}
{/*                  <Table.Cell> United States / Wyoming  </Table.Cell>*/}
{/*                  <Table.Cell collapsing >*/}
{/*                     1000 PNK*/}
{/*                  </Table.Cell>*/}

{/*                  <Table.Cell  >*/}
{/*                  <Link to="/adopt">*/}
{/*                  <Button  className="large pink pillButton" floated='right'>*/}
{/*                    Lease*/}
{/*                  </Button>*/}
{/*                  </Link>*/}
{/*                  </Table.Cell>*/}
{/*                  </Table.Row>*/}

{/*                  <Table.Row>*/}
{/*                  <Table.Cell>*/}
{/*                  WyDAO LLC Series 400-499*/}
{/*                  </Table.Cell>*/}
{/*                  <Table.Cell>DAO Sandbox </Table.Cell>*/}
{/*                  <Table.Cell> United States / Wyoming  </Table.Cell>*/}
{/*                  <Table.Cell collapsing >*/}
{/*                     1 ETH*/}
{/*                  </Table.Cell>*/}

{/*                  <Table.Cell  >*/}
{/*                  <Link to="/adopt">*/}
{/*                  <Button  className="large pink pillButton" floated='right'>*/}
{/*                    Lease*/}
{/*                  </Button>*/}
{/*                  </Link>*/}
{/*                  </Table.Cell>*/}
{/*                        </Table.Row>*/}

{/*                  <Table.Row>*/}
{/*                  <Table.Cell collapsing>*/}
{/*                   WyDAO LLC Series 500-699*/}
{/*                  </Table.Cell>*/}
{/*                  <Table.Cell collapsing>*/}
{/*                    Personal Assets*/}
{/*                  </Table.Cell>*/}
{/*                  <Table.Cell>  United States / Wyoming  </Table.Cell>*/}
{/*                  <Table.Cell collapsing >*/}
{/*                    1 Hour Consulting*/}
{/*                  </Table.Cell>*/}

{/*                  <Table.Cell  >*/}
{/*                  <Link to="/adopt">*/}
{/*                  <Button  className="large pink pillButton" floated='right'>*/}
{/*                    Lease*/}
{/*                  </Button>*/}
{/*                  </Link>*/}
{/*                  </Table.Cell>*/}
{/*                  </Table.Row>*/}

{/*                  <Table.Row>*/}
{/*                  <Table.Cell collapsing>*/}
{/*                   WyDAO LLC Series 700-799*/}
{/*                  </Table.Cell>*/}
{/*                  <Table.Cell collapsing>*/}
{/*                   Non-Profit / Cooperatives*/}
{/*                  </Table.Cell>*/}
{/*                  <Table.Cell>United States / Wyoming  </Table.Cell>*/}
{/*                  <Table.Cell collapsing >*/}
{/*                     N/A*/}
{/*                  </Table.Cell>*/}


{/*                  <Table.Cell  >*/}
{/*                  <Link to="/adopt">*/}
{/*                  <Button  className="large pink pillButton" floated='right'>*/}
{/*                    Lease*/}
{/*                  </Button>*/}
{/*                  </Link>*/}
{/*                  </Table.Cell>*/}
{/*                  </Table.Row>*/}

{/*                  <Table.Row>*/}
{/*                  <Table.Cell collapsing>*/}
{/*                   WyDAO LLC Series 800-899*/}
{/*                  </Table.Cell>*/}
{/*                  <Table.Cell collapsing>*/}
{/*                   For Profit*/}
{/*                  </Table.Cell>*/}
{/*                  <Table.Cell>United States / Wyoming  </Table.Cell>*/}
{/*                  <Table.Cell collapsing >*/}
{/*                     N/A*/}
{/*                  </Table.Cell>*/}


{/*                  <Table.Cell  >*/}
{/*                  <Link to="/adopt">*/}
{/*                  <Button  className="large pink pillButton" floated='right'>*/}
{/*                    Lease*/}
{/*                  </Button>*/}
{/*                  </Link>*/}
{/*                  </Table.Cell>*/}
{/*                  </Table.Row>*/}


{/*                  <Table.Row>*/}
{/*                  <Table.Cell collapsing>*/}
{/*                   WyDAO LLC Series 900-999*/}
{/*                  </Table.Cell>*/}
{/*                  <Table.Cell collapsing>*/}
{/*                    Etherize / Utilities*/}
{/*                  </Table.Cell>*/}
{/*                  <Table.Cell>United States / Wyoming  </Table.Cell>*/}
{/*                  <Table.Cell collapsing >*/}
{/*                     N/A*/}
{/*                  </Table.Cell>*/}
{/*                  <Table.Cell  >*/}
{/*                  N/A*/}
{/*                  </Table.Cell>*/}
{/*\*/}
{/*                  </Table.Row>*/}


{/*                  </Table.Body>*/}
{/*              </Table>*/}
{/*            </ContentPanel>*/}

{/*         </Grid.Column>*/}
{/*         <Grid.Column width={3}>*/}
{/*         </Grid.Column>*/}



{/*          </Grid.Row>*/}




{/*    <Grid.Row>*/}

{/*    <Grid.Column width={3}>*/}

{/*  </Grid.Column>*/}
{/*   <Grid.Column className="width" width={10}>*/}

{/*   <ContentPanel header="WyDAO HYBRID ENTITIES">*/}
{/*    <Table celled striped>*/}
{/*        <Table.Header>*/}

{/*        <Table.Row className="clear">*/}
{/*        <Table.HeaderCell className="topLeftRadius"  colSpan='1'>Legal Name</Table.HeaderCell>*/}
{/*          <Table.HeaderCell colSpan='1'>Emoji</Table.HeaderCell>*/}
{/*            <Table.HeaderCell colSpan='1'>Doing Business As</Table.HeaderCell>*/}
{/*                <Table.HeaderCell className="topRightRadius"  colSpan='1'>Etheric Component</Table.HeaderCell>*/}
{/*        </Table.Row>*/}
{/*        </Table.Header>*/}

{/*        <Table.Body>*/}
{/*        <Table.Row>*/}
{/*        <Table.Cell collapsing>*/}
{/*         WyDAO LLC*/}
{/*        </Table.Cell>*/}
{/*        <Table.Cell collapsing>*/}
{/*         🤠🌌*/}
{/*        </Table.Cell>*/}
{/*        <Table.Cell> WyDAO </Table.Cell>*/}
{/*        <Table.Cell>*/}
{/*          aragon 🦅 dao: <a className="link" href="https://mainnet.aragon.org/#/sprout/"> sprout 🌱</a>*/}
{/*        </Table.Cell>*/}
{/*        </Table.Row>*/}

{/*        <Table.Row>*/}
{/*        <Table.Cell>*/}
{/*        WyDAO LLC Series 999*/}
{/*        </Table.Cell>*/}
{/*        <Table.Cell>🤠🌌✨</Table.Cell>*/}
{/*        <Table.Cell> Etherize </Table.Cell>*/}
{/*        <Table.Cell  >*/}
{/*          aragon 🦅 dao: <a className="link" href="https://mainnet.aragon.org/#/etherize/"> etherize ✨</a>*/}
{/*        </Table.Cell>*/}
{/*              </Table.Row>*/}

{/*        <Table.Row>*/}
{/*        <Table.Cell collapsing>*/}
{/*         WyDAO LLC Series 990*/}
{/*        </Table.Cell>*/}
{/*        <Table.Cell collapsing>*/}
{/*         🤠🌌✨👥*/}
{/*        </Table.Cell>*/}
{/*        <Table.Cell>  Etherize Entities  </Table.Cell>*/}
{/*        <Table.Cell  >*/}
{/*          TBD*/}
{/*        </Table.Cell>*/}
{/*        </Table.Row>*/}

{/*        <Table.Row>*/}
{/*        <Table.Cell collapsing>*/}
{/*         WyDAO LLC Series 970*/}
{/*        </Table.Cell>*/}
{/*        <Table.Cell collapsing>*/}
{/*            🤠🌌✨🚗*/}
{/*        </Table.Cell>*/}
{/*        <Table.Cell> Entherize Autos  </Table.Cell>*/}
{/*        <Table.Cell  >*/}
{/*         TBD*/}
{/*        </Table.Cell>*/}
{/*        </Table.Row>*/}


{/*        </Table.Body>*/}
{/*        </Table>*/}
{/*      </ContentPanel>*/}

{/*   </Grid.Column>*/}
{/*   <Grid.Column width={3}>*/}
{/*   </Grid.Column>*/}



{/*    </Grid.Row>*/}
{/*    <Grid.Row>*/}
{/*      <br/>*/}
{/*        <br/>*/}
{/*          <br/>*/}
{/*            <br/>*/}
{/*    </Grid.Row>*/}
{/*  </Grid>*/}






export default Registry;
