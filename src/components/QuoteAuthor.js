import React from 'react';

const QuoteAuthor = ({ text }) => {
  return (
    <p
      style={{
        textAlign: 'right',
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >{`- ${text || 'Anonymous'}`}</p>
  );
}

export default QuoteAuthor;
