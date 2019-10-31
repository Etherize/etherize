import React, { Component} from 'react';
import Head from 'next/head'
import BannerHeader from "../components/BannerHeader";
import {MDBCard, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBCardTitle, MDBCardHeader} from "mdbreact";
import BlogAPI from "../components/BlogAPI";
import HTMLReactParser from "html-react-parser";
let showdown  = require('showdown');
class Blog extends Component {

    state ={
        blogPosts : []
    };

    componentDidMount = async () => {
        const [blogsJson, err] = await BlogAPI.getBlogs();
        const newBlogPosts = [];
        // handle error
        if (err!= null){
            console.log("err: " + err);
            newBlogPosts.push(
            <MDBCard>
                <MDBCardText>
                    {err}
                </MDBCardText>
            </MDBCard>

            );
            this.setState( {blogPosts : newBlogPosts});
            return

        }

        // TODO: is there middleware we can use on the strapi side to get html instead of markdown?
        // https://github.com/strapi/strapi/issues/2950
        // alternative markdown to react component: https://github.com/rexxars/react-markdown
        let converter = new showdown.Converter();
        blogsJson.map(blog =>
            (
                newBlogPosts.push(
                    <MDBRow className="mt-3 mb-5"  key={blog["_id"]} >
                        <MDBCol  md="12" >
                            <MDBCard>
                                <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-2">
                                    <div/> <p className="card-title h3">{blog["title"]}</p> <div/>
                                </MDBCardHeader>
                                <MDBContainer className={"ml-5"}>
                                    {HTMLReactParser(converter.makeHtml(blog["content"]))}
                                </MDBContainer>
                                <MDBCardText className={"ml-3"}>
                                    Published on: {blog["createdAt"]} <br/>
                                    By {blog["author"]["username"]} <br/> </MDBCardText>

                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                )
            ));

        this.setState( {blogPosts : newBlogPosts});
    };

    render() {
        return (
            <>
                <Head>
                    <title>Etherize Blog</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <script src="https://js.stripe.com/v3/"/>
                </Head>
                <div className={"mainBackground"}>

                {/*Title*/}
                 <BannerHeader/>
                    <MDBContainer>
                        <MDBRow className={"mt-2 mb-2"} >
                            <MDBCol className={"text-center"}>
                                <MDBCardTitle className="h1-responsive pt-3 m-5 white-text">
                                    Welcome to Our Blog
                                </MDBCardTitle>
                            </MDBCol>
                        </MDBRow>

                        {/*Blog post cards*/}
                            {this.state.blogPosts}

                    </MDBContainer>
                    <MDBRow></MDBRow>
                </div>
            </>
        )
    }
}


export default Blog;
