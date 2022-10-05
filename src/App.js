
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skill from './components/Skill';
import Skills from './components/Skills';

function App() {
  return (
    
   <div className=" ">
    <Header/>
    <HeroSection/>
    <Skill/>
    <About/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <div className="" style={{height: '2000px'}}></div>
   </div>
  );
}

export default App;
