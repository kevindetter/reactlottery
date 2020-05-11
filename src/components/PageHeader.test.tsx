import React from 'react';

import { shallow } from 'enzyme';

import PageHeader from './PageHeader';

it('renders without crashing', () => {
  shallow(<PageHeader />);
});