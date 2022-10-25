
import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contacts/Contact';
import Footer from './components/Contacts/Footer';
import Header from './components/Header/Header';
import HeroSection from './components/Home/HeroSection';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Skill from './components/Skill';
import Skills from './components/Skills/Skills';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';


function App() {
  const [theme,setTheme] = useState('light')
  function handleTheme(){
    if(theme === 'light'){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }

useEffect(()=> {
  document.body.className= theme
},[theme])

  return (
    
   <div className={`App ${theme}`}>
    <Header handleTheme={handleTheme} theme={theme}/>
   
   
    <HeroSection/>
    <Skill/>
    <About className=""/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    {/* <div className="" style={{height: '2000px'}}></div> */}
   </div>
  );
}

export default App;
