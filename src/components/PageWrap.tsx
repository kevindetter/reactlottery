import React from 'react';

type PageWrapProps = {
  children: any
}

const PageWrap = ({ children }: PageWrapProps) => {
  return (
    <main>{children}</main>
  );
}

export default PageWrap;
