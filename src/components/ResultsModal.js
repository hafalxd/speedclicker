import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.css';

function ResultsModal({ clickCount, chartData, chartOptions, onRetry }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '10px',
          padding: '20px',
          width: '80%',
          maxWidth: '500px',
        }}
      >
        <h2>Your score: {clickCount} clicks in 5 seconds</h2>
        <Bar data={chartData} options={chartOptions} />
        <button className='btn btn-primary retryButton' onClick={onRetry}>Retry</button>
      </div>
    </div>
  );
}

export default ResultsModal;