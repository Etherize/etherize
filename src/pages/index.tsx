import React, { Component} from 'react';
import EntityServices from '../components/EntityServices.js';
import Head from 'next/head'

class Home extends Component {

    render() {
        return (
            <>
            <Head>
                <title>Etherize Entities</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/*<script src="https://js.stripe.com/v3/"/>*/}
            </Head>
            <EntityServices/>
            </>
        )
    }
}


export default Home;
