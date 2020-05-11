import React from 'react';

import { shallow } from 'enzyme';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

import Results from './Results';

const client = new GraphQLClient({
  url: 'https://www.lottohelden.de/graphql'
});

it('renders without crashing', () => {
  shallow(
    <ClientContext.Provider value={client}>
      <Results />
    </ClientContext.Provider>
  );
});