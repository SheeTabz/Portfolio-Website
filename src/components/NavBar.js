import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
 
  const navData =[ {
    name: 'Home',
    href : '/',
  },
  {
    name: 'About',
    href : '/about',
  },
  {
    name: 'SKills',
    href : '/sKills',
  },
  {
    name: 'Projects',
    href : '/projects',
  },
  {
    name: 'Contacts',
    href : '/contacts',
  }]
  return (
  <nav>
    <ul className='flex space-x-8 capitalize text-[18px]'>
       {navData.map((data,index)=>{
        return <li className='  cursor-pointer'  key={index}>
          <Link 
          to={data.href}
          activeClass='active'
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className='transition-all duration-600'
          >{data.name}
          </Link>
          </li>
       })}
    </ul>
  </nav>
  )
}

export default NavBar