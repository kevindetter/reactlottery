import React from 'react';

type DrawResultItemProps = {
  number: string
}

const DrawResultItem = ({ number }: DrawResultItemProps) => {
  return (
    <span>{number}</span>
  );
}

export default DrawResultItem;
