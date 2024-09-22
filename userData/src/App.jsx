import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cityError, setCityError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [dobError, setDobError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  function handleNext() {
    let valid = true;

    // Clear previous error messages
    setNameError("");
    setEmailError("");
    setCityError("");
    setPhoneError("");
    setDobError("");

    if (step === 1) {
      if (!name.trim()) {
        setNameError("Name is required");
        valid = false;
      } else if (name.length <= 2) {
        setNameError("Please enter a valid name (more than 2 characters)");
        valid = false;
      }
    }

    if (step === 2) {
      if (!email.trim()) {
        setEmailError("Email is required");
        valid = false;
      } else if (!emailRegex.test(email)) {
        setEmailError("Please enter a valid Gmail address");
        valid = false;
      }
    }

    if (step === 3) {
      if (!city.trim()) {
        setCityError("City is required");
        valid = false;
      }
    }

    if (step === 4) {
      if (!phone.trim()) {
        setPhoneError("Phone is required");
        valid = false;
      }
    }

    if (step === 5) {
      if (!dob.trim()) {
        setDobError("Date of Birth is required");
        valid = false;
      }
    }

    if (valid) setStep(step + 1);
  }

  function handleBack() {
    setStep(step - 1);
  }

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {step === 1 && (
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p style={{ color: "red" }}>{nameError}</p>}
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {cityError && <p style={{ color: "red" }}>{cityError}</p>}
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <input
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {phoneError && <p style={{ color: "red" }}>{phoneError}</p>}
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 5 && (
        <div>
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          {dobError && <p style={{ color: "red" }}>{dobError}</p>}
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step > 5 && (
        <div>
          <h2>Submitted Data:</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>City:</strong> {city}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Date of Birth:</strong> {dob}</p>
          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
}

export default App;
