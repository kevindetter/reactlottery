import React from 'react';

import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page not found | React Lottety</title>
        <meta name="description" content="This page will be shown if no route matches. It should not be indexed by search engine crawlers." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <header>
        <h1>Page not Found</h1>
        <p>
          The requested page could not be found. <a href="/" title="Go back to start">Go back to start</a>.
        </p>
      </header>
    </>
  );
}

export default NotFound;
