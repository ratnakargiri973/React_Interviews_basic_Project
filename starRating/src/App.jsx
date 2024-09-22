import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarIcon from '@mui/icons-material/Star';
import { Rating } from '@mui/material';

function App() {
  const [Rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0);
  function handleClick(index){
    setRating(index+1);
  }
  function handleMouseHover(index){
    setHoverRating(index+1)
  }
  function handleMouseLeave(index){
    setHoverRating(0);
  }

  return (
   <>
   {
    Array(5).fill().map((_,index)=>
    <StarIcon onClick={()=>handleClick(index)}
              onMouseEnter={()=>handleMouseHover(index)}
              onMouseLeave={()=>handleMouseLeave(index)}
              style={{
                cursor:"pointer",
                color:(hoverRating || Rating)>index ? "gold" :"gray",
                fontSize:"2rem" 
              }}/>
    )
   }
   {Rating}
   </>
  )
}

export default App
