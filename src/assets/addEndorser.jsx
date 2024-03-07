import React, { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import './Styling/addendorser.css';

const AddEndorser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (input) => {
    // Regular expression for the specified email format
    const emailRegex = /^[a-zA-Z0-9]+\.endorser@carequest\.com$/;
    return emailRegex.test(input);
  };
  const handleAddEndorser = async () => {
    try {
      // Validate email before making the API call
      if (!validateEmail(email)) {
        setErrorMessage('Error: Please enter a valid email address.');
        return;
      }
  
      const response = await fetch('http://localhost:5000/api/endorsers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        setSuccessMessage('Trust endorser added successfully!');
        setErrorMessage(''); // Clear any previous error message
        setEmail(''); // Reset email field
        setPassword(''); // Reset password field
      } else {
        const data = await response.json();
        if (data.errorCode === 'DUPLICATE_EMAIL') {
          setErrorMessage('Error: This email is already in use.');
        } else {
          setErrorMessage(`Error: ${data.message}`);
        }
        setSuccessMessage('');
      }
  
      // Clear messages after 2 seconds
      setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 2000);
    } catch (error) {
      console.error(error);
      setSuccessMessage('');
      setErrorMessage('Error adding trust endorser');
    }
  };
  

  return (
    <>
      <Header />
      <Sidebar />
      <main className='main-container'>
        <div className="add-endorser-container">
          <h2>Add Trust Endorser</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="anyname.endorser@carequest.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleAddEndorser}>Add Endorser</button>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </main>
    </>
  );
};

export default AddEndorser;
