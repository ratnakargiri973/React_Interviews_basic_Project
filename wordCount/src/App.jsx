import React, { useState } from 'react';

function WordCharParagraphCounter() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  // Function to count words
  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.filter((word) => word).length;
  };

  // Function to count characters
  const countChars = (text) => {
    return text.length;
  };

  // Function to count paragraphs
  const countParagraphs = (text) => {
    const paragraphs = text.split(/\n+/);
    return paragraphs.filter((para) => para.trim() !== "").length;
  };

  // Function to calculate counts when "Count" button is clicked
  const handleCount = () => {
    setWordCount(countWords(text));
    setCharCount(countChars(text));
    setParagraphCount(countParagraphs(text));
  };

  // Function to clear the text and reset counts
  const handleClear = () => {
    setText("");
    setWordCount(0);
    setCharCount(0);
    setParagraphCount(0);
  };

  return (
    <div style={{ padding: '20px', width: '50%', margin: 'auto' }}>
      <h2>Word, Character, and Paragraph Counter</h2>
      <textarea
        style={{ width: '100%', height: '200px', marginBottom: '20px' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
      />
      <div style={{ marginBottom: '10px' }}>
        <button onClick={handleCount} style={{ marginRight: '10px', padding: '5px 10px' }}>Count</button>
        <button onClick={handleClear} style={{ padding: '5px 10px' }}>Clear</button>
      </div>
      <div>
        <p><strong>Words:</strong> {wordCount}</p>
        <p><strong>Characters:</strong> {charCount}</p>
        <p><strong>Paragraphs:</strong> {paragraphCount}</p>
      </div>
    </div>
  );
}

export default WordCharParagraphCounter;
