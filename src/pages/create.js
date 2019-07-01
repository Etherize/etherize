import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import openlaw
import { APIClient, Openlaw } from "openlaw";
import OpenLawForm from "openlaw-elements";
import "openlaw-elements/dist/openlaw-elements.min.css";
// importing UI components
import { Grid, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// configure openlaw
const URL = "https://app.openlaw.io";
const TEMPLATE_NAME = "ben-test-agreement";
const OPENLAW_USER = 'gbsben@gmail.com';
const OPENLAW_PASSWORD = '7TjAxWupmU;uumXiUo'

//create config
const openLawConfig = {
  server: URL,
  templateName: TEMPLATE_NAME,
  userName: OPENLAW_USER,
  password: OPENLAW_PASSWORD
}
const apiClient = new APIClient(openLawConfig.server);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      draftId: '',
    }
    this.params = {}; // specify each param key's value
    this.uploadDraft = this.uploadDraft.bind(this);
    this.previewTemplate = this.previewTemplate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.executeTemplate = this.executeTemplate.bind(this);
    this.uploadParams = this.uploadParams.bind(this);
  }
  componentDidMount = async () => {
    // login to client
    await apiClient.login(openLawConfig.userName, openLawConfig.password);
    // retrieive the template
    const myTemplate = await apiClient.getTemplate(openLawConfig.templateName);
    // retreive infomation from template
    const myID = myTemplate.id;
    const myTitle = myTemplate.title;
    const myContent = myTemplate.content;
    // get all versions
    const versions = await apiClient.getTemplateVersions(openLawConfig.templateName, 20, 1);
    // get creatorID
    const creatorID = versions[0].creatorId;
    // get the compiled template
    const myCompiledTemplate = Openlaw.compileTemplate(myContent);
    // set state
    this.setState({
      myID,
      myTitle,
      myContent,
      creatorID,
      myCompiledTemplate
    });
    this.executeTemplate();
    this.previewTemplate();
    this.setState({
      initialized: true,
    });

  }
  executeTemplate = () => {
    const executionResult = Openlaw.execute(this.state.myCompiledTemplate.compiledTemplate, {}, this.params);
    const variables = Openlaw.getExecutedVariables(executionResult.executionResult, {});
    this.setState({executionResult, variables});

    // get initial params
    const initParams = Openlaw.getInitialParameters(executionResult.executionResult);
    initParams.map(val => {
      this.params[val.name] = val.value;
    });
  }
  onChange = (key, value) => {
    // init params
    this.params[key] = value;
    this.previewTemplate();
  }
  previewTemplate = () => {
    // get execution result from compiled template
    const executionResult = Openlaw.execute(this.state.myCompiledTemplate.compiledTemplate, {}, this.params);
    // get agreement
    const agreements = Openlaw.getAgreements(executionResult.executionResult);
    const html = Openlaw.renderForReview(agreements[0].agreement,{});
    this.setState({html});
  }
  uploadParams = () => {
    const params = {
      templateId: this.state.myID,
      title: this.state.myTitle,
      text: this.state.myContent,
      creator: this.state.creatorID,
      parameters: this.params,
      overriddenParagraphs: {},
      agreements: {},
      readonlyEmails: [],
      editEmails: [],
      draftId: this.state.draftId,
    };
    return params;
  }
  uploadDraft = async () => {
    // login to client
    //await apiClient.login(openLawConfig.userName, openLawConfig.password);
    const params = this.uploadParams();
    console.log(params);

/*
    const test = await apiClient.getDraftVersion('77027ba66d7febb1a954af9a0cb2e36b4273cf8ebf1440769edcaa0266ac3ef4', 1);
    console.log(test);
*/

    const draftId = await apiClient.uploadDraft(params);
    const res = await apiClient.sendDraft(
      ["gbsben@gmail.com", "tristanerr@gmail.com"], // read only priv
      ["gbsben@gmail.com"], // edit priv
      draftId
    );
    console.log(res);
    //console.log(draftId);
    this.setState({draftId});

  }
  render() {
    const ready = this.state.initialized;
    return (
      <>
      {ready &&
        <Grid columns={2} divided className="openlawWrapper">
          <Grid.Row>
            <Grid.Column>
              <OpenLawForm
                apiClient={apiClient}
                executionResult={this.state.executionResult.executionResult}
                parameters={this.params}
                onChangeFunction={this.onChange}
                openLaw={Openlaw}
                variables={this.state.variables}
              />
              <Button onClick={this.uploadDraft}>Upload</Button>
            </Grid.Column>
            <Grid.Column>
              <div dangerouslySetInnerHTML={{__html: this.state.html}} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      }
      </>
    );
  }
}

export default App;
