import React, {useRef} from 'react'
import './Navbar.css'
import Logo from './../../images/Logo.png'
import {FaTimes} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
function Navbar() {
    const navRef=useRef();
    const showNavbar =()=>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <header>
            <img className='logo' src={Logo} alt="" />
            <nav ref={navRef}>
                <a href="">About Us</a>
                <a href="">Experiences</a>
                <a href="">Visits</a>
                <a href="">Contacts</a>
                <a href="">Book Visit</a>
                <a href="">Bookings</a>
                <FaTimes onClick={showNavbar} className='nav-btn nav-close-btn'/>
            </nav>
            <FaBars onClick={showNavbar} className='nav-btn'/>
        </header>
        // <div>
        //     <header className='nav-container'>
        //     <div className='logo'>
        //         <img src={Logo} alt="" />
        //     </div>
        //     <nav ref={navRef} className='navlinks'>
        //         <li><a href="">About Us</a></li>
        //         <div className='dropdown'>
        //             <li><a href="">Experiences</a></li>
        //             <div className='dropdown-content'>
        //                 <a href="/all-in-one">All in one</a>
        //                 <a href="/culture">Culture</a>
        //                 <a href="/luxury">Luxury</a>
        //                 <a href="/wildlife">WildLife </a>
        //             </div>
        //         </div>
        //         <div className='dropdown'>
        //             <li><a href="">Visits</a></li>
        //             <div className='dropdown-content'>
        //                 <a href="#">One Country </a>
        //                 <a href="#">Multi country </a>
        //             </div>
        //         </div>
        //         <li><a href="">Contacts</a></li>
        //         <li><a href="/booking">Book Visit</a></li>
        //         <li><a href="/mybookings">My Bookings</a></li>
        //         <FaBars className='nav-btn' onClick={showNavbar}/>
        //     </nav>
        //     <FaTimes className='nav-btn nav-close-btn' onClick={showNavbar} />

        // </header>
        // </div>
    )
}

export default Navbar