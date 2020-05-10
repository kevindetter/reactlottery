import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

import Results from './Results';

const client = new GraphQLClient({
  url: 'https://www.lottohelden.de/graphql'
});

describe('<Results />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <ClientContext.Provider value={client}>
        <Results />
      </ClientContext.Provider>
    );
  });

  it('do not render button if limit >= 10', () => {
    const wrapper = shallow(
      <ClientContext.Provider value={client}>
        <Results />
      </ClientContext.Provider>
    );
    
    wrapper.useState = global.setHookState({
      limit: 10,
    });

    expect(wrapper.find('button')).to.have.lengthOf(0);
  });
});