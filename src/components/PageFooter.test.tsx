import React from 'react';
import ReactDOM from 'react-dom';

import PageFooter from './PageFooter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<PageFooter />, div);
});