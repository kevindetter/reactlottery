import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import DrawResult from './DrawResult';

describe('<DrawResult />', () => {
  it('renders without crashing', () => {
    let date = '10 Aug 2010';
    let numbers = ['0', '1', '2', '3'];

    shallow(<DrawResult date={date} numbers={numbers} />);
  });

  it('renders only first 6 numbers and first 2 additional numbers of array', () => {
    let additionalNumbers = ['0', '1', '3'];
    let date = '10 Aug 2010';
    let numbers = ['0', '1', '2', '3', '4', '5', '6'];

    const wrapper = shallow(
      <DrawResult additionalNumbers={additionalNumbers} date={date} numbers={numbers} />
    );

    expect(wrapper.find('DrawResultItem')).to.have.lengthOf(8);
  });
});