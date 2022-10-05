
import './App.css';
import About from './components/About';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
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
    <div className="" style={{height: '2000px'}}></div>
   </div>
  );
}

export default App;
