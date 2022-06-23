import React from 'react'
import Button from '../../Button'
function ProductCard({img,title}) {
  return (
    <div className='relative w-full md:w-11/12 h-80 p-2 '>
        <img  className="w-full object-cover h-full" src={img} alt="table" loading='lazy' />
        <div className='absolute bottom-6 md:left-14 left-44'>
        <Button title={title}/>
        </div>
    </div>
  )
}

export default ProductCard