import React, { } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// font awesome library and initiation
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './components/MainTemplate.css';

import './App.css';
import Home from './pages/home';
import Create from './pages/create';
import Tools from './pages/tools';
import Contact from './pages/contact';
import Adopt from './pages/adopt';
import Registry from './pages/registry';

library.add(fas);

function App() {

  return (
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/create' component={Create} />
              <Route path='/tools' component={Tools} />
              <Route path='/adopt' component={Adopt} />
              <Route path='/registry' component={Registry} />
              <Route path='/contact' component={Contact} />
              <Route path='/draft' component={() => {
                   window.location.href = 'https://etherizeit.openlaw.io/template/deal-entity';
                   return null;
              }}/>
            </Switch>
          </React.Fragment>
        </Router>
  );
}

export default App;
