
import { useEffect, useState } from 'react';
import { Animator, ScrollContainer, ScrollPage, FadeIn, batch, Zoom, ZoomIn, Fade, Move, Sticky, MoveOut } from 'react-scroll-motion';
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
    {/* <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Zoom())}>
        
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={batch(Fade(), Move(), Sticky(), MoveOut)}>
       
        </Animator>
      </ScrollPage>
    </ScrollContainer> */}
   
    <HeroSection/>
    <Skill/>
    <About/>
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
