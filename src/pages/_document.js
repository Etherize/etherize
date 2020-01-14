import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx);
    //     return { ...initialProps }
    // }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet"
                          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                          crossOrigin="anonymous"/>
                    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                          rel="stylesheet"
                          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                          crossOrigin="anonymous"/>
                    </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
