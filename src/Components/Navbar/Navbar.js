import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
     <nav>
        <div className="nav-bar">
            <i className='bx bx-menu sidebarOpen' ></i>
            <span className="logo navLogo"><Link to="/">Punjab Ghar Ghar Rojgar</Link></span>
            <div className="menu">
                <div className="logo-toggle">
                    <span className="logo"><Link to="/">Punjab Ghar Ghar Rojgar</Link></span>
                    <i className='bx bx-x siderbarClose'></i>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Job List</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/rojgar">Rojgar Sathi</Link></li>
                </ul>
            </div>
            <div className="darkLight-searchBox">
                <div className="dark-light">
                    <i className='bx bx-moon moon'></i>
                    <i className='bx bx-sun sun'></i>
                </div>
                <div className="searchBox">
                   <div className="searchToggle">
                    <i className='bx bx-x cancel'></i>
                    <i className='bx bx-search search'></i>
                   </div>
                    <div className="search-field">
                        <input type="text" placeholder="Search..."/>
                        <i className='bx bx-search'></i>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
