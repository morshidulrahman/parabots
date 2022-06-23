import React from 'react'
import Button from '../Button'
function Input({text}) {
  return (
    <>
      <div className='w-11/12 md:w-96 mt-3 flex z-50'>
       <input className="py-2 border-2 w-full border-gray-900  focus:outline-none placeholder:px-3 text-xs font-[Poppins] font-[100]" placeholder="Search your photo here..." type="text" name="search"/>
      <Button title={text}/>
       </div>
    </>
  )
}

export default Input