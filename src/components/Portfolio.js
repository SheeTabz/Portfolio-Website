import React from 'react'
import Projects from './Projects'

function Portfolio() {
  return (
    <section id='portfolio' className='bg-dark min-h-[1400px] text-white'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='text-3xl lg:text-4xl 
            ont-medium lg:font-extrabold mb-5'>My Projects</h2>
            <p className='text-base text-paragraph mb-16 lg:mb-24 max-w-[520px]'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
            </p>
            </div>
            <Projects/>
        </div>

    </section>
  )
}

export default Portfolio