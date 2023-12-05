import React, { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import './Styling/addendorser.css';

const AddEndorser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddEndorser = async () => {
    // Implement the logic to add endorser to the database (MERN stack)

    // For now, let's just display a success message
    setSuccessMessage('Trust endorser added successfully!');

    // Clear the success message after 2 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 2000);
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
        </div>
      </main>
    </>
  );
};

export default AddEndorser;
