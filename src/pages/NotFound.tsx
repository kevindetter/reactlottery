import React from 'react';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page not found | React Lottery</title>
        <meta name="description" content="This page will be shown if no route matches. It should not be indexed by search engine crawlers." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <header>
        <h1>Page not Found</h1>
        <p>
          The requested page could not be found. <Link to="/" title="Go back to start">Go back to start</Link>.
        </p>
      </header>
    </>
  );
}

export default NotFound;
