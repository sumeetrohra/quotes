import React from 'react';

const Container = ({ children, color }) => {
  return (
    <div
      style={{
        position: 'absolute',
        padding: 0,
        margin: 0,
        width: '100%',
        height: '100%',
        transition: '500ms',
        backgroundColor: `${color}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
}

export default Container;
