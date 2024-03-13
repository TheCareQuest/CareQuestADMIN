import React, { useState, useEffect } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import './Styling/hopeseekerlist.css';

const HopeSeekerList = () => {
  const [hopeSeekers, setHopeSeekers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchHopeSeekers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/hopeSeekers');
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched hope seekers:', data.hopeSeekers); // Log the fetched data
        if (data && data.hopeSeekers) {
          setHopeSeekers(data.hopeSeekers);
          setLoading(false);
        } else {
          setError('No hope seekers found');
        }
      } else {
        setError('Failed to fetch hope seekers');
      }
    } catch (error) {
      console.error('Error fetching hope seekers:', error); // Log any error that occurs
      setError('Error fetching hope seekers');
    }
  };

  const handleVerifyAccount = async (username) => {
    try {
      const response = await fetch(`http://localhost:5000/api/hopeSeekers/${username}/verify`, {
        method: 'PUT'
      });
      if (response.ok) {
        // Hope seeker verified successfully
        fetchHopeSeekers(); // Refresh hope seekers list
      } else {
        setError('Failed to verify account');
      }
    } catch (error) {
      setError('Error verifying account');
    }
  };


  const handleCheckIBAN = () => {
    window.location.href = 'https://www.iban.com/iban-checker';
  };

  useEffect(() => {
    fetchHopeSeekers();
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <main className='main-container'>
        <div className="hope-seekers-container">
          <h1>Hope Seekers</h1>
          <button onClick={handleCheckIBAN}>Check IBAN</button>
          <div className="hope-seekers-list">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              hopeSeekers.map((seeker) => (
                <div key={seeker._id} className="hope-seeker-item">
                  <h2>Full Name: {seeker.first_name} {seeker.last_name}</h2>
                  <p>Username: {seeker.username}</p>
                  <p>Email: {seeker.email}</p>
                  <p>CNIC: {seeker.CNIC}</p>
                  <p>Verification Status: {seeker.verification_status ? 'Verified' : 'Not Verified'}</p>
                  {!seeker.verification_status && (
                    <button onClick={() => handleVerifyAccount(seeker.id)}>
                      Verify Account
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default HopeSeekerList;
