import React, { useState } from 'react'

import Input from '../Input'
function Hero() {
  const [banngerimg,setbannerimg]=useState({
    one:true,
    two:false,
    three:false
  })
  const handledata=(data)=>{
    if(data==="one"){
      setbannerimg({
        one:true,
        two:false,
        three:false
      })
    }else if(data==="two"){
      setbannerimg({
        one:false,
        two:true,
        three:false
      })
    }else if(data==="three"){
      setbannerimg({
        one:false,
        two:false,
        three:true
      })
    }
  }
  return (
  <div className='bg-[#F8F8F8]'>
      <div className='flex items-center flex-col md:flex-row  md:justify-between container py-10 md:py-5 mx-auto gap-4 px-5 w-full  md:h-[70vh]'>
      <div className='md:w-2/6 w-full mx-auto z-50'>
      <div className=''>
      <h1 className='text-3xl font-bold'>
       Future <br/>
       of furniture
      </h1>
      <p className='py-3 text-sm font-[Poppins] font-[400] text-gray-500'>Find an elegant and luxurious interior designed by a proffessional interior designer</p>
      </div>
       <div className='z-10 w-full'>
        <Input/>
       </div>
      </div>
        <div className=' gap-3 z-0 w-full md:w-2/4 h-72 md:h-full md:flex flex mt-6 md:mt-0'>
            <img onMouseEnter={()=>handledata("one")}  
            className={`h-full rounded-sm object-cover  duration-500 ${banngerimg.one ? "w-2/3":"w-1/5"}`} src="https://s3-us-west-2.amazonaws.com/media.modloft.com/products/lifestyle-large/6328W-H314-FAJO-MRN_2.jpg" alt="furniutre" loading='lazy' />

          <img onMouseEnter={()=>handledata("two")}  
            className={` h-full rounded-sm object-cover  duration-500 ${banngerimg.two ? "w-2/3":"w-1/5"}`} src="http://cdn.home-designing.com/wp-content/uploads/2019/09/velvet-tufted-sofa-dark-grey-upholstery-for-classic-interiors.jpg" alt="furniutre" loading='lazy' />

            
          <img onMouseEnter={()=>handledata("three")}  
            className={` h-full rounded-sm object-cover  duration-500 ${banngerimg.three ? "w-2/3":"w-1/5"}`} src="https://static.dezeen.com/uploads/2022/03/kato-sofa-king-dezeen-showroom_dezeen_2364_col_0-852x625.jpg" alt="furniutre" loading='lazy' />
        </div>
    </div>
  </div>
  )
}

export default Hero