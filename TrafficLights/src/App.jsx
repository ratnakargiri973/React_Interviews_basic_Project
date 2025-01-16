// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [currentLight, setLight] = useState('red');
//   const [timer, setTimer] = useState(10);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Update the light based on the current light
//       setLight((prevLight) => {
//         switch (prevLight) {
//           case 'red':
//             setTimer(10); // Set timer for green
//             return 'green';
//           case 'yellow':
//             setTimer(10); // Set timer for red
//             return 'red';
//           case 'green':
//             setTimer(10); // Set timer for yellow
//             return 'yellow';
//           default:
//             return 'red';
//         }
//       });
//     }, 10000); // Change light every 10 seconds

//     // Timer countdown
//     const countdown = setInterval(() => {
//       setTimer((prevTime) => prevTime > 0 ? prevTime - 1 : prevTime);
//     }, 1000); // Update timer every second

//     return () => {
//       clearInterval(interval);
//       clearInterval(countdown);
//     };
//   }, []);

//   return (
//     <>
//       <div className="traffic-light">
//         <div className={`light red ${currentLight === 'red' ? 'active' : ''}`}></div>
//         <div className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`}></div>
//         <div className={`light green ${currentLight === 'green' ? 'active' : ''}`}></div>
//       </div>
//       <div className="timer">
//         {timer} seconds
//       </div>
//     </>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react'
// import './App.css';

// function App() {
//   const [Light, setLight] = useState("red");
//   const [timer, setTimer] = useState(10);

//   useEffect(()=>{
//     const interval = setInterval(()=> {
//       setLight((prevLight)=>{
//          switch (prevLight) {
//           case 'red':
//             setTimer(10);
//             return 'green';
//           case 'yellow':
//             setTimer(10);
//             return 'red';
//           case 'green':
//             setTimer(10);
//             return 'yellow'
//           default:
//             return 'red';
//          }
//       })
//     }, 10000);

//     const countdown = setInterval(()=>{
//       setTimer((prevTimer) => prevTimer > 0 ? prevTimer - 1 : prevTimer);
//     }, 1000);

//     return () => {
//            clearInterval(interval);
//            clearInterval(countdown);
//     }
//   }, [])

//   return (
//     <div>
//       <div className="traffic-light">
//         <div className={`light red ${Light === 'red' ? 'active' : " "}`}></div>
//         <div className={`light yellow ${Light === 'yellow' ? 'active' : " "}`}></div>
//         <div className={`light green ${Light === 'green' ? 'active' : " "}`}></div>
//       </div>
//       <div className="timer">
//         {timer} seconds
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [Light, setLight] = useState("red");
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          changeLight();
          return getLightDuration(Light);
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [Light]);

  function changeLight() {
    setLight((prevLight) => {
      if (prevLight === 'red') {
        return 'green';
      } else if (prevLight === 'yellow') {
        return 'red';
      } else if (prevLight === 'green') {
        return 'yellow';
      }
    });
  }

  function getLightDuration(light) {
    if (light === 'red') return 20;
    if (light === 'yellow') return 15;
    if (light === 'green') return 10;
    return 10; 
  }

  return (
    <div>
      <div className="traffic-light">
        <div className={`light red ${Light === 'red' ? 'active' : ''}`}></div>
        <div className={`light yellow ${Light === 'yellow' ? 'active' : ''}`}></div>
        <div className={`light green ${Light === 'green' ? 'active' : ''}`}></div>
      </div>
      <div>
        <p className="timer">{timer}</p>
      </div>
    </div>
  );
}

export default App;
