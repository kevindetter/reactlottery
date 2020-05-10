import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import PageWrap from './PageWrap';

describe('<PageWrap />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Router>
        <PageWrap />
      </Router>
    );
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Router>
        <PageWrap>
          <div className="unique" />
        </PageWrap>
      </Router>
    );

    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });
});