// DeactivatedAccountsPage.jsx
import React, { useState, useEffect } from 'react';
import './Styling/DeactivatedAccountsPage.css';
import Header from './header';
import Sidebar from './sidebar';

const DeactivatedAccountsPage = () => {
  const [deactivatedAccounts, setDeactivatedAccounts] = useState([]);
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState('');

  const sampleDeactivatedAccounts = [
    {
      id: 1,
      username: 'Sana',
      userType: 'Hope Seeker',
      dateDeactivated: '2024-01-15',
    },
    {
        id: 2,
        username: 'Amna123',
        userType: 'Care Provider',
        dateDeactivated: '2024-01-16',
      },
      {
        id: 3,
        username: 'Ahmed',
        userType: 'Hope Seeker',
        dateDeactivated: '2024-01-17',
      },
      {
        id: 4,
        username: 'ShafaqUser',
        userType: 'Care Provider',
        dateDeactivated: '2024-01-18',
      },
      {
        id: 5,
        username: 'AliUser',
        userType: 'Hope Seeker',
        dateDeactivated: '2024-01-19',
      },
  ];

  useEffect(() => {
    const filteredAccounts = sampleDeactivatedAccounts.filter(
      (account) => (filter ? account.userType === filter : true)
    );
    setDeactivatedAccounts(filteredAccounts);
  }, [filter]);

  const handleActivate = (accountId, username) => {
    console.log(`Activating account ${accountId}`);
    setMessage(`Account ${username} has been activated.`);

    // Additional logic for reactivating the account goes here

    // Clear the activation message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setMessage('');
    }, 2000);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount or re-render
  };

  return (
    <>
      <Header />
      <Sidebar />
      <main className='main-container'>
        <div className="deactivated-accounts-container">
          {message && (
            <div className="activation-message">
              <p>{message}</p>
            </div>
          )}
          <h1>Deactivated Accounts</h1>
          <div className="filter-container">
            <label htmlFor="userTypeFilter">Filter by User Type:</label>
            <select
              id="userTypeFilter"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <option value="">All</option>
              <option value="Hope Seeker">Hope Seeker</option>
              <option value="Care Provider">Care Provider</option>
            </select>
          </div>
          <div className="deactivated-accounts-list">
            {deactivatedAccounts.map((account) => (
              <div key={account.id} className="account-item">
                <p>Username: {account.username}</p>
                <p>User Type: {account.userType}</p>
                <p>Date Deactivated: {account.dateDeactivated}</p>
                <button
                  onClick={() => handleActivate(account.id, account.username)}
                >
                  Activate Account
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default DeactivatedAccountsPage;
