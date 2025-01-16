import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import img1 from './assets/1.avif'
import img2 from './assets/2.avif'
import img3 from './assets/3.avif'
import img4 from './assets/4.avif'
import img5 from './assets/5.avif'
import img6 from './assets/6.avif'
import img7 from './assets/7.avif'


// function App() {
//   const images = [img1, img2, img3, img4, img5, img6, img7];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const interval = useRef(null);

//   useEffect(()=>{
//     interval.current = setInterval(()=>{
//         setCurrentIndex((prevIndex)=>(prevIndex+1)%images.length);
//     }, 3000)

//     return ()=> clearInterval(interval.current);
//   },[]);

//   function handleNext(){
//     setCurrentIndex((prevIndex)=>(prevIndex+1)%images.length);
//   }
//   function handlePrev(){
//     setCurrentIndex((prevIndex)=>(prevIndex-1+images.length) % images.length);
//   }
//   return (
//     <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
//     <img src={images[currentIndex]} alt="image" style={{ width: "30rem", height: "20rem" }}/>
//     <div>
//     <button  onClick={()=>handlePrev()} disabled={currentIndex===0}>prev</button>
//     <button onClick={()=>handleNext()} disabled={currentIndex===images.length-1}>next</button>
//     </div>
//     </div>
//   )
// }

// export default App

// import React from 'react'

function App() {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [index, setIndex] = useState(0);
  const interval = useRef(null);

  useEffect(()=>{
    interval.current = setInterval(()=>{
      setIndex((prevIndex)=>(prevIndex+1)%images.length);
    }, 3000)

    return ()=> clearInterval(interval.current);
  }, []);

  function handlePrev(){
    setIndex((prevIndex)=>(prevIndex-1+images.length)%images.length);
  }

  function handleNext(){
    setIndex((prevIndex)=>(prevIndex+1)%images.length);
  }

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <img src={images[index]} alt="image" style={{width: "30rem", height:"20rem"}} />
      <div>
        <button disabled={index===0} onClick={()=>handlePrev()}>prev</button>
        <button disabled={index=== images.length-1} onClick={()=>handleNext()}>next</button>
      </div>
    </div>
  )
}

export default App
