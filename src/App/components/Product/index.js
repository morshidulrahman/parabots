import React from 'react'
import ProductCard from './ProductCard'
function Product() {
  return (
    <div className='container mx-auto px-5 py-10'>
        <div className='flex md:justify-between md:items-center mb-7 py-5 flex-col md:flex-row'>
        <h1 className='text-3xl md:text-3xl capitalize mb-5 font-bold'>shop by product</h1>
        <p className='font-[Poppins] text-sm text-gray-500 md:w-2/5'>we are solving the biggest problem in furniture.you can easly search for what product you want.
        </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 sm:grid-cols-2 items-center'>
         <ProductCard 
          img="https://i5.walmartimages.com/asr/0cef621d-cf67-4ede-ae02-d04355262c14_1.e36712c8e9b34be8559f8613b3f601a7.jpeg"
          title="table"
         />
          <ProductCard 
          img="https://ii1.pepperfry.com/media/catalog/product/s/y/800x880/sylvia-iconic-chair-in-grey-colour-by-star-india-sylvia-iconic-chair-in-grey-colour-by-star-india-pruzwg.jpg"
          title="chair"
         />
          <ProductCard 
          img="https://cdn.shopify.com/s/files/1/0044/1208/0217/products/3INTERIOROLIF_GOA3CSSSRB_900x.jpg?v=1638859267"
          title="sofas"
         />
          <ProductCard 
          img="https://cdn.shopify.com/s/files/1/2135/0257/products/james-65cm-bar-stool-with-black-timber-seat-black-frame-bar-stool-new-home-core-585894.jpg?v=1569371440"
          title="stool"
         />
         
        </div>
    </div>
  )
}

export default Product