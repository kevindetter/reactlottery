import React from 'react';
import ReactDOM from 'react-dom';

import PageWrap from './PageWrap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<PageWrap />, div);
});