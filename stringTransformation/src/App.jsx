import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [string, setString] = useState("");
  const [transformedString, setTransformedString] = useState(string);
  function toLowerCase(){
    setTransformedString(string.toLowerCase());
  }
  function toUpperCase(){
    setTransformedString(string.toUpperCase());
  }
  function camelCase(){
   const updatedString = string.toLowerCase()
                               .replace(/[^a-z0-9]+/g, ' ')
                               .trim()
                               .split(' ')
                               .map((word, index)=>
                                 index==0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
    setTransformedString(updatedString);
  }

  function snakeCase(){
    const updatedString = string.toLowerCase()                // Convert the entire string to lowercase
    .replace(/\s+/g, '_')         // Replace all whitespace characters with underscores
    .replace(/[^\w\-]+/g, '')     // Remove all non-alphanumeric characters except underscores and hyphens
    .replace(/--+/g, '-')         // Replace multiple hyphens with a single hyphen (if needed)
    .replace(/^-+|-+$/g, '');

    setTransformedString(updatedString);
  }

  function kebabCase(){
    const updatedString = string.toLowerCase()                // Convert the entire string to lowercase
    .replace(/\s+/g, '-')         // Replace all whitespace characters with hyphens
    .replace(/[^\w\-]+/g, '');
    setTransformedString(updatedString);
  }

  function trim(){
    setTransformedString(string.trim());
  }



  return (
   <>
   <textarea name="" id="" cols="30" value={string} onChange={(e)=>setString(e.target.value)}></textarea>
   <button onClick={toUpperCase}>upper case</button>
   <button onClick={toLowerCase}>lower case</button>
   <button onClick={camelCase}>camel case</button>
   <button onClick={snakeCase}>snake case</button>
   <button onClick={kebabCase}>kebab case</button>
   <button onClick={trim}>trim</button>

   {transformedString}
   </>
  )
}

export default App
