import React from 'react'
import ShopCard from './ShopCard'
function Shop() {
  return ( 
    <div className='bg-[#F8F8F8] container mx-auto px-5 py-5 md:py-10 gap-10 md:gap-0'>
     <ShopCard className="flex justify-between py-6 md:flex-row flex-col"
     img="https://thetreemag.com/wp-content/uploads/2020/11/MG_3701-hi-res.jpg"
     title="the coffe table" 
     />
     <ShopCard 
     className="flex justify-between md:flex-row-reverse mt-20 flex-col gap-10 md:gap-0"
     img='https://images.hermanmiller.group/m/55e746bcca6aa93b/W-DWR_5031_100143633_walnut_d1.png?trim=auto&blend-mode=darken&blend=f8f8f8&trim-sd=1&bg=f8f8f8&auto=format&w=2000&h=1000&q=60'
     title="the selving system"
     />
    </div>
  )
}

export default Shop