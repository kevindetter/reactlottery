import React from 'react';
import ReactDOM from 'react-dom';

import DrawResultItem from './DrawResultItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<DrawResultItem />, div);
});