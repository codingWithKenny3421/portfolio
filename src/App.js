import './index.css'
import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Home from './components/Home'
import AboutLeft from './components/AboutLeft'
import AboutRight from './components/AboutRight'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App () {
  const [dark, setDark] = useState(true)
  
  function toggleDarkMode(){
    setDark(!dark)
    console.log(dark ? 'dark mode is on' : 'dark mode off')
  }
 return(
   <div>
     <Header toggle = {dark}/>
     {/* <Button text = {'Toggle'} onClick = {toggleDarkMode}/> */}
     <div className="sections">
     <Home/>
     <AboutLeft/>
     <AboutRight/>
     <Projects/>
     <Contact/>
     </div>

   </div>
 )
}



export default App;
