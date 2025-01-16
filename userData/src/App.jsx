// // import React, { useState } from 'react';

// // function App() {
// //   const [step, setStep] = useState(1);
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [city, setCity] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [dob, setDob] = useState("");

// //   const [nameError, setNameError] = useState("");
// //   const [emailError, setEmailError] = useState("");
// //   const [cityError, setCityError] = useState("");
// //   const [phoneError, setPhoneError] = useState("");
// //   const [dobError, setDobError] = useState("");

// //   const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

// //   function handleNext() {
// //     let valid = true;

// //     // Clear previous error messages
// //     setNameError("");
// //     setEmailError("");
// //     setCityError("");
// //     setPhoneError("");
// //     setDobError("");

// //     if (step === 1) {
// //       if (!name.trim()) {
// //         setNameError("Name is required");
// //         valid = false;
// //       } else if (name.length <= 2) {
// //         setNameError("Please enter a valid name (more than 2 characters)");
// //         valid = false;
// //       }
// //     }

// //     if (step === 2) {
// //       if (!email.trim()) {
// //         setEmailError("Email is required");
// //         valid = false;
// //       } else if (!emailRegex.test(email)) {
// //         setEmailError("Please enter a valid Gmail address");
// //         valid = false;
// //       }
// //     }

// //     if (step === 3) {
// //       if (!city.trim()) {
// //         setCityError("City is required");
// //         valid = false;
// //       }
// //     }

// //     if (step === 4) {
// //       if (!phone.trim()) {
// //         setPhoneError("Phone is required");
// //         valid = false;
// //       }
// //     }

// //     if (step === 5) {
// //       if (!dob.trim()) {
// //         setDobError("Date of Birth is required");
// //         valid = false;
// //       }
// //     }

// //     if (valid) setStep(step + 1);
// //   }

// //   function handleBack() {
// //     setStep(step - 1);
// //   }

// //   return (
// //     <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
// //       {step === 1 && (
// //         <div>
// //           <input
// //             type="text"
// //             placeholder="Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //           {nameError && <p style={{ color: "red" }}>{nameError}</p>}
// //           <button onClick={handleNext}>Next</button>
// //         </div>
// //       )}

// //       {step === 2 && (
// //         <div>
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //           {emailError && <p style={{ color: "red" }}>{emailError}</p>}
// //           <button onClick={handleBack}>Back</button>
// //           <button onClick={handleNext}>Next</button>
// //         </div>
// //       )}

// //       {step === 3 && (
// //         <div>
// //           <input
// //             type="text"
// //             placeholder="City"
// //             value={city}
// //             onChange={(e) => setCity(e.target.value)}
// //           />
// //           {cityError && <p style={{ color: "red" }}>{cityError}</p>}
// //           <button onClick={handleBack}>Back</button>
// //           <button onClick={handleNext}>Next</button>
// //         </div>
// //       )}

// //       {step === 4 && (
// //         <div>
// //           <input
// //             type="number"
// //             placeholder="Phone"
// //             value={phone}
// //             onChange={(e) => setPhone(e.target.value)}
// //           />
// //           {phoneError && <p style={{ color: "red" }}>{phoneError}</p>}
// //           <button onClick={handleBack}>Back</button>
// //           <button onClick={handleNext}>Next</button>
// //         </div>
// //       )}

// //       {step === 5 && (
// //         <div>
// //           <input
// //             type="date"
// //             placeholder="Date of Birth"
// //             value={dob}
// //             onChange={(e) => setDob(e.target.value)}
// //           />
// //           {dobError && <p style={{ color: "red" }}>{dobError}</p>}
// //           <button onClick={handleBack}>Back</button>
// //           <button onClick={handleNext}>Submit</button>
// //         </div>
// //       )}

// //       {step > 5 && (
// //         <div>
// //           <h2>Submitted Data:</h2>
// //           <p><strong>Name:</strong> {name}</p>
// //           <p><strong>Email:</strong> {email}</p>
// //           <p><strong>City:</strong> {city}</p>
// //           <p><strong>Phone:</strong> {phone}</p>
// //           <p><strong>Date of Birth:</strong> {dob}</p>
// //           <button onClick={handleBack}>Back</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useState } from 'react'
// import './App.css';

// function App() {
//   const [step, setStep] = useState(1);
//   const [name,setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [phone, setPhone] = useState("");
//   const [dob, setDob] = useState("");

//   const [nameErr, setNameErr] = useState("");
//   const [emailErr, setEmailErr] = useState("");
//   const [cityErr, setCityErr] = useState("");
//   const [phoneErr, setphoneErr] = useState("");
//   const [dobErr, setDobErr] = useState("");

//   const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

//   function handleNext(){
//     let valid = true;

//     setNameErr("");
//     setEmailErr("");
//     setCityErr("");
//     setphoneErr("");
//     setDobErr("");
    
//     if(step === 1){
//       if(!name.trim()){
//         setNameErr("name is required");
//         valid = false;
//       }
//       else if(name.length <=2){
//         setNameErr("Please enter a valid name (more than 2 characters)");
//         valid = false;
//       }
//     }
    
//     if(step === 2){
//       if(!email.trim()){
//         setNameErr("email is required");
//         valid = false;
//       }
//       else if(!emailRegex.test(email)){
//         setEmailErr("Please enter a valid email");
//         valid = false;
//       }
//     }

//     if(step === 3){
//       if(!city.trim()){
//         setCityErr("city is required");
//         valid = false;
//       }
//     }

//     if(step === 4){
//       if(!phone.trim()){
//         setphoneErr("Phone is required");
//         valid = false;
//       }
//       else if(phone.length < 10){
//         setphoneErr("Please enter a valid phone number");
//         valid = false;
//       }
//     }

//     if(step === 5){
//       if(!dob.trim()){
//         setDobErr("dob is required");
//         valid = false;
//       }
//     }

//     if(valid)  setStep(step+1);
//   }
//  function handleBack(){
//   setStep(step - 1);
//  }
//   return (
//     <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
//       {step === 1 && 
//       <div className='input-box'>
//         <>
//        <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)}/>
//        {nameErr && <p style={{color: 'red'}}>{nameErr}</p>}
//        </>
//        <button onClick={handleNext}>Next</button>
//        </div>  
//        }
      
//       {step === 2 && 
//       <div className='input-box'>
//         <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)}/>
//         {emailErr && <p style={{color: 'red'}}>{emailErr}</p>}
//         <button onClick={handleBack}>Back</button>
//         <button onClick={handleNext}>Next</button>
//         </div>
//         }

//         {step === 3 &&
//           <div className='input-box'>
//             <input type="text" name="" id="" value={city} onChange={(e) => setCity(e.target.value)}/>
//             {cityErr && <p style={{color: 'red'}}>{cityErr}</p>}
//             <button onClick={handleBack}>Back</button>
//             <button onClick={handleNext}>Next</button>
//           </div>
//         }

//         {step === 4 &&
//           <div className='input-box'>
//             <input type="text" name="" id="" value={phone} onChange={(e) => setPhone(e.target.value)}/>
//             {phoneErr && <p style={{color: 'red'}}>{phoneErr}</p>}
//             <button onClick={handleBack}>Back</button>
//             <button onClick={handleNext}>Next</button>
//           </div>
//         }

//        {step === 5 &&
//           <div className='input-box'>
//             <input type="date" name="" id="" value={dob} onChange={(e) => setDob(e.target.value)}/>
//             {dobErr && <p style={{color: 'red'}}>{dobErr}</p>}
//             <button onClick={handleBack} >Back</button>
//             <button onClick={handleNext}>Submit</button>
//           </div>
//         }

//         {step > 5 && 
//         <div>
//           <p>Name: {name}</p>
//           <p>Email: {email}</p>
//           <p>City: {city}</p>
//           <p>Phone: {phone}</p>
//           <p>DOB: {dob}</p>
//         </div>
//         }
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import './App.css'

function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [dobErr, setDobErr] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  function handleNext(){
    var valid = true;

    setNameErr("");
    setEmailErr("");
    setCityErr("");
    setPhoneErr("");
    setDobErr("");
    
    if(step === 1){
      if(!name.trim()){
        setNameErr("name is required");
        valid= false;
      }
      else if(name.length <= 6){
        setNameErr("Name size should be more than six or equal to six");
        valid=false;
      }
    }

    if(step === 2){
      if(!email.trim()){
        setNameErr("email is required");
        valid = false;
      }
      else if(!emailRegex.test(email)){
        setNameErr("Enter a valid email");
        valid = false;
      }
    }

    if(step === 3){
      if(!city.trim()){
        setNameErr("city is required");
        valid = false;
      }
    }

    if(step === 4){
      if(!phone.trim()){
        setNameErr("phone is required");
        valid = false;
      }
      else if(phone.length < 10){
        setNameErr("Enter a valid phone number");
        valid = false;
      }
    }

    if(step === 5){
      if(!dob.trim()){
        setNameErr("dob is required");
        valid = false;
      }
    }

   if(valid) setStep(step + 1);
  }

  function handleBack(){
    setStep(step-1);
  }
  return (
    <div className='container'>
      {step === 1 &&
      <div className='input-box'>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        {nameErr && <p>{nameErr}</p>}
        <button onClick={handleNext}>Next</button>
      </div>
      }

   {step === 2 &&
      <div className='input-box'>
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {emailErr && <p>{emailErr}</p>}
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
      }

   {step === 3 &&
      <div className='input-box'>
        <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
        {cityErr && <p>{cityErr}</p>}
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
      }

   {step === 4 &&
      <div className='input-box'>
        <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        {phoneErr && <p>{phoneErr}</p>}
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
      }

    {step === 5 &&
      <div className='input-box'>
        <input type="date" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
        {dobErr && <p>{dobErr}</p>}
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Submit</button>
      </div>
      }

   {step > 5 &&
      <div className='result-box'>
        <h2>User Details</h2>
      <div> <label htmlFor="">Name:</label> <p>{name}</p></div>
      <div> <label htmlFor="">Email:</label> <p>{email}</p></div>
      <div> <label htmlFor="">City:</label> <p>{city}</p></div>
      <div> <label htmlFor="">Phone:</label> <p>{phone}</p></div>
    <div>   <label htmlFor="">DOB:</label> <p>{dob}</p></div>
      </div>
      }
    </div>
  )
}

export default App

