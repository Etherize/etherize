import React, {} from 'react';

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

import "./registry.css";
import BannerHeader from "../../components/BannerHeader";
import Head from "next/head";
import Footer from "../../components/Footer";
import ModalPage from "../../components/Modal";
import API from "../../components/API"

interface State {
    modalOpen:boolean;
}

class Registry extends React.Component<{}, State> {

    private Modal = React.createRef<ModalPage>();
    private WyDAORegistry = {
        columns: [
            {
                label: "Legal Name",
                key: "a"
            },
            {
                label: "Intended Use",
                key: "b"

            },
            {
                label: "Country - State",
                key: "c"

            },
            {
                label: "Included Assets",
                key: "d"

            },
            {
                label: "Option",
                key: "e"
            }

        ],
        rows: [
            {
                key: "WyDAO LLC Series 300-399",
                heading1: "Kleros Judicants",
                heading2: "United States - Wyoming",
                heading3: "1000 PNK",
                button: (
                <MDBBtn className={"btn-secondary"}
                        onClick={() => this.notifyUserAdoptionComingSoon(this.WyDAORegistry.rows[0].key)}>

                Purchase
                </MDBBtn>
                ),
            }, {
                key: "WyDAO LLC Series 400-499",
                heading1: "DAO Sandbox",
                heading2: "United States - Wyoming",
                heading3: "1 ETH",
                button: (
                    <MDBBtn className={"btn-secondary"}
                            onClick={() => this.notifyUserAdoptionComingSoon(this.WyDAORegistry.rows[1].key)}>
                    Purchase
                    </MDBBtn>
                ),
            },
            {
                key: "WyDAO LLC Series 500-599",
                heading1: "Personal Assets",
                heading2: "United States - Wyoming",
                heading3: "1 Hour Consulting",
                button: (
                    <MDBBtn className={"btn-secondary"}
                            onClick={() => this.notifyUserAdoptionComingSoon(this.WyDAORegistry.rows[2].key)}>

                    Purchase
                    </MDBBtn>
                ),
            },
            {
                key: "WyDAO LLC Series 600-699",
                heading1: "Non-Profit / Cooperatives",
                heading2: "United States - Wyoming",
                heading3: "N/A",
                button: (
                    <MDBBtn className={"btn-secondary"}
                            onClick={() => this.notifyUserAdoptionComingSoon(this.WyDAORegistry.rows[3].key)}>

                        Purchase
                    </MDBBtn>
                ),
            },
            {
                key: "WyDAO LLC Series 700-799",
                heading1: "For Profit",
                heading2: "United States - Wyoming",
                heading3: "N/A",
                button: (
                    <MDBBtn className={"btn-secondary"}
                            onClick={() => this.notifyUserAdoptionComingSoon(this.WyDAORegistry.rows[4].key)}>
                        Purchase
                    </MDBBtn>
                ),
            },
            {
                key: "WyDAO LLC Series 800-899",
                heading1: "Etherize / Utilities",
                heading2: "United States - Wyoming",
                heading3: "N/A",
                button: "N/A"
            }

        ]
    };
    private WyDAOHybridEntity = {
        columns: [
            {
                label: "Legal Name",
                key: "f"
            },
            {
                label: "Emoji",
                key: "g"
            },
            {
                label: "Doing Business As",
                key: "h"

            },
            {
                label: "Etheric Component",
                key: "i"
            }

        ],
        rows: [
            {
                key: "WyDAO LLC",
                heading1: "🤠",
                heading2: "WyDAO",
                heading3: "aragon 🦅 dao: 🌱",

            },
            {
                key: "WyDAO LLC Series 999",
                heading1: "🤠🌌",
                heading2: "Etherize",
                heading3: "aragon 🦅 etherize ✨",

            },
            {
                key: "WyDAO LLC Series 500-599",
                heading1: "🤠🌌✨",
                heading2: "Etherize Entities",
                heading3: "TBD",

            },
            {
                key: "WyDAO LLC Series 600-699",
                heading1: "🤠🌌✨🚗",
                heading2: "Etherize Entities",
                heading3: "TBD",

            }

        ]

    };


    constructor(props) {
        super(props);
        this.notifyUserAdoptionComingSoon = this.notifyUserAdoptionComingSoon.bind(this);
    };


    notifyUserAdoptionComingSoon(product:string) {
        this.Modal.current.ToggleShowingWithTextAndTitle("We're still working on this",
            "Adopting an entity from " + product + " is coming soon." );
        API.AdoptEntityDesired(product);

    };

    render() {
        return (
            <>
                <Head>
                    <title>Etherize Registry</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>

                <div className={"mainBackground"}>
                    <BannerHeader/>

                     <ModalPage ref={this.Modal}/>


                    <MDBContainer>
                        <MDBRow className="py-5 mt-5 ">
                            <MDBCol md="12">
                                <MDBAnimation type={"fadeInUp"}>
                                    <MDBCard cascade narrow className={"card-table"}>
                                        <MDBCardHeader
                                            className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                            <div/>
                                            <p className="card-title h2">WyDao Registry</p>
                                            <div/>
                                        </MDBCardHeader>
                                        <MDBCardBody>
                                            <MDBTable responsive className={"text-center"}>
                                                <MDBTableHead columns={this.WyDAORegistry.columns}/>
                                                <MDBTableBody rows={this.WyDAORegistry.rows}/>
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
                                        <MDBCardHeader
                                            className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                            <div/>
                                            <p className="card-title h2">WyDao Hybrid Entities</p>
                                            <div/>
                                        </MDBCardHeader>
                                        <MDBCardBody>
                                            <MDBTable responsive className={"text-center"}>
                                                <MDBTableHead columns={this.WyDAOHybridEntity.columns}/>
                                                <MDBTableBody rows={this.WyDAOHybridEntity.rows}/>
                                            </MDBTable>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBAnimation>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                <Footer/>
            </>
        );
    };
}




export default Registry;
