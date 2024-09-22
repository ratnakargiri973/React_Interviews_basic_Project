import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [phone, setPhone] = useState('');
  const [number, setNumber] = useState('');

  // Function to format phone number
  const formatPhoneNumber = (num) => {
    // Remove all non-numeric characters
    const cleaned = ('' + num).replace(/\D/g, '');

    // Format the cleaned number
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      const formatted = [
        match[1] ? `+(${match[1]}` : '',
        match[2] ? `) -${match[2]}` : '',
        match[3] ? `${match[3]}` : ''
      ].join('');
      return formatted;
    }
    return num;
  };

  useEffect(() => {
    setPhone(formatPhoneNumber(number));
  }, [number]);

  return (
    <>
      <input
        type="text"
        value={phone}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter phone number"
      />
    </>
  );
}

export default App;
