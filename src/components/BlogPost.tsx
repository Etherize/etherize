import {MDBCard, MDBCardHeader, MDBCardText, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import React from "react";
import Link from "next/link";
const ReactMarkdown = require('react-markdown');

type Props={
    id:string
    content:string
    created:string
    author:string
    title:string
}

export default class BlogPost extends React.Component<Props, {}>{

    // https://github.com/strapi/strapi/issues/2950
    // markdown to react component: https://github.com/rexxars/react-markdown
    render(){
        return(
            <MDBRow className="mt-3 mb-5"  key={this.props.id} >
                <MDBCol>
                    <MDBCard>
                        <MDBCardHeader className="text-center view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-2">
                            <div/> <Link href={"/blogposts/[id]"} as={`/blogposts/${this.props.id}`}><a className={"card-title h3"}>{this.props.title}</a></Link><div/>
                        </MDBCardHeader>
                        <MDBContainer >
                            <ReactMarkdown source={this.props.content} />
                        </MDBContainer>
                        <MDBCardText className={"ml-3"}>
                            Published on: {this.props.created} <br/>
                            By {this.props.author} <br/> </MDBCardText>

                    </MDBCard>
                </MDBCol>
            </MDBRow>
        )
    }
}
