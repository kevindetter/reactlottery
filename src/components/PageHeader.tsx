import React, { useEffect, useState } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import logo from 'assets/logo.svg';

const PageHeader = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const location = useLocation();

  // Close nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="page-header">
      <NavLink exact to="/" title="Go to start page" className="page-logo">
        <span>React Lottery</span>
        <img src={logo} alt="React Lottery logo" />
      </NavLink>

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
