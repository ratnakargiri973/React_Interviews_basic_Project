import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentLight, setLight] = useState('red');
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the light based on the current light
      setLight((prevLight) => {
        switch (prevLight) {
          case 'red':
            setTimer(10); // Set timer for green
            return 'green';
          case 'yellow':
            setTimer(10); // Set timer for red
            return 'red';
          case 'green':
            setTimer(10); // Set timer for yellow
            return 'yellow';
          default:
            return 'red';
        }
      });
    }, 10000); // Change light every 10 seconds

    // Timer countdown
    const countdown = setInterval(() => {
      setTimer((prevTime) => prevTime > 0 ? prevTime - 1 : prevTime);
    }, 1000); // Update timer every second

    return () => {
      clearInterval(interval);
      clearInterval(countdown);
    };
  }, []);

  return (
    <>
      <div className="traffic-light">
        <div className={`light red ${currentLight === 'red' ? 'active' : ''}`}></div>
        <div className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`}></div>
        <div className={`light green ${currentLight === 'green' ? 'active' : ''}`}></div>
      </div>
      <div className="timer">
        {timer} seconds
      </div>
    </>
  );
}

export default App;
