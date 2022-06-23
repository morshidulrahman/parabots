import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
function ContactBox() {
  return (
    <div className='font-[Poppins]'>
         <h1 className='text-xl capitalize font-[400] text-white'>contact us</h1>
         <ul className='py-4'>
            <li className='text-sm mb-5 text-gray-300 flex items-center'>
                <span className='mr-3'><BsFillTelephoneFill size={16}/></span> +266.7222.2417
            </li>
            <li className='text-sm mb-8 text-gray-300 flex items-center'>
                <span className='mr-3'><HiOutlineMail size={20}/></span>Hello@perabot.com
            </li>
            <li className='text-xs mb-2 text-gray-300 flex items-center'>
                <span className="mr-5 block"><FaFacebookF size={20}/></span>
                <span className="mr-5 block"><AiOutlineInstagram size={20}/></span>
                <span className="mr-5 block"><BsTwitter size={20}/></span>    
            </li>
          
         </ul>
    </div>
  )
}

export default ContactBox