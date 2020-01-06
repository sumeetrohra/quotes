import React from 'react';

const QuoteBox = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: '450px',
        maxHeight: '600px',
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: '8px',
        flexDirection: 'column',
        padding: '30px',
        margin: '20px',
      }}
    >
      {children}
    </div>
  );
}

export default QuoteBox;
