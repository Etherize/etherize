import React, { } from 'react';
// import openlaw
import HeavenlyInterface from "../components/HeavenlyInterface";
import "openlaw-elements/dist/openlaw-elements.min.css";
import 'semantic-ui-css/semantic.min.css';



class Create extends React.Component {
  render() {
    return (
        <React.Fragment>
          <HeavenlyInterface templateName={'Formation Service Agreement'}/>
        </React.Fragment>
      )
   }
}

export default Create;
