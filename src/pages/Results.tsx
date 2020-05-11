import React, { useState } from 'react';

import { useQuery } from 'graphql-hooks';
import { Helmet } from 'react-helmet';

import DrawResult from 'components/DrawResult';

const EUROJACKPOT_QUERY = `query Eurojackpot($limit: Int) {
  draw(limit: $limit, type: "eurojackpot") {
    draws {
      additionalNumbers
      date
      jackpot
      numbers
    }
  }
}`;

const Results = () => {
  const [ limit, setLimit ] = useState(1);

  const { loading, error, data } = useQuery(EUROJACKPOT_QUERY, {
    variables: {
      limit: limit
    }
  });

  type Draw = {
    additionalNumbers: string[],
    date: string,
    jackpot: number,
    numbers: string[]
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wront...</p>;
  }

  return (
    <>
      <Helmet>
        <title>EuroJackpot Results | React Lottery</title>
        <meta name="description" content="Check out the latest EuroJackpot drawing results" />
      </Helmet>

      <header>
        <h1>EuroJackpot results</h1>
      </header>

      <section className="draw-results">
        <ul>
          {data.draw.draws.map((draw: Draw) => (
            <li key={draw.date}>
              <DrawResult {...draw} />
            </li>
          ))}
        </ul>

        {limit < 10 &&
          <button className="btn" onClick={() => setLimit(10)}>Show last ten drawing results</button>
        }
      </section>
    </>
  );
}

export default Results;
