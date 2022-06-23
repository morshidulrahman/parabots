import React from 'react'

function CustomerCard({img,profile,adress,icon,desc}) {
  return (
    <div className='w-full sm:w-11/12 md:w-[90%] border shadow-md rounded-sm p-5'>
        <span className='mb-5'>{icon}</span>
        <p className='font-[Poppins] text-sm  text-gray-500 py-5'>{desc}</p>
        <div className='flex items-center'>
            <img src={img} alt="man" className='w-10 h-10 rounded-full object-cover' loading='lazy'/>
            <div className='ml-5'>
                <h1 className='text-sm font-bold capitalize'>{profile}</h1>
                <p className='text-xs font-[poppins] text-gray-500 capitalize'>{adress}</p>
            </div>
        </div>
    </div>
  )
}

export default CustomerCard