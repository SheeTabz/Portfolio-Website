import React from 'react'

import Button from './Button'
function About() {
  return (
    <section className='aboutSection bg-dark text-white'>
      <div className=' container mx-auto'>
        <div className=' aboutImg z-40 flex flex-col xl:flex-row gap-30 py-40 '>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl '
            src='https://w0.peakpx.com/wallpaper/711/366/HD-wallpaper-laptop-screen-code-programming-thumbnail.jpg' />
          <div className='flex flex-col items center text-center lg:items-start lg:text-left ml-40 sm:mr-0'>
            <div className='flex flex-col'>
              <h2 className='about-h2 text-3xl text-white lg:text-4xl font-medium lg:font-extrabold mb-3 relative
                before:content-about before:absolute  before:opacity-40 before:-top-[2rem] before:hidden before:lg:block before:text-yellow '>Tabitha Muriithi</h2>
              <p className='mb-4 text-bright'>Full Stack Web Developer</p>
              <hr className='mb-8 opacity-4' />
              <p className='mb-8 '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              </p>
            </div>
            <Button name='Resume'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About