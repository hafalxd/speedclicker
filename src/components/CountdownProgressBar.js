import React, { useEffect, useState } from 'react';

function CountdownProgressBar({ seconds }) {
  const [timeRemaining, setTimeRemaining] = useState(seconds);
  const percent = (timeRemaining / 5) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => {
        if (prevTimeRemaining <= 0.01) {
          clearInterval(timer);
          return 0;
        }
        return prevTimeRemaining - 0.01;
      });
    }, 10);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: '100%', background: '#eee', borderRadius: '5px' }}>
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