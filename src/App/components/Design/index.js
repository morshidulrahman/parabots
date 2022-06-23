import React from 'react'
 import Button from '../Button'
function Design() {
  return (
    <div className='container px-5 mx-auto py-7'>
       <div className='flex flex-col md:flex-row md:justify-between items-center'>
         <img src="https://c.neh.tw/thumb/f/720/5452460709642240.jpg" className='md:w-[45%] rounded-sm' alt="tabnle" loading='lazy'/>
         <div className='w-96 py-10 md:py-0'>
          <h1 className='text-3xl font-bold mb-5'>Discover the interior <br/>
           design of you dreams
          </h1>
          <p className='font-[Poppins] text-gray-500 mb-5 text-sm   leading-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit neque illo magnam, voluptas, quos cupiditate obcaecati recusandae temporibus nisi impedit at alias quae aliquam corrupti magni nam veniam. Tenetur.
          </p>
          <Button title="get inspired"/>
           <img src="https://cdn.homedit.com/wp-content/uploads/2015/01/floor-biscuit-piilow-around-japanese-table.jpg" alt="table" className='w-80 h-56 rounded-sm  ml-9 mt-10' />
         </div>
       </div>
    </div>
  )
}

export default Design