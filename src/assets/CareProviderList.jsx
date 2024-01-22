// HopeSeekerList.jsx
import React, { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import './Styling/hopeseekerlist.css';

const CareProviderList = () => {
  const [hopeSeekers, setHopeSeekers] = useState([
    {
      id: 1,
      name: 'Anus Tariq',
      phone: '123-456-7890',
      iban: 'PK611234567891234567',
      location: 'Lahore, Pakistan',
      Campaigns: '3',
      isVerified: false,
    },
    {
      id: 2,
      name: 'Sana Khan',
      phone: '321-987-6543',
      iban: 'PK611234567891234567',
      location: 'Lahore, Pakistan',
      Campaigns: '5',
      isVerified: false,
    },
    {
      id: 3,
      name: 'Ahmed Ali',
      phone: '111-222-3333',
      iban: 'PK223344556677889900',
      location: 'Karachi, Pakistan',
      Campaigns: '3',
      isVerified: false,
    },
    // Add more hope seekers as needed
  ]);

  const handleVerifyAccount = (id) => {
    setHopeSeekers((prevHopeSeekers) =>
      prevHopeSeekers.map((seeker) =>
        seeker.id === id ? { ...seeker, isVerified: true } : seeker
      )
    );
  };

  const handleCheckIBAN = () => {
    // Redirect the user to the IBAN checker website
    window.location.href = 'https://www.iban.com/iban-checker';
  };

  return (
    <>
      <Header />
      <Sidebar />
      <main className='main-container'>
        <div className="hope-seekers-container">
          <h1>Hope Seekers</h1>
          <button onClick={handleCheckIBAN}>Check IBAN</button>
          <div className="hope-seekers-list">
            {hopeSeekers.map((seeker) => (
              <div key={seeker.id} className="hope-seeker-item">
                <h2>{seeker.name}</h2>
                <p>Phone: {seeker.phone}</p>
                <p>IBAN: {seeker.iban}</p>
                <p>Location: {seeker.location}</p>
                <p>Monthly Campaigns: {seeker.Campaigns}</p>
                <p>Status: {seeker.isVerified ? 'Verified' : 'Not Verified'}</p>
                {!seeker.isVerified && (
                  <button onClick={() => handleVerifyAccount(seeker.id)}>
                    Verify Account
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default CareProviderList;
