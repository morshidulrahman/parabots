import React from 'react'
import Button from '../../Button'
function ShopCard({className,img,title}) {
  return (
    <div className={className}>
         <img className='w-[400px]' src={img}alt="chair" loading='lazy'/>
       <div className='md:w-[50%] w-full'> 
          <h1 className='text-3xl font-bold mb-5 capitalize'>{title}</h1>
          <p className='font-[Poppins] text-sm  text-gray-500 leading-[1.6rem] mb-7'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
          </p>
           <Button title='Shop Now'/>
       </div>
    </div>
  )
}

export default ShopCard