import React from 'react'
import Heroimg from '../Images/t2PuBsfgkl__1_-removebg-preview (1) 1.png'
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='flex justify-between mt-20 pt-10'>
      <div className='flex flex-col justify-center items-center w-1/2 space-y-5 pt-30'>
        <p className='text-6xl font-bold'>Chase Your<br></br> Dream with us</p>
        <p className='text-gray-400 pr-10'>The harder you work for something, the greater<br></br> you’ll feel when you achieve it.</p>
        <div className='space-x-5 pr-10'>
           <button className='btn2 text-white rounded-lg hover:bg-white hover:text-pink-600 hover:shadow-2xl'>Apply Online</button>
           <button className='btn3 text-pink-600 rounded-lg hover:border-hidden hover:bg-pink-200 hover:text-white hover:shadow-2xl'>Loan Caclulator</button>
           <div className='flex space-x-4 items-center space-y-0 justify-around pt-60'>
           <p className='flex gap-3'><FiPhone size={20} color='deeppink'/> 16519</p>
           <ul className='flex space-x-4'>
            <li><FaFacebookF size={20} color='blue'/></li>
            <li><FaYoutube size={20} color='red'/></li>
            <li><FaLinkedin size={20} color='blue'/></li>
            <li><FaInstagram size={20} color='deeppink'/></li>
           </ul>
           </div>
        </div>
      </div>
      
     
      <div className='boxcol flex items-end  rounded-lg'> 
      <img className='' src={Heroimg} />
      </div>
    
    </div>
  )
}

export default Hero
