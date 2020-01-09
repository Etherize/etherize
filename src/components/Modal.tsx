import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCardTitle } from 'mdbreact';
import HTMLReactParser from "html-react-parser";

class Modal extends Component {
    state = {
        text:"...",
        title:"Loading...",
        isOpen:false,
        loading:false,
    };

    SetTextAndTitle = (newTitle, newText) =>{
        this.setState({
            loading: false,
            title: newTitle,
            text: newText
        });

    };

    ToggleShowing = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    ToggleShowingWithTextAndTitle = (newTitle, newText) =>{
        this.ToggleShowing();
        this.SetTextAndTitle(newTitle, newText);
    };


    ToggleLoading = (load) =>{
    this.setState({
        loading:load
    });

};

    render() {
        return (
            <MDBContainer>
                <MDBModal isOpen={this.state.isOpen} toggle={this.toggleOpen()} centered>
                    <MDBModalHeader titleClass={"w-100 col-12 text-center"}  toggle={this.toggleOpen()}>
                            {this.state.title}
                    </MDBModalHeader>
                    <MDBModalBody className={"text-center"}>
                        {this.state.loading ? <div className={"spinner-border"} role={"status"}/> :
                            HTMLReactParser(this.state.text)}
                    </MDBModalBody>
                    {this.props.children}
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggleOpen()}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }

    // for some reason this is necessary
    toggleOpen = () => () => {
        this.ToggleShowing();
    };

}

export default Modal;