import React from 'react';

type DrawResultProps = {
  numbers: string[]
}

const DrawResult = ({ numbers }: DrawResultProps) => {
  return (
    <article>
      <ul>
        {numbers.map((number: string) => (
          <li>{number}</li>
        ))}
      </ul>
    </article>
  );
}

export default DrawResult;
