import React from 'react'
// import Button from '../Buttons/Button'
import { AnimationOnScroll } from 'react-animation-on-scroll';
function ProjItem({data}) {
  return (
    <AnimationOnScroll animateIn="animate__fadeInBottomLeft" duration={3} animateOnce={true}>
    <div key={data.id} className='  flex flex-col item-center   bg-cardColor h-[430px] rounded-xl'>
       <div className=' mb-4 flex items-center justify-center rounded-xl pt-3'>
        
        <img className=' ' src={data.image} alt=''/>
       </div>
       <div className='pl-10 flex flex-col justify-evenly pb-5'>

        <a href={data.imageUrl}>
        <button className='mb-2 development bg-bright w-[150px]' >Development</button>
        </a>
        
       <h3 className=' mb-2 font-extrabold'>{data.title}</h3>
       <p className='text-base text-gray-400'>{data.description}</p>
       {/* */}
            <a href={data.url} className='flex items-center '>
              <p className='font-bold'>Visit site</p>
              <i className="fa fa-arrow-right ml-2 visit"></i>
            </a>
       </div>
    </div>
    </AnimationOnScroll>
  )
}

export default ProjItem