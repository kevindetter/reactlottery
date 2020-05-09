import React from 'react';

import { useQuery } from 'graphql-hooks';

import DrawResult from 'components/DrawResult';

const EUROJACKPOT_QUERY = `query Eurojackpot($limit: Int) {
  draw(limit: $limit, type: "eurojackpot") {
    draws {
      additionalNumbers
      date
      numbers
    }
  }
}`;

const Results = () => {
  const { loading, error, data } = useQuery(EUROJACKPOT_QUERY, {
    variables: {
      limit: 10
    }
  });

  type Draw = {
    additionalNumbers: string[],
    date: string,
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
              <DrawResult additionalNumbers={draw.additionalNumbers} numbers={draw.numbers} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Results;
