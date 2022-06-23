import React from 'react'

function Button({title="Search"}) {
  return (
    <div className='bg-black py-2 px-5 block w-fit cursor-pointer'> 
        <p className='text-xs text-gray-300 font-[Poppins] capitalize'>{title}</p>
    </div>
  )
}

export default Button