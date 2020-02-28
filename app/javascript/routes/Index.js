import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../components/Home';

export default (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  </Router>
);
