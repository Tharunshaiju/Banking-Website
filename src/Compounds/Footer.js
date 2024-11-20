import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";


const Footer = () => {
  return (
    <div className='flex space-x-6 p-20 justify-evenly'>
      <div className='w-1/6 space-y-5'>
        <p className='font-semibold'>About the company</p>
        <p className='text-gray-600 w-2/3'>Learn To Love Growth And Change And You Will Be A Success. Microsoft Patch </p>
        <ul className='flex space-x-3 pt-10'>
            <li><FaFacebookF size={20} color='blue'/></li>
            <li><FaYoutube size={20} color='red'/></li>
            <li><FaLinkedin size={20} color='blue'/></li>
            <li><FaInstagram size={20} color='deeppink'/></li>
           </ul>
      </div>

      <div className='space-y-5'>
        <p className='font-semibold'>Products</p>
        <ul className='space-y-3 text-gray-600'>
            <li>CSR Activities</li>
            <li>Green Banking</li>
            <li>News</li>
            <li>Ongoing Campgain</li>
            <li>Updates</li>
        </ul>
      </div>

      <div className='space-y-5'>
        <p className='font-semibold'>Products</p>
        <ul className='space-y-3 text-gray-600'>
            <li>CSR Activities</li>
            <li>Green Banking</li>
            <li>News</li>
            <li>Ongoing Campgain</li>
            <li>Updates</li>
        </ul>
      </div>

      <div className='space-y-5'>
        <p className='font-semibold'>Products</p>
        <ul className='space-y-3 text-gray-600'>
            <li>CSR Activities</li>
            <li>Green Banking</li>
            <li>News</li>
            <li>Ongoing Campgain</li>
            <li>Updates</li>
        </ul>
      </div>

      <div>
      <p className='flex gap-2 font-semibold'><FiPhone size={20} color='deeppink'/> 16519</p>
      </div>
    </div>
  )
}

export default Footer
