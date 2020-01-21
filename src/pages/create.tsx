import React, { } from 'react';
import EntityCreationInterface from "../components/EntityCreationInterface";
import Head from 'next/head'
import {Router, withRouter} from "next/router";
import Constants, {EntityTypes} from "../components/Constants";


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
            {}
            {this.props.router.asPath.endsWith(EntityTypes.hybridEntity.toString())

                ?
                <EntityCreationInterface entityType={EntityTypes.hybridEntity}/>
            :
                <EntityCreationInterface entityType={EntityTypes.legalEntity}/>

            }

        </React.Fragment>
      )
   }
}

export default withRouter(Create);
