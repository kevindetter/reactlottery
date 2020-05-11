import React from 'react';

type DrawResultItemProps = {
  number: string,
  additionalNumber?: boolean
}

const DrawResultItem = ({ number, additionalNumber }: DrawResultItemProps) => {
  const className = 'draw-result-item' + (additionalNumber ? ' draw-result-item--additional' : '');

  return <span className={className}>{number}</span>;
}

export default DrawResultItem;
