import React from 'react'
import './Projects.css'
import project5 from '../assets/project5.png'
import project9 from '../assets/project9.png'
import project10 from '../assets/project10.png'
import project11 from '../assets/project11.png'
const Projects = () => {

    return (
        <div className = 'projects' id = 'projects'>
            <img src = {project5}/>
            <img src = {project9}/>
            <img src = {project10}/>
            <img src = {project11}/>
        </div>
    )
}

export default Projects
