import React from 'react'

function ProjItem({data}) {
  return (
    <div key={data.id} className='flex flex-col item-center text-center bg-cardColor rounded-xl h-[350px]'>
       <div className='mb-8 flex items-center justify-center rounded-xl pt-3'>
        <img className=' rounded-xl' src={data.image} alt=''/>
       </div>
       <h3 className='font-extrabold'>{data.title}</h3>
       <p className='text-base'>{data.description}</p>
    </div>
  )
}

export default ProjItem