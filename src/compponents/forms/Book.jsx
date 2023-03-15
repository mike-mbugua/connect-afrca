import React from 'react'
import Footer from '../footer/Footer'
import './Book.css'
function Book() {
return (
    <div className='book-forms'>
        <div className="short-info">
            <p>Fill the form below to be able to book the visit.
            Your information is safe with us
            <br />
            </p>
        </div>
        <div className="twoforms">
                <form action="" className='form1'>
                    
                    <label htmlFor="">First Name</label>
                    <input type="text" />
                    <label htmlFor="">Email</label>
                    <input className='inputs' type="email" placeholder='example@gmail.com' />
                    <label htmlFor="">Type Of Visit</label>
                    <input type="text" /> 
                    <label htmlFor="">Number Of Adults</label>
                    <input type="text" />
                    <label htmlFor=""> Date of Arrival</label>
                    <input type="date" />
                    <textarea placeholder='Tell us something You would like us to know about you' name="" id="" cols="30" rows="10"></textarea>
        </form>
            
        <form action="">
            <label htmlFor="">Last Name</label>
            <input type="text" /> 
            <label htmlFor="">Phone Number</label>
            <input type="text" />
            <label htmlFor="">Type Of Experience</label>
            <input type="text" /> 
            <label htmlFor="">Number Of Children </label>
            <input type="text" />
            <label htmlFor="">Departure Date </label>
            <input type="date" />
            <label htmlFor="">Secret Code</label>
            <input type="password"  placeholder=' Do not Share it with anyone'/>
            <button className='book-btn'>Submit</button>
        </form>
        </div>
        <Footer/>
    </div>
)
}

export default Book