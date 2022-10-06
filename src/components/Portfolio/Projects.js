import React, { useEffect, useState } from 'react'
import ProjItem from './ProjItem'
// import { projectData } from './data'
import {projectNavBar} from '../data'

function Projects() {
    const [item, setItem] = useState({name:'All'})
    const [projects, setProject] =useState([])
    const [isActive,setIsActive] = useState(0)
    
    

    useEffect(() => {
        fetch('https://sheetabz.github.io/porfolioServer/data.json')
        .then(response => response.json())
        .then(data => {
            const projectData = data.projectInfo
            if(item.name === 'All'){
                return setProject(projectData)
            }
            else{
                const updatedProjects =  projectData.filter(project => project.name === item.name);
                 return setProject(updatedProjects)
            }
        })
      
    },[item])

function handlesClick(e,index){
    let value = e.target.textContent
    setItem({name: value})
    setIsActive(index)
   console.log()
}

  return (
    <div>
    <nav className='mb-12 max-w-2xl mx-auto'>
       <ul className=' flex flex-col md:flex-row justify-evenly item-center text-white'>
        {projectNavBar.map((item,index) => {
            return <li onClick={(e) => handlesClick(e, index)}
            className={`${isActive === index ? 'active' : ''} navpro cursor-pointer capitalize m-4`}
            key={index}>{item.name}</li>
        })}
       </ul>
    </nav>
    <section className='grid lg:grid-cols-3 gap-12 lg:gap'>
        {projects.map(item => {
            return <ProjItem data={item} key={item.id} />
        })}
    </section>
    </div>
  )
}

export default Projects