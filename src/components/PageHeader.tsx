import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from 'assets/logo.svg';

const PageHeader = () => {
  return (
    <header className="page-header">
      <a href="/" title="Go to start page" className="page-logo">
        <span>React Lottery</span>
        <img src={logo} alt="React Lottery logo" />
      </a>

      <nav>
        <NavLink exact to="/" title="Go to start page">Home</NavLink>
        <NavLink to="/results" title="See EuroJackpot results">EuroJackpot</NavLink>
      </nav>
    </header>
  );
}

export default PageHeader;
