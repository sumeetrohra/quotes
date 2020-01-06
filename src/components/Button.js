import React from 'react';

const Button = ({ text, color, onClick }) => {
  return (
    <button
      style={{
        borderRadius: '5px',
        border: 'none',
        padding: '10px',
        transition: '500ms',
        backgroundColor: `${color}`,
        color: 'white',
        fontSize: '20px',
        outline: 'none',
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
