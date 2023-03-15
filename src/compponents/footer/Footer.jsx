import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter} from  '@fortawesome/free-brands-svg-icons'
import { faPhone} from  '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-left">
          <h2>Contact us</h2>
        <div><FontAwesomeIcon icon={faInstagram}  size='2x' color='purple'/> <a href="#">Instagram</a></div>
        <div><FontAwesomeIcon icon={faTwitter}  size='2x' color='blue'/><a href="#">Twitter</a></div>
        <div><FontAwesomeIcon icon={faLinkedin} size='2x' color='rgba(53,172,206,255)'/> <a href="#">Connect Africa</a></div>
        <div><FontAwesomeIcon icon={faPhone} size='2x' color='black'/> +254702405186</div>
        <div><FontAwesomeIcon icon={faEnvelope} size='2x' color='rgba(53,172,206,255)'/> <a href="">hello@connectafrica.com</a></div>
        </div>
        <div className="footer-center">
          <h2>Our Services</h2>
          <div>
            <div><a href="#">One Country Visit</a></div>
            <div><a href="#">Multi Country Visit</a></div>
            <div><a href="/all-in-one">All in one Experience</a></div>
            <div><a href="/luxury">Luxury Experience</a></div>
            <div><a href="/culture">Cultural Experience</a></div>
            <div><a href="#">Wildlife Experience</a></div>
          </div>
          <div>
          </div>
        </div>
        <div className="footer-right">
          <h2>Countries we are in</h2>
          <div className='side1'>

          </div>
          <div className='side2'></div>
        </div>
    </div>
  )
}

export default Footer