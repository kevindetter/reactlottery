import React from 'react';
import ReactDOM from 'react-dom';

import DrawResult from './DrawResult';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<DrawResult />, div);
});