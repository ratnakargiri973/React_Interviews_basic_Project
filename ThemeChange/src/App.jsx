import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <header>
        <h1>React Light/Dark Theme</h1>
        <button onClick={toggleTheme}>
          Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
        </button>
      </header>

      <main>
        <p>This is a simple example of toggling between light and dark themes in React.</p>
      </main>
    </div>
  );
};

export default App;
