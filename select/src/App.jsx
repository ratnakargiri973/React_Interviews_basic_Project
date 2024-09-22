

import React from 'react'
import { useState } from 'react'

function App() {
  const [category, setCategory] = useState("");
  const [subOptions, setSubOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");


  const options = {
    fruits: ["Apple", "Banana", "Orange"],
    vegetables: ["Carrot", "Broccoli", "Spinach"],
    chocolates: ["Dark Chocolate", "Milk Chocolate", "White Chocolate"],
  };
  

  function handleCategoryChange(e){
    let selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubOptions(options[selectedCategory] || []);
    setSelectedOption("");
  }

  function handleOptionChange(e){
    setSelectedOption(e.target.value)
  }

  return (
    <div>
      <h1>Handle Categories</h1>

      <select value={category} onChange={handleCategoryChange}>
        <option value="">select category</option>
        <option value="fruits">fruits</option>
        <option value="vegetables">vegetables</option>
        <option value="chocolates">chocolates</option>
      </select>


      {category && (
        <div>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">select {category}</option>
            {subOptions.map((option, index)=>(
              <option value={option} key={index}>{option}</option>
            ))}
           
          </select>
        </div>
      )}

{selectedOption && (
        <p className="mt-4">
          You selected: <strong>{selectedOption}</strong>
        </p>
    )}
    </div>
  )
}

export default App

