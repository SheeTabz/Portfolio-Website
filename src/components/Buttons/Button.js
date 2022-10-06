import React from 'react'

function Button({name}) {
  return (
    <button className='btn btn-md px-8 py-4 font-bold'>{name}
    <i className="fa fa-arrow-right ml-2"></i></button>
  )
}

export default Button