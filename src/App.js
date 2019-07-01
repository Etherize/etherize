import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// font awesome library and initiation
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Template from './components/MainTemplate';

import './App.css';

import Home from './pages/home';
import Create from './pages/create';

library.add(fas);

function App() {
  return (
      <Router>
        <Template>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={Create} />
          </Switch>
        </Template>
      </Router>
  );
}

export default App;
