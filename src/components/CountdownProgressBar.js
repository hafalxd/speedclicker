import React from 'react';

function CountdownProgressBar({ seconds }) {
  const percent = (seconds / 5) * 100;

  return (
    <div style={{ width: '50%', background: '#eee', borderRadius: '5px' }}>
      <div
        style={{
          width: `${percent}%`,
          background: '#3f9cff',
          borderRadius: '5px',
          height: '20px',
        }}
      ></div>
    </div>
  );
}

export default CountdownProgressBar;