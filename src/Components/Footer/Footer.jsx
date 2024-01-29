import React from 'react'
import './Footer.css'
import usmamLogo from '../Assest/usmamLogo.jpg'


export default function Footer() {
  return (
    <footer className="section-p1">
        <div className="col" id='ff'>
          <img className="logo" src={usmamLogo} alt=""/>
          <h4>Contact</h4>
           <p><strong>Address:</strong> Taroddant Rue,Bloc 1 Hay El Amal ait melloule</p>
          <p><strong>Phone:</strong>+212 540297538</p>
          <p><strong>Hours:</strong>09:00 - 18:00, Mon - Sat</p>
        <div className='follow'>
          <h4>Follow us</h4>
          <div className="icon"> 
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-pinterest"></i>    
          </div>
        </div>
        </div>
        <div className="col" id='fir'>
            <h4>Football</h4>
            <a href="/">Football Homepage</a>
            <a href="/">First Team</a>
            <a href="/">Women's Team</a>
            <a href="/">Academy</a>
            <a href="/">Tickets</a>
        </div>

        <div className="col" id='sec'>
            <h4>The Club</h4>
            <a href="/">About us</a>
            <a href="/">History</a>
            <a href="/">Sponsors</a>
            <a href="/">Fan clubs</a>
            <a href="/">Transparency</a>
        </div>
        <div className="col" id='thr'>
                <h4>About</h4>
                <a href="/">Shop</a>
                <a href="/">Delivery Information</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms & Conditions</a>
                <a href="/">Contact Us</a>
            
                {/* <p className='n'>© 2023, HTML CSS Ecommerce Template</p> */}
           
        </div>
        <div className="copy">
        <p className='n'>© 2023, HTML CSS Ecommerce Template</p>          
        </div>
        {/* <p className='n'>© 2023, HTML CSS Ecommerce Template</p> */}

    </footer>
  )
}
