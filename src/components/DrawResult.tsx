import React from 'react';

import DrawResultItem from 'components/DrawResultItem';

type DrawResultProps = {
  additionalNumbers: string[],
  numbers: string[]
}

const DrawResult = ({ additionalNumbers, numbers }: DrawResultProps) => {
  return (
    <article>
      <ul>
        {numbers.map((number: string) => (
          <li><DrawResultItem number={number} /></li>
        ))}

        {additionalNumbers.map((number: string) => (
          <li><DrawResultItem number={number} additionalNumber /></li>
        ))}
      </ul>
    </article>
  );
}

export default DrawResult;
