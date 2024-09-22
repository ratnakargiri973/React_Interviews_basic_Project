import React, { useState } from 'react';

function App() {
  const [otp, setOtp] = useState(new Array(6).fill(''));

  function handleChange(e, index) {
    const value = e.target.value.slice(-1);
    const updatedOTP = otp.map((digit, i) => (i === index ? value : digit));
    setOtp(updatedOTP);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  }
 function handleKeyDown(e,index){
  if (e.key === 'Backspace' && index > 0 && !otp[index]) {
    document.getElementById(`otp-input-${index - 1}`).focus();
}
 }
  return (
    <div>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          id={`otp-input-${index}`}
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e)=>handleKeyDown(e,index)}
          className="otp-input"
        />
      ))}
    </div>
  );
}

export default App;
