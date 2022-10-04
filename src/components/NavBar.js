import React from 'react'

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
        return <li className='text-text  hover:text-dark cursor-pointer'  key={index}>
          {data}
          </li>
       })}
    </ul>
  </nav>
  )
}

export default NavBar