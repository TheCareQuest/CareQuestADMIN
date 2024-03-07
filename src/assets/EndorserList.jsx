import React, { useState, useEffect } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import './Styling/endorserList.css'; 

const EndorsersList = () => {
  const [endorsers, setEndorsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [updatedEndorser, setUpdatedEndorser] = useState({});

  const fetchEndorsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/endorsers');
      if (response.ok) {
        const data = await response.json();
        if (data && data.endorsers) {
          setEndorsers(data.endorsers);
          setLoading(false);
        } else {
          setError('No endorsers found');
        }
      } else {
        setError('Failed to fetch endorsers');
      }
    } catch (error) {
      setError('Error fetching endorsers');
    }
  };

  useEffect(() => {
    fetchEndorsers();
  }, []);

  const deactivateEndorser = async (endorserEmail) => {
    try {
      const response = await fetch(`http://localhost:5000/api/endorsers/${endorserEmail}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setEndorsers(endorsers.filter(endorser => endorser.email !== endorserEmail));
      } else {
        const errorMessage = await response.text();
        console.error('Failed to deactivate endorser:', errorMessage);
        setError('Failed to deactivate endorser');
      }
    } catch (error) {
      console.error('Error deactivating endorser:', error);
      setError('Error deactivating endorser');
    }
  };

  const handleEdit = (endorser) => {
    setEditMode(true);
    setUpdatedEndorser(endorser);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/endorsers/${updatedEndorser.email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEndorser),
      });
      if (response.ok) {
        setEditMode(false);
        setUpdatedEndorser({});
        fetchEndorsers(); // Fetch updated endorsers
      } else {
        const errorMessage = await response.text();
        console.error('Failed to update endorser:', errorMessage);
        setError('Failed to update endorser');
      }
    } catch (error) {
      console.error('Error updating endorser:', error);
      setError('Error updating endorser');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEndorser({ ...updatedEndorser, [name]: value });
  };

  return (
    <>
      <Header />
      <Sidebar />
      <main className='main-container'>
        <div className="endorsers-container">
          {error && <p className="error-message">{error}</p>}
          <h2>Endorsers List</h2>
          {loading ? (
            <p className="loading-message">Loading...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {endorsers.map(endorser => (
                  <tr key={endorser.email}>
                    <td>
  {editMode && updatedEndorser.email === endorser.email ? 
    <input 
      type="text" 
      name="email" 
      value={updatedEndorser.email} 
      onChange={handleInputChange} 
    /> 
    : 
    <span>{endorser.email}</span>
  }
</td>
                    <td>{editMode && updatedEndorser.email === endorser.email ? <input type="password" name="password" value={updatedEndorser.password} onChange={handleInputChange} /> : endorser.password}</td>
                    <td>
                      {editMode && updatedEndorser.email === endorser.email ? <button className="endorser-button " onClick={handleUpdate}>Update</button> : <button className="endorser-button " onClick={() => handleEdit(endorser)}>Edit</button>}
                      <button className="endorser-button s" onClick={() => deactivateEndorser(endorser.email)}>Deactivate</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </>
  );
};

export default EndorsersList;
