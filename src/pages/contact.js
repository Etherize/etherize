import React, { Component } from 'react';
// import {Grid, List, Icon} from 'semantic-ui-react';
// import ContentPanel from '../components/ContentPanel';
import BannerHeader from "../components/BannerHeader";
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBContainer,
    MDBCardHeader,
    MDBAnimation,
    MDBCardTitle, MDBIcon, MDBCardText
} from "mdbreact";


export default class Contact extends Component {
  render() {
    return (
        <div className={"mainBackground"}>
            <BannerHeader/>
            <MDBContainer>
                <MDBRow className="py-5 mt-5 ">
                    <MDBCol md="12">
                        <MDBAnimation type={"fadeInUp"}>
                            <MDBCard cascade >
                                <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                    <div/> <p className="card-title h1">Contact</p> <div/>
                                </MDBCardHeader>
                                <MDBCardBody className={"text-center h3"}>
                                        <a color={"white"} href='mailto:hello@etherize.io@'><strong> <MDBIcon far icon='envelope' /> </strong></a>
                                       hello@etherize.io
                                        <br/> <br/>
                                        <a href='https://twitter.com/aitherick'><strong> <MDBIcon fab icon="twitter" /> </strong> </a>
                                        @aitherick
                                        <br/> <br/>
                                        <a href='https://t.me/hybridentities'> <strong> <MDBIcon fab icon="telegram-plane" /> </strong></a>
                                        hybrid entity channel
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

{/*<Grid>*/}
{/*    <Grid.Row>*/}
{/*    </Grid.Row>*/}
{/*    <Grid.Row>*/}
{/*        <Grid.Column only='tablet computer' computer={5} tablet={1}>*/}
{/*        </Grid.Column>*/}
{/*        <Grid.Column  computer={6} tablet={14} mobile={16}>*/}
{/*            <ContentPanel   header="CONTACT">*/}
{/*                <List className="contentBuffer">*/}
{/*                    <List.Item className="listText"*/}
{/*                               content={<a href='mailto:hello@etherize.io@'><Icon name='mail' />  hello@etherize.io</a>}*/}
{/*                    />*/}
{/*                    <List.Item className="listText"*/}
{/*                               content={<a href='https://twitter.com/aitherick'><Icon name='twitter' />  @aitherick</a>}*/}
{/*                    />*/}
{/*                    <List.Item className="listText"*/}
{/*                               content={<a href='https://t.me/hybridentities'> <Icon name='telegram' /> hybrid entity channel</a>}*/}
{/*                    />*/}
{/*                </List>*/}
{/*            </ContentPanel>*/}

{/*        </Grid.Column>*/}
{/*        <Grid.Column  only='tablet computer' computer={5} tablet={1}>*/}
{/*        </Grid.Column>*/}
{/*    </Grid.Row>*/}
{/*    <Grid.Row>*/}

{/*    </Grid.Row>*/}
{/*</Grid>*/}