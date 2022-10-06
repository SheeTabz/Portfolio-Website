import React from 'react'
import ServiceItem from './ServiceItem'

function Services() {
    return (
        <section id='services' className='section py-12 lg:py-32 bg-dark text-white'>
            <div className='container mx-auto'>
                <div className='services flex flex-col items-center text-center'>
                    <h2 className=' section-title text-3xl lg:text-4xl 
            ont-medium lg:font-extrabold mb-5 '>Services <span>I believe in</span></h2>
                    <p className='text-lg text-paragraph mb-16 lg:mb-24 max-w-[550px]'>
                    During my learning process as well as experience period I have come to gain some great prowess in specific fields that bring out my real aptitude
                    </p>
                </div>

                {/* Card items */}
                <div className='grid lg:grid-cols-3 gap-8'>

                    {/* REFACTOR THIS USING MAP */}
                    <ServiceItem>
                    <i class="fa fa-code" aria-hidden="true"></i>    
                    <i class="fa fa-gear fa-spin" ></i>
                    </ServiceItem>
                
                   
                </div>
            </div>
        </section>
    )
}

export default Services