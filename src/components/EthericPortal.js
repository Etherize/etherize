import React, { Component } from 'react';
import { Button, Header, Segment, TransitionablePortal, Image } from 'semantic-ui-react';
import portal from '../assets/img/blue-portal2.png';

export default class EthericPortal extends Component {
  state = { open: false }

  handleClick = () => this.setState(prevState => ({ open: !prevState.open }))
  handleClose = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <div>
        <Button
          content={open ? 'Go Through?' : 'Open Portal?'}
          negative={open}
          positive={!open}
          onClick={this.handleClick}
        />

        <TransitionablePortal onClose={this.handleClose} open={open}>
              <Image style={{ left: '30%', position: 'fixed', top: '20%', zIndex: 10000 }} src={portal}/>
        </TransitionablePortal>
      </div>
    )
  }
}
