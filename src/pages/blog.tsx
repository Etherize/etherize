import React, { Component} from 'react';
import Head from 'next/head'
import BannerHeader from "../components/BannerHeader";
import {MDBCard, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBCardTitle, MDBCardHeader} from "mdbreact";
import BlogAPI from "../components/BlogAPI";
import Link from 'next/link';
import BlogPost from "../components/BlogPost";
import "./blog.css"
import Footer from "../components/Footer";


class Blog extends Component {

    state ={
        blogPosts : [],
        recentPosts:[],
    };

    componentDidMount = async () => {
        await this.getAllBlogPosts();
    };


    getAllBlogPosts = async() =>{
        const [blogsJson, err] = await BlogAPI.getBlogs();
        const newBlogPosts = [];
        const newRecentBlogPosts = [];
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

        let i=0;

        blogsJson.map(function(blog) {

                newBlogPosts.push(
                    <BlogPost title={blog["title"]}
                              author={blog["author"]["username"]}
                              content={blog["content"]}
                              created={new Date(Date.parse(blog["createdAt"])).toUTCString()}
                              id={blog["_id"]}
                              key={blog["_id"]}
                    />
                );
                if (i<10 ){
                    newRecentBlogPosts.push(
                        <MDBContainer  key={blog["_id"]+"recent"}>
                            <Link href={"/blogposts/[id]"} as={`/blogposts/${blog["_id"]}`}  >
                                <a className={"h4"}>
                                    {blog["title"]}
                                </a>
                            </Link>
                            <p> Published: {new Date(Date.parse(blog["createdAt"])).toUTCString()}</p>
                            <br/> <br/>
                        </MDBContainer>
                    );
                    i+=1;
                }
                }
            );

        this.setState( {blogPosts : newBlogPosts});
        this.setState( {recentPosts : newRecentBlogPosts});

    };

    render() {
        return (
            <>
                <Head>
                    <title>Etherize Blog</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    {/*<script src="https://js.stripe.com/v3/"/>*/}
                </Head>
                <div className={"mainBackground"}>

                 <BannerHeader/>
                    <MDBContainer>
                        <MDBRow className={"mt-1 mb-1"} >
                            {/*Not sure if we should put a title*/}
                        {/*    <MDBCol className={"text-center"}>*/}
                        {/*        <MDBCardTitle className="h1-responsive pt-3 m-5 white-text">*/}
                        {/*            Welcome to Our Blog*/}
                        {/*        </MDBCardTitle>*/}
                        {/*    </MDBCol>*/}
                        </MDBRow>
                        {/*Blog post cards*/}
                        <MDBRow className={"mt-5"}>
                            <MDBCol lg={"9"}>
                            {this.state.blogPosts}
                            </MDBCol>
                            <MDBCol lg={"3"} className={"mt-3"}>
                                <MDBCard>
                                    <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-2">
                                        <div/> <p className={"card-title h3"}>Recent Posts</p> <div/>
                                    </MDBCardHeader>
                                        {this.state.recentPosts}
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBRow/>
                </div>
                <Footer/>
            </>
        )
    }

}

export default Blog;
