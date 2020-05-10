import React from 'react';

import { shallow } from 'enzyme';

import DrawResult from './DrawResult';

it('renders without crashing', () => {
  let additionalNumbers = ['0', '1', '2', '3'];
  let date = '10 Aug 2010';
  let numbers = ['0', '1', '2', '3'];

  shallow(<DrawResult additionalNumbers={additionalNumbers} date={date} numbers={numbers} />);
});