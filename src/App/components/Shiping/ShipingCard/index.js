import React from 'react'


function ShipingCard({title,icon,desc}) {
  return (
    <div className="w-full md:w-72 p-3 flex md:flex-row flex-col justify-center md:justify-between items-center md:py-5">
       <div className='md:mr-5'>
            <span className='bg-[#F8F8F8] items-center  p-3 rounded-full block'>
               {icon}
            </span>
       </div>
       <div className="mt-3 md:mt-0">
           <p className='font-bold text-xl md:text-[17px]  text-center md:text-start mb-1 md:mb-0'>{title}</p>
           <span className='font-[Poppins]  text-center md:text-start w-full md:w-60 block py-2 text-sm   text-gray-700'>
            {desc}
           </span>
       </div>
    </div>
  )
}

export default ShipingCard