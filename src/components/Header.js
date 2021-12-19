import React from 'react'
import { AiFillAndroid } from "react-icons/ai";
import './Header.css'

const Header = ({toggle}) => {
    function sendToYoutube() { 
        window.open('https://www.youtube.com/channel/UCWJV1nhZSRqS58vZQS2xP5A/featured')
    }
    return (
        <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <div className = {toggle ? 'header' : 'header lightMode'}>
                
                     <AiFillAndroid className ='androidIcon'/>
                     
                <div className = 'myName'>My Website</div>
                <div className = 'searchBarContainer'>
                <input className ='searchBar' placeholder = 'Search...' />
                {/* <i class="fas fa-search"></i> */}
                </div>
                <ul className='navLinks'>
                    <li><a href ='#home'>Home</a></li>
                    <li><a href ='#about'>About</a></li>
                    <li><a href ='#contact'>Contact</a></li>
                    <li><a href = '#projects'>Projects</a></li>
                </ul>
                
                <button onClick = {sendToYoutube} className='channelButton'><a class='ytLink' href ='https://www.youtube.com/channel/UCWJV1nhZSRqS58vZQS2xP5A/featured' target='_blank'>My Channel</a></button>
            </div>
            
        </div>
    )
}

export default Header
