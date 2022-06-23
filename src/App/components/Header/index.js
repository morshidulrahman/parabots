import React, { useState } from 'react'
import { BsPersonFill } from 'react-icons/bs';
import { FaToolbox } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
function Header() {
  const[click,setclick]=useState(false)
  const menuclick=()=>{
    setclick(!click)
  }
  return (
    <div className='container mx-auto py-5 px-3'>
         <div className='flex items-center justify-between'>
             <div>
                <h1 className='font-bold text-2xl'>Parabot</h1>
             </div>
             <div className='space-x-7 text-xl hidden md:flex'>
             <a href="#">Home</a>           
             <a href="#">Products</a>           
             <a href="#">Collections</a>
             </div>
             <div className='flex items-center space-x-6 cursor-pointer'>
                <span><FaToolbox size={20}/></span>
                <span><BsPersonFill size={20}/></span>
                <span className='block md:hidden ml-2'  onClick={()=>menuclick()}><AiOutlineMenu size={20}/></span>
             </div>
         </div>
        {click &&(
          <div className='text-center w-full flex flex-col gap-4 md:hidden origin-top duration-500 '>
          <a href="#">Home</a>           
           <a href="#">Products</a>           
           <a href="#">Collections</a>
      </div>
        )}
    </div>
  )
}

export default Header