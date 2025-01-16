// import React, { useState } from 'react';
// import './App.css'; // Assuming you're using CSS for styling

// const PasswordStrengthChecker = () => {
//   const [password, setPassword] = useState('');
//   const [strength, setStrength] = useState('weak');
//   const [strengthClass, setStrengthClass] = useState('');

//   const passwordStrength = (password) => {
//     let strengthValue = 'weak';
//     let className = '';

//     if (password.length > 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[\W]/.test(password)) {
//       strengthValue = 'Strong';
//       className = 'strong';
//     } else if (password.length > 6 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)) {
//       strengthValue = 'Medium';
//       className = 'medium';
//     }

//     setStrength(strengthValue);
//     setStrengthClass(className);
//   };

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     passwordStrength(newPassword);
//   };

//   return (
//     <div>
//       <label htmlFor="password">Password:</label>
//       <input
//         type="password"
//         id="password"
//         value={password}
//         onChange={handlePasswordChange}
//         placeholder="Enter your password"
//       />
//       <div id="strength" className={strengthClass}>
//         Strength: {strength}
//       </div>
//     </div>
//   );
// };

// export default PasswordStrengthChecker;

import React, { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('weak');
  const [strengthClass, setStrengthClass] = useState('');

  function passwordStrength(password){
       let strengthValue = "weak";
       let className = "";

      if(password.length > 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[\W]/.test(password)){
        strengthValue ="Strong";
        className ="strong";
      }
      else if(password.length > 6 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)){
        strengthValue ="Medium";
        className ="medium";
      }

      setStrength(strengthValue);
      setStrengthClass(className);
  }

  function handlePasswordChange(e){
    const newPassword = e.target.value;
    setPassword(newPassword);
    passwordStrength(newPassword)
  }
  return (
    <div>
      <label htmlFor="">password: </label>
      <input type="password" name="" id="" value={password} placeholder='Enter Password' onChange={handlePasswordChange}/>
      <div id="strength" className={strengthClass}>Strength : {strength}</div>
    </div>
  )
}

export default App

