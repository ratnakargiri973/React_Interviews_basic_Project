// import React from 'react'
// import { useEffect } from 'react';
// import { useRef } from 'react';
// import { useState } from 'react'

// function App() {
//   const [time, setTime] = useState(0);
//   const [running, setRunning] = useState(false);
//   const interval = useRef(null);

//   useEffect(()=>{
//       if(running){
//         interval.current = setInterval(()=>{
//           setTime((prevTime)=>prevTime+1);
//         }, 100);
//       }

//       return () => clearInterval(interval.current);
//   }, [running]);

//   function handleStart(){
//     setRunning(true);
//   }
//   function handleStop(){
//     setRunning(false);
//   }
//   function handleReset(){
//     setRunning(false);
//     setTime(0);
//   }

//   function handleTimer(totalSeconds){
//     let hours = Math.floor(totalSeconds / 3600);
//     let minutes = Math.floor((totalSeconds%3600)/60);
//     let seconds = totalSeconds%60;

//     // const paddedHours = hours.toString().padStart(2, '0');
//     // const paddedMinutes = minutes.toString().padStart(2, '0');
//     // const paddedSeconds = seconds.toString().padStart(2, '0');

//     const paddedHours = (hours < 10 ? '0' : '') + hours;
// const paddedMinutes = (minutes < 10 ? '0' : '') + minutes;
// const paddedSeconds = (seconds < 10 ? '0' : '') + seconds;

//     return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`
  
//   }
//   return (
//     <div>
//       <p>{handleTimer(time)}</p>
//    <button onClick={handleStart}>Start</button>
//    <button onClick={handleStop}>Stop</button>
//    <button onClick={handleReset}>Reset</button>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const interval = useRef(null);

  useEffect(()=> {
    if(running)
     interval.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
    }, 100)

    return () => clearInterval(interval.current);
  }, [running]);

  function handleStart(){
    setRunning(true);
  }
  function handleStop(){
    setRunning(false);
  }

  function handleReset(){
    setRunning(false)
    setTime(0);
  }

  function handleTimer(totalSeconds){
    let hours = Math.floor(totalSeconds/3600);
    let minutes = Math.floor((totalSeconds % 3600)/60);
    let seconds = totalSeconds % 60; 

    let paddedHours = (hours < 10 ? '0' : "") + hours;
    let paddedMinutes = (minutes < 10 ? '0': '') + minutes;
    let paddedSeconds =  (seconds < 10 ? '0' : '') + seconds;

    return `${paddedHours} : ${paddedMinutes} : ${paddedSeconds}`;
  }
  return (
    <div className='Container'>
    <div className='timer'>
      <p>{handleTimer(time)}</p>
      <div className='Btns'>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      </div>
    </div>
    </div>
  )
}

export default App
