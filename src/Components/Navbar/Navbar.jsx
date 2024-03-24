import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import menu_icon from '../../assets/menu.png'
import logo from '../../assets/yt_logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={() => setSidebar(prev => prev===false?true:false)} src={menu_icon} alt="menu icon" /> 
            <Link to='/'> 
              <img className='logo' src={logo} alt="logo" />
            </Link>
        </div>

        <div className='nav-middle flex-div'>
            <div className="search-box flex-div">
                <input type="text" placeholder='Search' />
                <img src={search_icon} alt="search icon" />
            </div>
        </div>

        <div className='nav-right flex-div'>
        <img src={upload_icon} alt="upload icon" />
        <img src={notification_icon} alt=" notification icon" />
        <img src={profile_icon} className='user-icon' alt="profile icon" />
        </div>
    </nav>
  )
}

export default Navbar