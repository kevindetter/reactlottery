import React from 'react';

import { expect } from 'chai';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import PageHeader from './PageHeader';

describe('<PageHeader />', () => {
  it('nav menu does not have class "open"', () => {
    const wrapper = mount(
      <Router>
        <PageHeader navIsOpen={false} setNavIsOpen={jest.fn()} />
      </Router>
    );

    expect(wrapper.find('nav').hasClass('open')).to.equal(false);
  });

  it('nav menu has class "open"', () => {
    const wrapper = mount(
      <Router>
        <PageHeader navIsOpen={true} setNavIsOpen={jest.fn()} />
      </Router>
    );

    expect(wrapper.find('nav').hasClass('open')).to.equal(true);
  });
});