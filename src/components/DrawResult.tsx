import React from 'react';

import DrawResultItem from 'components/DrawResultItem';

type DrawResultProps = {
  additionalNumbers: string[],
  date: string,
  numbers: string[]
}

// Converts data from backend to UTC string
const DateToUTC = (date: string): string => {
  let timestamp = new Date(date);
  
  return timestamp.toISOString();
}

const FormatDate = (date: string): string => {
  let formattedDate = new Date(date);
  
  return formattedDate.toLocaleDateString('en-US');;
}

const DrawResult = ({ additionalNumbers, date, numbers }: DrawResultProps) => {
  return (
    <article className="draw-result">
      <h2>
        <span>Winning numbers </span>
        <time dateTime={DateToUTC(date)}>{FormatDate(date)}</time>
      </h2>

      <ul>
        {numbers.map((number: string) => (
          <li key={number}><DrawResultItem number={number} /></li>
        ))}

        <span className="draw-result__plus">+</span>

        {additionalNumbers.map((number: string) => (
          <li key={number}><DrawResultItem number={number} additionalNumber /></li>
        ))}
      </ul>
    </article>
  );
}

export default DrawResult;
