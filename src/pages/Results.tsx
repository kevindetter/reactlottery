import React from 'react';

import { useQuery } from 'graphql-hooks';

const EUROJACKPOT_QUERY = `query Eurojackpot($limit: Int) {
  draw(limit: $limit, type: "eurojackpot") {
    draws {
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

  interface Draw {
    date: string;
    numbers: string[];
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wront...</p>;
  }

  return (
    <main>
      <h1>Results</h1>

      <ul>
        {data.draw.draws.map((draw: Draw) => (
          <li key={draw.date}>{draw.date}}</li>
        ))}
      </ul>
    </main>
  );
}

export default Results;
