import React from 'react'
import JavaScriptImage from '../..//assets/skills/logo2.png'

function Footer() {
  return (
    <footer className='bg-white py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col  space-y-6  items-center justify-between '>

          <div className='imageProfile'>
            <img src={JavaScriptImage} alt='' />
          </div>
          <div className='flex space-x-10 items-center justify-center  '>
            <a href='https://www.linkedin.com/in/tabitha-muriithi-a8b7b0225/'>
              <i className="socials fa fa-linkedin" ></i>
              </a>

            <a href='https://github.com/SheeTabz'>
              <i className="socials fa fa-github" ></i>
              </a>

            <a href=''><i className="socials fa fa-instagram" ></i></a>

            <a href=''><i className="socials fa fa-whatsapp" ></i></a>
            
          </div>
          <p>&copy; All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer