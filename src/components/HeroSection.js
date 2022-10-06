import React from 'react'
import Button from './Button'

function HeroSection() {
  return (
    <section className=' lg:h-[85vh] bg-dark flex items-center text-white lg:bg-cover lg:gb-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden heroSection'>
      <div className='container mx-auto ' >
        <div className=" bubble flex item-center h-full pt-10">
          {/* left content */}

          <div className='leftSection flex-1 flex-col'>
            <h5 className='text-1g text-bright mb-[22px]'>Hey, I am Tabitha </h5>
            <h1 className='text-4xl text-white md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2 font-bold md:tracking-[-2px]'>
              I build Softwares & Design Web Interfaes</h1>
            <p className="text-text pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
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