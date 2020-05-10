import React from 'react';

import { shallow } from 'enzyme';

import DrawResultItem from './DrawResultItem';

describe('<DrawResultItem />', () => {
  it('renders without crashing', () => {
    shallow(<DrawResultItem number={'1'} />);
  });
});