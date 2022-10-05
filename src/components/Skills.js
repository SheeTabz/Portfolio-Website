import React from 'react'
import JavaScriptImage from '../assets/skills/tailwind.png'

function Skills() {
 
  return (
    <section className='bg-cardColor py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-8 md:grid-flow-row gap-10'>
          <div className='flex items-center justify-center'>
          <div >
            <img src='data:image/png;base64,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'/>
          </div>
          <div>
            <img src={JavaScriptImage} alt='html'/>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills