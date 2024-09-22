import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img1 from './assets/photo-1682687981922-7b55dbb30892.avif'
import img2 from './assets/photo-1682695796497-31a44224d6d6.avif'
import img3 from './assets/photo-1682695797221-8164ff1fafc9.avif'
import img4 from './assets/premium_photo-1675804669850-a1c3b87589d5.avif'
import img5 from './assets/premium_photo-1681223447322-46794b8cdfd5.avif'

function App() {
  const images = [img1, img2, img3, img4, img5];
  const [selectedImage, setSelectedImage] = useState(null);

   function clickedSelectedImage(id){
     const res=images[id]
     setSelectedImage(res);
   }

  return (
   <>
   <div>
    {
      images.map((img,index)=> 
        <img src={img} style={{width:"12rem", height:"12rem", marginLeft:"20px"}}  onClick={()=>clickedSelectedImage(index)}/>)
    }
   </div>
   <div>
        {selectedImage && <img src={selectedImage} style={{width: "24rem", height: "24rem"}}/>}
      </div>
   </>
  )
}

export default App
