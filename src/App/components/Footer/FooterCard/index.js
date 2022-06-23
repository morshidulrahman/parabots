import React from 'react'

function FooterCard({title,desc1,desc2,desc3,desc4}) {
  return (
    <div className='font-[Poppins]'>
         <h1 className='text-xl capitalize font-[400] text-white'>{title}</h1>
         <ul className='py-4'>
            <li className='text-sm mb-4 text-gray-300'>{desc1}</li>
            <li className='text-sm mb-4 text-gray-300'>{desc2}</li>
            <li className='text-sm mb-4 text-gray-300'>{desc3}</li>
            <li className='text-sm mb-4 text-gray-300'>{desc4}</li>
         </ul>
    </div>
  )
}

export default FooterCard