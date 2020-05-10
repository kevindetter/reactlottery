import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import PageFooter from 'components/PageFooter';
import PageHeader from 'components/PageHeader';

type PageWrapProps = {
  children: any
}

const PageWrap = ({ children }: PageWrapProps) => {
  const [ navIsOpen, setNavIsOpen ] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close nav on route change
    setNavIsOpen(false);
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <PageHeader navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />

      <main className="page">{children}</main>
      
      <PageFooter />
    </>
  );
}

export default PageWrap;
