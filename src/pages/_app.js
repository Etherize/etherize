import React from 'react';
import App, { } from 'next/app';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// // we must import the root variables here to supply their values to the rest of the stylesheets
import "../App.css";
import "../components/BannerHeader.css"
import "../components/EntityServices.css";
import "./blog.css"
import "../components/HeavenlyInterface.css";
import "openlaw-elements/dist/openlaw-elements.min.css";



// // Start of development-side client routed CSS hack
// import Router from 'next/router';
// Router.events.on('routeChangeComplete', () => {
//     if (process.env.NODE_ENV !== 'production') {
//         console.log("not in production mode!!");
//         const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]');
//         const timestamp = new Date().valueOf();
//         els[0].href = '/_next/static/css/styles.chunk.css?v=' + timestamp;
//     }
// });
// end hack

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



