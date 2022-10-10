import React from 'react'
import {serviceData} from '..//data'
function ServiceItem({children}) {
  return (
    <>
    {serviceData.map(service=>{
        return (
            <div className=' card  border-t-4 border-t-bright bg-cardColor p-6 rounded-xl'>
            <div className='text-bright rounded-sm w-12 h-12 flex justify-center items-center
            mb-10 text-[28px]'>
                {children}
            </div>
            <h4  className='text-xl font-extrabold mb-3'>{service.professional}</h4>
            <p className='text-[18px]'>{service.description}, </p>
        </div>
        )
    })}
    </>
  )
}

export default ServiceItem