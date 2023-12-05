// ReportPage.jsx

import React, { useState, useEffect } from 'react';
import './Styling/ReportPage.css'; 
import Header from './header';
import Sidebar from './sidebar';
const ReportPage = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      username: 'Sana',
      reportedBy: 'Aleena Khuamr',
      userType: 'Hope Seeker',
      summary: 'Inappropriate behavior',
      noOfReports: 3,
    },
    {
        id: 2,
        username: 'Amna123',
        reportedBy: 'Aleena Khuamr',
        userType: 'Care Provider',
        summary: 'Inappropriate behavior',
        noOfReports: 7,
      },{
        id: 3,
        username: 'Ahmed',
        reportedBy: 'Aleena Khuamr',
        userType: 'Hope Seeker',
        summary: 'Inappropriate behavior',
        noOfReports: 3,
      },{
        id: 4,
        username: 'Sana',
        reportedBy: 'Shafaq',
        userType: 'Care Provider',
        summary: 'Inappropriate behavior',
        noOfReports: 3,
      },{
        id: 5,
        username: 'Ali',
        reportedBy: 'Shafaq',
        userType: 'Hope Seeker',
        summary: 'Inappropriate behavior',
        noOfReports: 3,
      },
  ]);

  const [filter, setFilter] = useState(''); // Filter state (all, hope seeker, care provider)
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (blockedUsers.length > 0) {
      setMessage(`${blockedUsers.join(', ')} ${blockedUsers.length === 1 ? 'has' : 'have'} been blocked to access the Care Quest website.`);

      const timeoutId = setTimeout(() => {
        setMessage('');
        setBlockedUsers([]); // Clear the blocked users
      }, 2000); // Set the duration in milliseconds (e.g., 5000 milliseconds = 5 seconds)

      return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount or re-render
    }
  }, [blockedUsers]);
  const handleIgnore = (reportId) => {
    // Implement logic to handle "Ignore" button click
    console.log(`Ignoring report ${reportId}`);
  };

  const handleDeactivate = (reportId, username) => {
    // Implement logic to handle "Deactivate User" button click
    console.log(`Deactivating user based on report ${reportId}`);
    setBlockedUsers((prevBlockedUsers) => [...prevBlockedUsers, username]);
  };

  const filteredReports = reports.filter((report) =>
    filter ? report.userType === filter : true
  );

  return (
    <>
      <Header />
      <Sidebar />
      <main className='main-container'>
      <div className="report-container">
      {message && (
            <div className="blocked-users-message">
              <p>{message}</p>
            </div>
          )}
        <h1>Reports</h1>
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
        <div className="reports-list">
          {filteredReports.map((report) => (
            <div key={report.id} className="report-item">
              <p>Username: {report.username}</p>
              <p>Reported By: {report.reportedBy}</p>
              <p>User Type: {report.userType}</p>
              <p>Summary: {report.summary}</p>
              <p>No of Reports: {report.noOfReports}</p>
             
              <button
                onClick={() => handleDeactivate(report.id, report.username)}
              >
                Deactivate User
              </button>
            </div>
          ))}
        </div>
        
      </div></main>
    </>
  );
};

export default ReportPage;