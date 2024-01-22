import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsJustify } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Header({ OpenSidebar, isLoggedIn, handleLogout }) {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleLogoutButtonClick = () => {
    // Show logout confirmation message
    setShowLogoutConfirmation(true);
  };

  const handleConfirmLogout = () => {
    // Confirm logout and perform logout logic
    handleLogout();

    // Hide logout confirmation message
    setShowLogoutConfirmation(false);

    // Redirect to the login page
    navigate('/login');
  };

  const handleCancelLogout = () => {
    // Cancel logout and hide logout confirmation message
    setShowLogoutConfirmation(false);
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-right'>
        {isLoggedIn && (
          <>
            <button className='logout-button' onClick={handleLogoutButtonClick}>
              Logout
            </button>
            {showLogoutConfirmation && (
              <div className='logout-confirmation'>
                <p>Are you sure you want to logout?</p>
                <button onClick={handleConfirmLogout}>Yes</button>
                <button onClick={handleCancelLogout}>No</button>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
