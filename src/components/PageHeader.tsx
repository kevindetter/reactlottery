import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from 'assets/logo.svg';

type PageHeaderProps = {
  navIsOpen: boolean,
  setNavIsOpen: any
}

const PageHeader = ({ navIsOpen, setNavIsOpen }: PageHeaderProps) => {
  return (
    <header className="page-header">
      <NavLink exact to="/" title="Go to start page" className="page-logo">
        <span>React Lottery</span>
        <img src={logo} alt="React Lottery logo" />
      </NavLink>

      <button
        className={'hamburger' + (navIsOpen ? ' hamburger--open' : '')}
        onClick={() => setNavIsOpen(!navIsOpen)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <nav className={navIsOpen ? 'open' : ''}>
        <NavLink exact to="/" title="Go to start page">Home</NavLink>
        <NavLink to="/results" title="See EuroJackpot results">EuroJackpot</NavLink>
      </nav>
    </header>
  );
}

export default PageHeader;
