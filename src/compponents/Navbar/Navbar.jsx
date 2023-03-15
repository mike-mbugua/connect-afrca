import React from 'react'
import './Navbar.css'
import Logo from './../../images/Logo.png'
function Navbar() {
    return (
        <div>
            <div className='nav-container'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='navlinks'>
                <li><a href="">About Us</a></li>
                <div className='dropdown'>
                    <li><a href="">Experiences</a></li>
                    <div className='dropdown-content'>
                        <a href="/all-in-one">All in one</a>
                        <a href="/culture">Culture</a>
                        <a href="/luxury">Luxury</a>
                        <a href="/wildlife">WildLife </a>
                    </div>
                </div>
                <div className='dropdown'>
                    <li><a href="">Visits</a></li>
                    <div className='dropdown-content'>
                        <a href="#">One Country </a>
                        <a href="#">Multi country </a>
                    </div>
                </div>
                <li><a href="">Contacts</a></li>
                <li><a href="/booking">Book Visit</a></li>
                <li><a href="/mybookings">My Bookings</a></li>
            </div>
        </div>
        </div>
    )
}

export default Navbar