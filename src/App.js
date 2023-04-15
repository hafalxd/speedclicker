import React, { useState, useRef, useEffect } from 'react';
import Countdown from 'react-countdown';
import { Chart, BarElement, BarController, LinearScale, CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import CountdownProgressBar from './components/CountdownProgressBar';


Chart.register(BarElement, BarController, LinearScale, CategoryScale);


function App() {
  const [startCountdown, setStartCountdown] = useState(false);
  const [countdownCompleted, setCountdownCompleted] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [secondCountdownStarted, setSecondCountdownStarted] = useState(false);
  const [secondCountdownEndTime, setSecondCountdownEndTime] = useState(null);
  const [clicksPerSecond, setClicksPerSecond] = useState([0, 0, 0, 0, 0]);
  const [testFinished, setTestFinished] = useState(false);


  const clickCounterRef = useRef(null);

  const handleStart = () => {
    setStartCountdown(true);
  };

  const handleClick = () => {
    setClickCount((prevClickCount) => prevClickCount + 1);
    const currentTime = Date.now();
    const elapsedSeconds = Math.floor((currentTime - secondCountdownEndTime + 5000) / 1000);
    setClicksPerSecond((prevClicksPerSecond) => {
      const newClicksPerSecond = [...prevClicksPerSecond];
      newClicksPerSecond[elapsedSeconds] += 1;
      return newClicksPerSecond;
    });
  };

  useEffect(() => {
    if (countdownCompleted) {
      const interval = setInterval(() => {
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countdownCompleted, clickCount]);

  const handleCountdownComplete = () => {
    setCountdownCompleted(true);
    if (clickCounterRef.current) {
      clickCounterRef.current.disabled = true;
    }
    setSecondCountdownStarted(true);
    setSecondCountdownEndTime(Date.now() + 5000);
  };

  const handleRetry = () => {
    setStartCountdown(false);
    setCountdownCompleted(false);
    setClickCount(0);
    setSecondCountdownStarted(false);
    setSecondCountdownEndTime(null);
    setClicksPerSecond([0, 0, 0, 0, 0]);
    setTestFinished(false);
  };


  const chartData = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Clicks',
        data: clicksPerSecond,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time (s)',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Click Count',
        },
      },
    },
  };

  return (
    <div className="App">
      <h1>Clicking Speed Test</h1>

      {!startCountdown && (
        <button onClick={handleStart}>Start Clicking Speed Test</button>
      )}

      {startCountdown && (
        <button
          ref={clickCounterRef}
          onClick={handleClick}
          disabled={!countdownCompleted || (secondCountdownStarted && testFinished)}
        >
          Click me!
        </button>
      )}

      {countdownCompleted && secondCountdownStarted && testFinished && (
        <div>
          <button onClick={handleRetry}>Retry</button>
        </div>
      )}

      {startCountdown && !countdownCompleted && (
        <Countdown
          date={Date.now() + 3000}
          onComplete={handleCountdownComplete}
          renderer={({ seconds }) => (
            <div>
              <h2>Get Ready: {seconds}</h2>
            </div>
          )}
        />
      )}

      {countdownCompleted && secondCountdownStarted && (
        <Countdown
          date={secondCountdownEndTime}
          onComplete={() => {
            if (clickCounterRef.current) {
              clickCounterRef.current.disabled = true;
            }
            setTestFinished(true);
          }}
          renderer={({ seconds }) => (
            <div>
              <h2>Time remaining: {seconds}</h2>
              <CountdownProgressBar seconds={seconds} />
            </div>
          )}
        />
      )}

      {countdownCompleted && secondCountdownStarted && testFinished && (
        <div>
          <h2>Your score: {clickCount} clicks in 5 seconds</h2>
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}

    </div>
  );
}

export default App;