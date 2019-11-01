import React from "react";
import BlogPost from "../../components/BlogPost";
import fetch from 'isomorphic-unfetch';
import "../blog.css"
import BannerHeader from "../../components/BannerHeader";
import Head from 'next/head'
import {MDBRow, MDBContainer} from "mdbreact";

// so we can customize a blog post on its own page
const SingleBlogPost = props => (
    <div className={"mainBackground"}>
        <Head>
            <title>{props.post.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <BannerHeader/>
        <MDBContainer>
        {props.post}
        </MDBContainer>
        <MDBRow/>
</div>
);

SingleBlogPost.getInitialProps = async function(context) {
    const { id } = context.query;
    const resp = await fetch(process.env.BlogHost + process.env.BlogsEndpoint +`/${id}`);
    const blog = await resp.json();
    const post =  <BlogPost title={blog["title"]}
                            author={blog["author"]["username"]}
                            content={blog["content"]}
                            created={blog["createdAt"]}
                            id={blog["_id"]}/>;
    return {post}

};

export default SingleBlogPost;
