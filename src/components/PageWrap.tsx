import React from 'react';

import { NavLink } from 'react-router-dom';

import PageFooter from 'components/PageFooter';
import PageHeader from 'components/PageHeader';

type PageWrapProps = {
  children: any
}

const PageWrap = ({ children }: PageWrapProps) => {
  return (
    <>
      <PageHeader />

      <main className="page">{children}</main>
      
      <PageFooter />
    </>
  );
}

export default PageWrap;
