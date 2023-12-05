import React from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsMenuButtonWideFill, BsFillGearFill }
 from 'react-icons/bs';

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
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/add-endorsers">
                    <BsFillArchiveFill className='icon'/> Add Endorsers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Care Providers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Hope Seekers
                </a>
            </li>
           
            <li className='sidebar-list-item'>
                <a href="/report">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar