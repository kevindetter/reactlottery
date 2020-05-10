import React from 'react';

import { shallow } from 'enzyme';

import PageFooter from './PageFooter';

it('renders without crashing', () => {
  shallow(<PageFooter />);
});