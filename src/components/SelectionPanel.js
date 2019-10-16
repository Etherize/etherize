// import React, { Component, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import openlaw
// import { APIClient, Openlaw } from "openlaw";
// import OpenLawForm from "openlaw-elements";
// import ice from '../assets/img/ice-pool-beeple.webp'
// import AgreementPreview from "../components/AgreementPreview";
// import SubPanel from "../components/SubPanel";
// import "openlaw-elements/dist/openlaw-elements.min.css";
// import "./SelectionPanel.css";
// // importing UI components
// import { Grid, Button, Accordion, Icon, Loader, Image, Sticky, Rail, Placeholder, Ref, Container, Divider, Segment, Header, Search } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
// import _ from 'lodash'
// // configure openlaw
//
//
// export default class SelectionPanel extends React.Component {
//
//   render () {
//     return (
//
//       <Grid className="ui  selectionPanel" stackable={true}>
//
//           <Grid.Row  className="ui" verticalAlign='middle'>
//
//           <Grid.Column width={3}>
//           </Grid.Column>
//               <Grid.Column width={4}>
//                  <div className="ui subPanel">
//                  <h2>Contemplate Further</h2>
//                  <h4>Saves your Draft for Later.</h4>
//                  <h4>The e-mail specified in the draft will receive a copy. You may issue Contracts later.</h4>
//                  </div>
//
//               </Grid.Column>
//                <Grid.Column width={2}>
//                 </Grid.Column>
//
//                 <Grid.Column width={4}>
//
//                   <SubPanel     subTitle={'We will take it from here.'} body={'Payment is not due until data is verified and the document(s) are e-Signed.'} title={'Etherize It!'} />
//
//                   </Grid.Column>
//                   <Grid.Column width={3}>
//                   </Grid.Column>
//                 </Grid.Row>
//                 <Grid.Row  className="ui" verticalAlign='middle'>
//                 <Grid.Column width={3}>
//                 </Grid.Column>
//                     <Grid.Column width={4}>
//
//                        <button onClick={this.sendDraft} className="huge white ui right labeled icon button buttonPadding">
//                        <i className="save large icon"></i>
//                         Save Draft
//                        </button>
//                     </Grid.Column>
//                      <Grid.Column width={2}>
//                       </Grid.Column>
//
//                       <Grid.Column width={4}>
//                         <button className="huge pink ui right labeled icon button buttonPadding">
//                         <i onClick={this.onSubmit} className="diamond large icon"></i>
//                           Create Entity
//                         </button>
//                         </Grid.Column>
//                         <Grid.Column width={3}>
//                         </Grid.Column>
//                 </Grid.Row>
//               </Grid>
//     );
//
//
//
// }
//
//   }
