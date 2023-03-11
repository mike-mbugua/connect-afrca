import React from 'react'
import './Homepage.css'
import Logo from './../../images/Logo.png'
function Homepage() {
    return (
    <div className='homepage-main'>
        <div className='nav-container'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='navlinks'>
                <li><a href="">About Us</a></li>
                <li><a href="">Experiences</a></li>
                <li><a href="">Visits</a></li>
                <li><a href="">Contacts</a></li>
                <li><a href="">Sign Up</a></li>
                <li><a href="">Login</a></li>
            </div>
        </div>
        <div className='home-info'>
        Travel to more than two countries in africa in one trip.We offer Experiences such as Wildlife,Luxury and Culture.
            Book with us
        </div>
    </div>

)
}

export default Homepage