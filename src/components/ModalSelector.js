// import React, { Component, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // importing UI components
// import { Button, Image, Header, Modal, Icon } from 'semantic-ui-react';
// // import Form from 'react-bootstrap/Form';
// // import Col from 'react-bootstrap/Col';
//
//
// export class ModalSelector   extends Component  {
//     state = { modalOpen: false }
//     static handleOpen = () => this.setState({ modalOpen: true })
//     static handleClose = () => this.setState({ modalOpen: false })
//
//     render() {
//       return (
//         <Modal
//           trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
//           open={this.state.modalOpen}
//           onClose={this.handleClose}
//           basic
//           size='small'
//         >
//           <Header icon='browser' content='Cookies policy' />
//           <Modal.Content>
//             <h3>This website uses cookies to ensure the best user experience.</h3>
//           </Modal.Content>
//           <Modal.Actions>
//             <Button color='green' onClick={this.handleClose} inverted>
//               <Icon name='checkmark' /> Got it
//             </Button>
//           </Modal.Actions>
//         </Modal>
//       )
//     }
//   }
