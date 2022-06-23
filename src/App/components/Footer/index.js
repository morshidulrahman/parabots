import React from 'react'
import FooterCard from './FooterCard'
import ContactBox from './Contactbox'
import Parabot from './Parabot'
function Footer() {
  return (
    <div className='bg-[#484543]'>
     <div className='container mx-auto px-5 flex flex-col md:flex-row justify-around pt-10 pb-5'>
      <Parabot/>
      <FooterCard
      title="About us"
      desc1="our story"
      desc2="Designer"
      desc3="craftmanship"
      desc4="sustainbillity"
      />
       <FooterCard
      title="Support"
      desc1="FAQ's"
      desc2="shiping & returns"
      desc3="care guide"
      desc4="warranty"
      />
      <ContactBox/>
     </div>
     <div className='flex items-center justify-center font-[Poppins] pb-4'>
         <span className='text-xs text-gray-300 block first-letter: border-r pr-2 border-red-50 mr-3 capitalize'>privacy policy</span>
         <span className='text-xs text-gray-300 block pr-2 border-r capitalize border-red-50 mr-3'>term of use</span>
         <span className='text-xs text-gray-300 capitalize'>california cod</span>
      </div>
    </div>
  )
}

export default Footer