import React from 'react';
import Purify from 'dompurify';

const RichText = ({text}) => {
  let escapedHTML = Purify.sanitize(text);
  return (
    <span className="richtext" dangerouslySetInnerHTML={{__html: escapedHTML}} />
  );
}

export default RichText;
