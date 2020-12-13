import React from 'react';
import App, { } from 'next/app';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// TODO we'll want to figure out the next/SSR way of doing this with styled-jsx instead of these global imports
import "../App.css";
import "../components/BannerHeader.css"
import "../components/EntityServices.css";
import "../components/EntityCreationInterface.css";
import "openlaw-elements/dist/openlaw-elements.min.css";



export default class MyApp extends App {

    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Component {...pageProps} />

        );
    }
}



