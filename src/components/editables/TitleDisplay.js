import React from 'react';
import RichText from '../RichText';

const TitleDisplay = ({text, toggleEdit}) => {
  return (
    <div>
      <h1><RichText text={text} /></h1>
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );
}

export default TitleDisplay;
