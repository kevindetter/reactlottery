import React from 'react';

import { Helmet } from 'react-helmet';

const Welcome = () => {
  return (
    <>
      <Helmet>
        <title>Welcome | React Lottety</title>
        <meta name="description" content="This is a simple page to present latest EuroJackpot drawing results." />
      </Helmet>

      <header>
        <h1>Welcome to React Lottery</h1>
        <p>
          This is a simple page to present latest <a href="/results" title="Go to EuroJackpot results">EuroJackpot drawing results</a>.
        </p>
      </header>
    </>
  );
}

export default Welcome;
