import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from 'assets/logo.svg';

type PageWrapProps = {
  children: any
}

const PageWrap = ({ children }: PageWrapProps) => {
  return (
    <>
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

      <main className="page">{children}</main>
      
      <footer className="page-footer">
        <span>&copy; {new Date().getFullYear()} React Lottery</span>
        <nav>
          <NavLink to="/contact" title="Go to contact page">Contact</NavLink>
          <NavLink to="/terms" title="Read our terms and conditions">Terms &amp; Conditions</NavLink>
          <NavLink to="/imprint" title="Go to imprint page">Imprint</NavLink>
        </nav>
      </footer>
    </>
  );
}

export default PageWrap;
