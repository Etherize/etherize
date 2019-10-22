import React  from 'react';

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
import BannerHeader from "../components/BannerHeader";

class Registry extends React.Component {

    constructor(props){
        super(props);
        this.WyDAORegistry = {
            columns: [
                {
                    label: "Legal Name",
                },
                {
                    label: "Intended Use",
                },
                {
                    label: "Country - State",
                },
                {
                    label: "Included Assets",
                },
                {
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
                    heading1:"🤠",
                    heading2:"WyDAO",
                    heading3:"aragon 🦅 dao: 🌱",

                },
                {
                    heading0:"WyDAO LLC Series 999",
                    heading1:"🤠🌌",
                    heading2:"Etherize",
                    heading3:"aragon 🦅 etherize ✨",

                },
                {
                    heading0:"WyDAO LLC Series 500-599",
                    heading1:"🤠🌌✨",
                    heading2:"Etherize Entities",
                    heading3:"TBD",

                },
                {
                    heading0:"WyDAO LLC Series 600-699",
                    heading1:"🤠🌌✨🚗",
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
                                        <div/>
                                        <p className="card-title h2">WyDao Registry</p>
                                        <div/>
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
                                        <div/>
                                        <p className="card-title h2">WyDao Hybrid Entities</p>
                                        <div/>
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







export default Registry;
