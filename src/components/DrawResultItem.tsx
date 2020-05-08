import React from 'react';

type DrawResultItemProps = {
  number: string,
  additionalNumber?: boolean
}

const DrawResultItem = ({ number, additionalNumber }: DrawResultItemProps) => {
  return (
    <span>{number}</span>
  );
}

export default DrawResultItem;
