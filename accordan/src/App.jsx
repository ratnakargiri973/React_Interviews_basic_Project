import React, { useState } from 'react';
import './App.css';

function App() {
  const [id, setId] = useState(null); // Initially no content is shown

  const data = [
    {
      title: "para1",
      content: "This is content for para1",
    },
    {
      title: "para2",
      content: "This is content for para2",
    },
    {
      title: "para3",
      content: "This is content for para3",
    },
  ];

  const handleToggle = (index) => {
    setId(id === index + 1 ? null : index + 1); // Toggle content visibility
  };

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <div className="question">
            <h1>{item.title}</h1>
            <button onClick={() => handleToggle(index)}>
              {id === index + 1 ? "➖" : "➕"} {/* Toggle between + and - */}
            </button>
          </div>
          {id === index + 1 && <p>{item.content}</p>}
        </div>
      ))}
    </>
  );
}

export default App;
