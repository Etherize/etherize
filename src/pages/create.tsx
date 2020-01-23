import React, { } from 'react';
import EntityCreationInterface from "../components/EntityCreationInterface";
import Head from 'next/head'
import {Router, withRouter} from "next/router";
import Constants, {EntityTypes} from "../components/Constants";
import {log} from "util";


type Props={
    router: Router
}
class Create extends React.Component<Props,{}> {
  render() {
    return (
        <React.Fragment>
            <Head>
                <title>Etherize Entities</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://js.stripe.com/v3/"/>
            </Head>
            <EntityCreationInterface/>

            {/*query can't be relied on to be filled until second render*/}
            {/*{*/}
            {/*    <EntityCreationInterface entityType={(*/}
            {/*        this.props.router.query.type != null ?*/}
            {/*            Constants.AgreementsPerEntity[parseInt(this.props.router.query.type.toString())] :*/}
            {/*            Constants.AgreementsPerEntity[EntityTypes.hybridEntity] )}/>*/}

            {/*}*/}

        </React.Fragment>
      )
   }
}

export default withRouter(Create);
