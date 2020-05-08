import React from 'react';

type DrawResultProps = {
  additionalNumbers: string[],
  numbers: string[]
}

const DrawResult = ({ additionalNumbers, numbers }: DrawResultProps) => {
  return (
    <article>
      <ul>
        {numbers.map((number: string) => (
          <li>{number}</li>
        ))}
        
        {additionalNumbers.map((additionalNumber: string) => (
          <li>{additionalNumber}</li>
        ))}
      </ul>
    </article>
  );
}

export default DrawResult;
