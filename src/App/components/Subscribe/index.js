import React from 'react'
import Input from '../Input'
function Subscribe() {
  return (
    <div className='py-16 mb-16 container mx-auto px-5 flex items-center justify-center flex-col'>
        <h1 className='font-[Poppins] text-2xl font-[400] mb-4'>join our newsletter for $10 off</h1>
        <p className='w-full md:text-center md:w-[50%] font-[poppins] text-sm text-gray-500 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat similique consequatur eum iste laborum ratione optio placeat reiciendis molestias veritatis.</p>
         <Input text="subscribe"/> 
    </div>
  )
}

export default Subscribe