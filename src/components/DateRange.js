import React from 'react';

const DateRange = ({from, to}) => {
  let fromElem = from instanceof Date
    ? <date dateTime={from.toUTCString()}>{from.toDateString()}</date>
    : '';
  let toElem = to instanceof Date
    ? <date dateTime={to.toUTCString()}>{to.toDateString()}</date>
    : '';
  let range = fromElem !== '' || toElem !== ''
    ? <span>{fromElem}<span> - </span>{toElem}</span>
    : '';
  return (
    <span>
      {range}
    </span>
  );
}

export default DateRange;
