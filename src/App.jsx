import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './assets/header';
import Sidebar from './assets/sidebar';
import Home from './assets/home';
import LoginPage from './assets/loginPage';
import AddEndorsers from './assets/addEndorser';
import Report from './assets/Reports';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import DeactivatedAccountsPage from './assets/DeactivatedAccountsPage';
import HopeSeekerList from './assets/HopeSeekerList';
import SocialBuzz from './assets/SocailBuzz';
import CareProviderList from './assets/CareProviderList';
import EndorsersList from './assets/EndorserList';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check local storage for the login state when the component mounts
    const storedLoginState = localStorage.getItem('isLoggedIn');
    console.log('Stored login state:', storedLoginState);

    if (storedLoginState) {
      setLoggedIn(true);
    }
  }, []);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleLogin = (username, password) => {
    // Replace the following condition with your actual authentication logic
    if (username === 'admincarequest' && password === 'admin123') {
      setLoggedIn(true);
      // Store the login state in local storage
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/adminhome'); // Redirect to the home page after successful login
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    // Clear the login state from local storage
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false);
  };

  return (
    <div className='grid-container'>
      <Routes>
        <Route
          path='/'
          element={isLoggedIn ? <Navigate to='/adminhome' /> : <Navigate to='/adminlogin' />}
        />
        <Route
          path='/adminhome'
          element={
            isLoggedIn ? (
              <>
                <Header OpenSidebar={OpenSidebar} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                <Home />
              </>
            ) : (
              <Navigate to='/adminlogin' />
            )
          }
        />
        <Route path='/adminlogin' element={<LoginPage onLogin={handleLogin} />} />
        <Route path='/add-endorsers' element={<AddEndorsers />} />
        <Route path='/daccounts' element={<DeactivatedAccountsPage />} />
        <Route path='/report' element={<Report />} />
        <Route path='/hopeseekers' element={<HopeSeekerList />} />
        <Route path='/careproviders' element={<CareProviderList />} />
        <Route path='/socailbuzz' element={<SocialBuzz />} />
        <Route path='/manageEndorser' element={<EndorsersList />} />
      </Routes>
    </div>
  );
}

export default App;
