import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [val, setVal] = useState(0);
   const ref =useRef(0);

  return (
   <>
   <button onClick={()=>setCount(count+parseInt(ref.current.value || 0))}>+</button>
   {count}
   <button onClick={()=>setCount(count-parseInt(ref.current.value || 0))}>-</button>
   <input type="number" name="" id="" ref={ref} defaultValue={0}/>
   <button onClick={()=>setCount(0)}>Reset</button>
   </>
  )
}

export default App

// export default function App(){
//     const [count, setCount] = useState(0);
//     const [inputValue, setInputValue] = useState(0);
//   return(
//     <>
//     <button onClick={()=>setCount(count + parseInt(inputValue || 0))}>+</button>
//     {count}
//     <button onClick={()=>setCount(count - parseInt(inputValue || 0 ))}>-</button>
//     <input type="number" name="" id="" onChange={(e)=>setInputValue(e.target.value)}/>
//     <button onClick={()=>setCount(0)}>Reset</button>
//     </>
//   )
// }
