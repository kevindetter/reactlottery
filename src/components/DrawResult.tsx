import React from 'react';

import DrawResultItem from 'components/DrawResultItem';

type DrawResultProps = {
  additionalNumbers: string[],
  numbers: string[]
}

const DrawResult = ({ additionalNumbers, numbers }: DrawResultProps) => {
  return (
    <article className="draw-result">
      <ul>
        {numbers.map((number: string) => (
          <li><DrawResultItem number={number} /></li>
        ))}

        <span className="draw-result__plus">+</span>

        {additionalNumbers.map((number: string) => (
          <li><DrawResultItem number={number} additionalNumber /></li>
        ))}
      </ul>
    </article>
  );
}

export default DrawResult;
