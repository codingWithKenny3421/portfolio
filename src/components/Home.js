import React from 'react'
import Me from '../assets/portfolioImg.png'
import cssLogo from '../assets/cssLogo.png'
import htmlLogo from '../assets/htmlLogo.png'
import jsLogo from '../assets/jsLogo.png'
import pythonLogo from '../assets/python.png'
import './Home.css'
import { useRef, useEffect } from 'react'
import { init } from 'ityped'
const Home = () => {
    const occupationRef = useRef()
    useEffect(() => {
    //    console.log(occupationRef)
    init(occupationRef.current, {
        showCursor:true,
        backDelay:1000,
        backSpeed:100,
        typeSpeed:150,
        strings: ['9th Grader', 'Youtuber', 'Coder']
    })
    }, [])
    return (
        <div>
            <div className = 'home' id = 'home'>
                <div className = 'wrapper'>
                    <div className = 'leftHome'>
                        {/* <img src = {Me}></img> */}
                        <h1>This is the left side</h1>
                    </div>
                    <div className = 'rightHome'>
                    <span className = 'greeting'>Hi There, I'm</span>
                     <h1 className = 'fullName'>Kenny Malis</h1>
                     <button className = 'slapButton'>Slap Me</button>
                     <br/>
                     <span className = 'occupation' ref = {occupationRef}></span>
                    </div>
                     
                </div>
            </div>
            
        </div>
    )
}

export default Home
