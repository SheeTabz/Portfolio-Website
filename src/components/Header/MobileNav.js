import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {HashLink as Link } from 'react-router-hash-link'

function MobileNav() {
  const navData =[ {
    name: 'Home',
    href : '#',
  },
  {
    name: 'About',
    href : '#about',
  },
  {
    name: 'SKills',
    href : '#sKills',
  },
  {
    name: 'Projects',
    href : '#projects',
  },
  {
    name: 'Contacts',
    href : '#contacts',
  }]

 const [isOpen, setIsOpen] = useState(false)

 //Frame option variants
 const circleVar ={
  hidden:{
    scale:0
  },
  visible:{
    scale:150,
    transition :{
      type: 'spring',
      stiffness: 160,
      damping: 60,
    }
  }
 }

 const listVar = {
  hidden:{
    opacity:0
  },visible:{
    opacity:1,
    transition:{
      delay: 0.1
    }
  },
 };
  return (
   <nav className='relative'>
    {/* icons */}
    <div onClick={()=>setIsOpen(true)} className='cursor-pointer text-text '>
    <i className="fa fa-bars w-8 h-8"></i>
    </div>
    <motion.div variants={circleVar} initial='hidden' animate={isOpen ? 'visible': 'hidden'} 
    className='w-4 h-4 rounded-full bg-bright  fixed top-0 right-0'></motion.div>
     <motion.ul variants={listVar} inital='hidden' animate={isOpen ? 'visible' : ''}
    className={`${isOpen ? 'right-0' : '-right-full'} motioned fixed top-0 bottom-0 w-full flex-col 
    justify-center items-center transition-all duration-300 overflow-hidden`}>

      {/* Close icon */}
      <div className='cursor-pointer absolute top-9 right-9' onClick={()=>setIsOpen(false)}>
      <i className="fa fa-close w-10 h-10"></i>
      </div>
      {navData.map((data,index)=>{
        return <li className='mb-8 cursor-pointer justify-center'  key={index}>
          <Link 
          to={data.href}
          smooth={true}
          duration={500}
          offset={-70}
          className='text-xl cursor-pointer'
          >{data.name}
          </Link>
          </li>
       })}
     </motion.ul>
   </nav>
  )
}

export default MobileNav