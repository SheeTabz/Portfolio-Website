import React from 'react'
import JavaScriptImage from '../assets/skills/tailwind.png'

function Footer() {
  return (
    <footer className='bg-white py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col  space-y-6  items-center justify-between '>
             
             <div className='imageProfile'>
                <img src={JavaScriptImage} alt='' />
             </div>
             <div className='flex space-x-10 items-center justify-center  '>
             <i className="socials fa fa-linkedin" ></i>
             <i className="socials fa fa-github" ></i>
             <i className="socials fa fa-instagram" ></i>
             <i className="socials fa fa-whatsapp" ></i>
             </div>
              <p>&copy; All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer