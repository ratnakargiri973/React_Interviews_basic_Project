import { useState, useEffect, useRef } from 'react';
import img1 from './assets/1.avif';
import img2 from './assets/2.avif';
import img3 from './assets/3.avif';
import img4 from './assets/4.avif';
import img5 from './assets/5.avif';
import img6 from './assets/6.avif';
import img7 from './assets/7.avif';
import './App.css';

function App() {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(interval.current);
  }, []);

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function handlePrev() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  return (
    <div>
      <button onClick={handlePrev} disabled={currentIndex===0}>Prev</button>
      <img src={images[currentIndex]} alt="carousel" style={{ width: "30rem", height: "20rem" }} />
      <button onClick={handleNext} disabled={currentIndex===images.length-1}>Next</button>
    </div>
  );
}

export default App;
