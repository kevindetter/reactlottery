import React from 'react';

import { NavLink } from 'react-router-dom';

const PageFooter = () => {
  return (  
    <footer className="page-footer">
      <span>&copy; {new Date().getFullYear()} React Lottery</span>
      <nav>
        <NavLink to="/contact" title="Go to contact page">Contact</NavLink>
        <NavLink to="/terms" title="Read our terms and conditions">Terms &amp; Conditions</NavLink>
        <NavLink to="/imprint" title="Go to imprint page">Imprint</NavLink>
      </nav>
    </footer>
  );
}

export default PageFooter;
