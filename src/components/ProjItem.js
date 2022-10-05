import React from 'react'

function ProjItem({data}) {
  return (
    <div key={data.id} className='flex flex-col item-center text-center '>
       <div className='mb-8'>
        <img src={data.image} alt=''/>
       </div>
       <p>{data.name}</p>
       <h3>{data.title}</h3>
    </div>
  )
}

export default ProjItem