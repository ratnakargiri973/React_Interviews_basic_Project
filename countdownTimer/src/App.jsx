import React, { useEffect, useRef, useState } from 'react'

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    if (running) {
      interval.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval.current);
            setRunning(false);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else if (!running && interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(interval.current);
  }, [running]);

  function handleStart() {
    if (!running && time === 0) {
      // Set the time only when the timer is starting for the first time or after reset
      let totalTime = parseInt(minutes) * 60;
      setTime(totalTime);
    }
    setRunning(true);
  }

  function handleStop() {
    setRunning(false);
  }

  function handleReset() {
    setRunning(false);
    setTime(0);
  }

  function handleTimer(time) {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    const formattedMin = String(min).padStart(2, '0');
    const formattedSec = String(sec).padStart(2, '0');

    return `${formattedMin} : ${formattedSec}`;
  }

  return (
    <div>
      <input
        type="number"
        name="minute"
        id="minute"
        onChange={(e) => setMinutes(e.target.value)}
        disabled={running} 
      />
      <p>{handleTimer(time)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;

