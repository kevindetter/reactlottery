import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Results from './pages/Results';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/results" component={Results} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
