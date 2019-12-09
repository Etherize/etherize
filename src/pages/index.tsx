import React, { Component} from 'react';
import EntityServices from '../components/EntityServices.js';
import Head from 'next/head'
import Footer from "../components/Footer";

class Home extends Component {

    render() {
        return (
            <>
            <Head>
                <title>Etherize: Formation & Identity Services</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <EntityServices/>
            <Footer/>
            </>
        )
    }
}


export default Home;
