import React from 'react';

const Quote = ({ text }) => {
  return (
    <p
      style={{
        fontWeight: '600',
      }}
    >
      {text}
    </p>
  );
}

export default Quote;
