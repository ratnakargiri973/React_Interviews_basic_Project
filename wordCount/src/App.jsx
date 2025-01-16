// import React, { useState } from 'react';

// function WordCharParagraphCounter() {
//   const [text, setText] = useState("");
//   const [wordCount, setWordCount] = useState(0);
//   const [charCount, setCharCount] = useState(0);
//   const [paragraphCount, setParagraphCount] = useState(0);

//   // Function to count words
//   const countWords = (text) => {
//     const words = text.trim().split(/\s+/);
//     return words.filter((word) => word.trim() !== "").length;
//   };

//   // Function to count characters
//   const countChars = (text) => {
//     return text.length;
//   };

//   // Function to count paragraphs
//   const countParagraphs = (text) => {
//     const paragraphs = text.split(/\n+/);
//     return paragraphs.filter((para) => para.trim() !== "").length;
//   };

//   // Function to calculate counts when "Count" button is clicked
//   const handleCount = () => {
//     setWordCount(countWords(text));
//     setCharCount(countChars(text));
//     setParagraphCount(countParagraphs(text));
//   };

//   // Function to clear the text and reset counts
//   const handleClear = () => {
//     setText("");
//     setWordCount(0);
//     setCharCount(0);
//     setParagraphCount(0);
//   };

//   return (
//     <div style={{ padding: '20px', width: '50%', margin: 'auto' }}>
//       <h2>Word, Character, and Paragraph Counter</h2>
//       <textarea
//         style={{ width: '100%', height: '200px', marginBottom: '20px' }}
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type or paste your text here..."
//       />
//       <div style={{ marginBottom: '10px' }}>
//         <button onClick={handleCount} style={{ marginRight: '10px', padding: '5px 10px' }}>Count</button>
//         <button onClick={handleClear} style={{ padding: '5px 10px' }}>Clear</button>
//       </div>
//       <div>
//         <p><strong>Words:</strong> {wordCount}</p>
//         <p><strong>Characters:</strong> {charCount}</p>
//         <p><strong>Paragraphs:</strong> {paragraphCount}</p>
//       </div>
//     </div>
//   );
// }

// export default WordCharParagraphCounter;



import React, { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [paraCount, setParaCount] = useState(0);

  function countWords(text){
    const words = text.trim().split(/\s+/);
    const totalWords = words.filter((word) => word.trim() !== "").length;
    return totalWords;
  }

  function countChars(text){
    const totalChars = text.length;
    return totalChars;
  }

  function countParagraphs(text){
    const paras = text.trim().split(/\n+/);
    const totalParas = paras.filter((para) =>  para.trim() !== " ").length;
    return totalParas;
  }

  function handleCount(){
    setWordCount(countWords(text));
    setCharCount(countChars(text));
    setParaCount(countParagraphs(text));
  }

  function handleClear(){
    setText("");
    setWordCount(0);
    setCharCount(0);
    setParaCount(0);
  }
  return (
    <div className='Container'>
    <div className='input-field'>
      <textarea name="" id="" value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <div className='btns'>
      <button onClick={handleCount}>Count</button>
      <button onClick={handleClear}>Clear</button>
      </div>
    </div>
    <div>
      <p>Chars: {charCount}</p>
      <p>Words: {wordCount}</p>
      <p>Paragraphs: {paraCount}</p>
    </div>
    </div>
  )
}

export default App

