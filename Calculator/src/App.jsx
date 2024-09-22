import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [first, setFirst] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleOperator = (op) => {
    setFirst(parseFloat(input));
    setOperator(op);
    setInput("");
  };

  const handleClear = () => {
    setInput("");
    setFirst(null);
    setOperator(null);
  };

  const handleCalculate = () => {
    const second = parseFloat(input);
    let res = 0;
    if (operator === "+") {
      res = first + second;
    } else if (operator === "-") {
      res = first - second;
    } else if (operator === "*") {
      res = first * second;
    } else if (operator === "/") {
      res = first / second;
    } else if (operator === "^") {
      res = Math.pow(first, second);
    } else if (operator === "^2") {
      res = Math.pow(first, 2);
    } else if (operator === "√") {
      res = Math.sqrt(first);
    }
    setInput(res.toString());
    setFirst(null);
    setOperator(null);
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleOperator("+")}>+</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleOperator("-")}>-</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleOperator("*")}>*</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleOperator("/")}>/</button>
          <button onClick={() => handleOperator("^")}>^</button>
          <button onClick={() => handleOperator("^2")}>^2</button>
          <button onClick={() => handleOperator("√")}>√</button>
          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
