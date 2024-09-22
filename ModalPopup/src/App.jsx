import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [show, setShow] = useState(false)

  return (
   <>
   <button onClick={()=>setShow(true)}>Show</button>
   {
    show ?  <div style={{display:"flex", justifyContent:"center",
      flexDirection:"column", alignItems:"center", gap:"10px" ,width:"30rem", height:"15rem", backgroundColor:"bisque"
     }}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus laborum delectus quasi autem distinctio suscipit facere corrupti quidem iste omnis perferendis vel, fuga quos dolorum officiis. Enim, voluptas quisquam.</p>
      <button onClick={()=>setShow(false)}>Close</button>
     </div> : " "
   }
  
   </>
  )
}

export default App
