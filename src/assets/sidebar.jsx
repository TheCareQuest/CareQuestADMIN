import React from 'react';
import {
  BsGrid1X2Fill,
  BsPersonPlusFill,
  BsPeople,
  BsPeopleFill,
  BsFileTextFill,
  BsShieldLockFill,
  BsLink, // Placeholder for a generic link icon
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          {/* Use the img tag with the src pointing to the public directory */}
          <img src='/logo.png' alt="Care Quest Logo" className='icon_header' style={{ width: '50px', height: '50px' }}/>
          Care Quest
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/home">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/add-endorsers">
            <BsPersonPlusFill className='icon' /> Add Endorsers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/careproviders">
            <BsPeople className='icon' /> Care Providers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/hopeseekers">
            <BsPeopleFill className='icon' /> Hope Seekers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/report">
            <BsFileTextFill className='icon' /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/daccounts">
            <BsShieldLockFill className='icon' /> Deactivated Accounts
          </a>
        </li>

        {/* Social Buzz Section */}
        <li className='sidebar-list-item'>
          <a href="/socailbuzz">
            <BsLink className='icon' /> Social Buzz
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
