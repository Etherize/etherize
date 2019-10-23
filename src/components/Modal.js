import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCardTitle } from 'mdbreact';
import HTMLReactParser from "html-react-parser";

class ModalPage extends Component {
    state = {
        text:"Explanation for this modal",
        title:"Modal",
        isOpen:false,
        loading:false,
    };

    SetTextAndTitle = (newTitle, newText) =>{
        this.setState({
            loading: false,
            title: newTitle,
            text: newText
        });
        console.log("text: " + this.state.text);

    };

    ToggleShowing = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log("open: " + this.state.isOpen);
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

export default ModalPage;