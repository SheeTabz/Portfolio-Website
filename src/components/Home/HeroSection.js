import React from 'react'
import Button from '../Buttons/Button'
import Typical from 'react-typical'

function HeroSection() {
  return (
    <section id='home'  className=' lg:h-[85vh] bg-dark flex items-center text-white lg:bg-cover lg:gb-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden heroSection'>
      <div className='container mx-auto ' >
        <div className=" bubble flex item-center h-full pt-10">
          {/* left content */}

          <div className='leftSection flex-1 flex-col'>
            <h5 className='text-1g text-bright mb-[22px]'>
Hey, I am Tabitha
              </h5>
            <h1 className='text-4xl text-white md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2 font-bold md:tracking-[-2px]'>
              I am a 
              {" "}
               <Typical
             loop={Infinity}
             steps={[
             " Web Developer",2000,
             "Product Designer", 2000,
             "&Android Developer", 2000,
             ]}
             /></h1>
            <p className="text-text text-lg pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px]  text-center lg:text-left"> 
            Welcome to my world, Get to know more about my professional life
             </p>
            <Button name='View more'/>
          </div>
          {/* right content */}
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection