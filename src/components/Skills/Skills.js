import React, { useEffect, useState } from 'react'
import { skills} from '../data'

function Skills() {
  
  return (
    <section id='skills'  className='bg-cardColor py-12 text-white'>
      <div className='container mx-auto'>
        <h2 className='text-center font-extrabold text-2xl'>My Skills & Proeficiencies</h2>
        <div className='grid lg:grid-cols-6 grid-cols-3 md:grid-flow-row gap-10 mt-8'>
       
          {skills.map(skill => {
            return (< div className='imageSkill flex items-center justify-center'>
                   <img src={skill.image} alt={skill.name} />
                     
            </div>)
          })}


        </div>
      </div>
    </section>
  )
}

export default Skills