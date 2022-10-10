import React from 'react'

function Button({name}) {
  return (
    <button className='btn btn-md px-5 py-3 font-bold'>{name}
    <i className="fa fa-arrow-right ml-2"></i></button>
  )
}

export default Button