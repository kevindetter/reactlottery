import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import logo from 'assets/logo.svg';

const PageHeader = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <header className="page-header">
      <a href="/" title="Go to start page" className="page-logo">
        <span>React Lottery</span>
        <img src={logo} alt="React Lottery logo" />
      </a>

      <button
        className={'hamburger' + (isOpen ? ' hamburger--open' : '')}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <nav className={isOpen ? 'open' : ''}>
        <NavLink exact to="/" title="Go to start page">Home</NavLink>
        <NavLink to="/results" title="See EuroJackpot results">EuroJackpot</NavLink>
      </nav>
    </header>
  );
}

export default PageHeader;
