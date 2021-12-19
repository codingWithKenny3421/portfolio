import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
    
        <div className = 'contact' id='contact'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <div className = 'topSection'>
          <div className = 'leftContact'>
              <span>Contact me</span>
              <h2>Let's get in touch!</h2>
              <div className = 'socialIcons'>
              <i className="fab fa-discord"></i>
              <i className="fab fa-youtube"></i>
              <i class="fab fa-twitter"></i>
              </div>
          </div>
          <div className = 'rightContact'>

              <div className = 'formContainer'>
                  <div className = 'form'>
                  <input type='text' className = 'fullName' placeholder = 'Full Name'/> 
           <input type='email' className ='email' placeholder = 'Email' />  
          <textarea className = 'messageForm' placeholder = 'Send me any questions you may have :)'></textarea>
          <button className = 'sendButton' >Send <i class="fas fa-angle-right"></i></button>
                  </div>
              </div>
            </div>
          </div>
          <div className = 'bottomSection'>
          <p className = 'phoneNumber'>123-456-789</p>
          <p className = 'myEmail'>example@gmail.com</p>
          <p className = 'address'>Hendersonville NC 28739 USA</p>
          </div>

        </div>
    )
}

export default Contact
