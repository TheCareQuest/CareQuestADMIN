import React, { useState } from 'react';
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

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const navigate = useNavigate();
  const handleLogin = (username, password) => {
    // Replace the following condition with your actual authentication logic
    if (username === 'admincarequest' && password === 'admin123') {
      setLoggedIn(true);
      navigate('/home'); // Use navigate here
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
   
      <div className='grid-container'>
        <Routes>
          <Route
            path='/'
            element={isLoggedIn ? <Navigate to='/home' /> : <Navigate to='/login' />}
          />
          <Route
            path='/home'
            element={
              isLoggedIn ? (
                <>
                  <Header OpenSidebar={OpenSidebar} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                  <Home />
                </>
              ) : (
                <Navigate to='/login' />
              )
            }
          />
          <Route
            path='/login'
            element={<LoginPage onLogin={handleLogin} />}
          />
           <Route
            path='/add-endorsers'
            element={<AddEndorsers /> }
          />
           <Route
            path='/daccounts'
            element={<DeactivatedAccountsPage /> }
          />
            <Route
            path='/report'
            element={<Report/>}
          />
          <Route
            path='/hopeseekers'
            element={<HopeSeekerList/>}
          />
        </Routes>
      </div>
   
  );
}

export default App;
