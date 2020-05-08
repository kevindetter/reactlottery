import React from 'react';

import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Results from './pages/Results';
import Welcome from './pages/Welcome';

const client = new GraphQLClient({
  url: 'https://www.lottohelden.de/graphql'
});

function App() {
  return (
    <ClientContext.Provider value={client}>
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/results" component={Results} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ClientContext.Provider>
  );
}

export default App;
