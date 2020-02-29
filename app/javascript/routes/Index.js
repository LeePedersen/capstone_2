import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../components/Home';
import Conversations from '../components/Conversations';

export default (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/conversations' exact component={Conversations} />
    </Switch>
  </Router>
);
