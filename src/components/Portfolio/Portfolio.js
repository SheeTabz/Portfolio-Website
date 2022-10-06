import React from 'react'
import Projects from './Projects'

function Portfolio() {
  return (
    <section id='projects' className='bg-dark min-h-[1400px] text-white'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='projects text-3xl lg:text-4xl 
            ont-medium lg:font-extrabold mb-5'>My Projects</h2>
            <p className=' text-lg text-paragraph mb-16 lg:mb-24 max-w-[550px]'>
            My skills on development and designing have been perfectly captured on some of my projects which bring out brave and bold interfaces that satisfy customer needs.
            </p>
            </div>
            <Projects/>
        </div>

    </section>
  )
}

export default Portfolio