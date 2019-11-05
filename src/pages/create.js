import React, { } from 'react';
import HeavenlyInterface from "../components/HeavenlyInterface";
import Head from 'next/head'
import Footer from "../components/Footer";


class Create extends React.Component {
  render() {
    return (
        <React.Fragment>
            <Head>
                <title>Etherize Entities</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://js.stripe.com/v3/"/>
            </Head>
          <HeavenlyInterface templateName={'Formation Service Agreement'}/>
        </React.Fragment>
      )
   }
}

export default Create;
