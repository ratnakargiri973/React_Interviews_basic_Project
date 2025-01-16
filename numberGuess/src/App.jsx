// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [num, setNum] = useState(0)
//   const [auto, setAuto]= useState(null);
 
//   const [message, setMessage] = useState("")

//   useEffect(()=>{
//     const randomNumber = Math.floor(Math.random()*100);
//     setAuto(randomNumber);
//   },[])

//   function check(){
//     if(num>auto){
//      setMessage("the value is greater")
//     }
//     else{
//     setMessage("the value is less");
//     }
//   }

//   return (
//    <>
//      <input type="number" name="" id="" value={num} onChange={(e)=>setNum(e.target.value)}/>
//      {message}
//      <button onClick={()=>check()}>Check</button>
//      <button onClick={()=>(setNum(0),setMessage(""))}>Reset</button>

//    </>
//   )
// }

// export default App


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [num, setNum] = useState(0);
  const [auto, setAuto] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(()=>{
    const randomNumber = Math.floor(Math.random() * 100);
    setAuto(randomNumber);
  }, []);

  function check(){
    if(num > auto){
      setMessage("The number is greater");
    }
    else{
      setMessage("The number is less");
    }
  }
  return (
    <div>
      <input type="number" name="" id="" value = {num} onChange={(e)=>setNum(e.target.value)}/>
      {message}
      <button onClick={check}>Check</button>
      <button onClick={()=>(setNum(0), setMessage(""))}>Reset</button>
    </div>
  )
}

export default App
