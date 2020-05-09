import React, { useState } from 'react';

import { useQuery } from 'graphql-hooks';

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
      <header>
        <h1>Results</h1>
      </header>

      <section className="draw-results">
        <ul>
          {data.draw.draws.map((draw: Draw) => (
            <li key={draw.date}>
              <DrawResult {...draw} />
            </li>
          ))}
        </ul>
      </section>

     {limit < 10 &&
      <button onClick={() => setLimit(10)}>Show last ten drawing results</button>
     }
    </>
  );
}

export default Results;
