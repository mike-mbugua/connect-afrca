import React from 'react'
import './ViewBooking.css'
import Logo from './../../images/Logo.png'
import Footer from '../footer/Footer'
function ViewBooking() {
return (
    <div className='mybooking-container'>
        
        <div className='login'>
        <div className='login-info'>
            <img src={Logo} alt="" /> 
            <div >Connect Africa</div>
        </div>
            <form action="">
                <label htmlFor="">Email</label>
                <input type="email" />
                <label htmlFor="">Secret Code</label>
                <input type="password" />
                <button className='view'>View </button>
                <p>Have not booked yet  ?<a href="/booking">click here</a></p>
            </form>
        </div>
        <Footer/>
    </div>
)
}

export default ViewBooking