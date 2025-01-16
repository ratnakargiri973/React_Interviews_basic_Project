// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [phone, setPhone] = useState('');
//   const [number, setNumber] = useState('');

//   // Function to format phone number
//   const formatPhoneNumber = (num) => {
//     // Remove all non-numeric characters
//     const cleaned = ('' + num).replace(/\D/g, '');

//     // Format the cleaned number
//     const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
//     if (match) {
//       const formatted = [
//         match[1] ? `+(${match[1]})` : '',
//         match[2] ? ` -${match[2]}` : '',
//         match[3] ? `-${match[3]}` : ''
//       ].join('');
//       return formatted;
//     }
//     return num;
//   };

//   useEffect(() => {
//     setPhone(formatPhoneNumber(number));
//   }, [number]);

//   return (
//     <>
//       <input
//         type="text"
//         value={phone}
//         onChange={(e) => setNumber(e.target.value)}
//         placeholder="Enter phone number"
//       />
//     </>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';

function App() {
  const [phone, setPhone] = useState('');
  const [number, setNumber] = useState('');

  function formatPhoneNumber(num) {
    // Remove all non-numeric characters
    const cleaned = ('' + num).replace(/\D/g, '');
    // Validate if length exceeds 10 digits
    if (cleaned.length > 10) return 'Number too long';
    // Format the phone number
    const matched = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (matched) {
      const formatted = [
        matched[1] ? `+(${matched[1]})` : '',
        matched[2] ? ` ${matched[2]}` : '',
        matched[3] ? `-${matched[3]}` : '',
      ].join('');
      return formatted;
    }
    return num;
  }

  useEffect(() => {
    setPhone(formatPhoneNumber(number));
  }, [number]);

  return (
    <div>
      <input
        type="text"
        value={phone}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <p>Formatted Phone: {phone}</p>
    </div>
  );
}

export default App;
