import React from 'react';

import { shallow } from 'enzyme';

import DrawResultItem from './DrawResultItem';

it('renders without crashing', () => {
  shallow(<DrawResultItem />);
});