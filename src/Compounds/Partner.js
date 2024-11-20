import React from 'react'
import PartnerImg1 from '../Images/Frame 1.png'
import PartnerImg2 from '../Images/Frame 14.png'
import PartnerImg3 from '../Images/image 4.png'
import PartnerImg4 from '../Images/Frame 15.png'
import plantImg from '../Images/Picture.png'
import { FaArrowRight } from "react-icons/fa6";

const Partner = () => {
  return (
    <div id='Corporate'>
    <div className='bg-color'>
      <div className='flex flex-col items-center pt-20 pb-10'>
      <p className='text-2xl'>BUSINESS PARTNERS</p>
      </div>

      <div className='flex flex-row justify-evenly p-10'>
        <img src={PartnerImg1} />
        <img src={PartnerImg2} />
        <img src={PartnerImg3} />
        <img src={PartnerImg4} />
      </div>
      </div>

      <div className='flex justify-evenly'>
        <img src={plantImg} />
        <div className='flex flex-col justify-center items-start w-1/4 space-y-7'>
        <p className='text-2xl font-semibold'>IPDC AT A GLANCE</p>
        <p className='text-sm'>IPDC Finance Limited (previously known as "Industrial Promotion and Development Company of Bangladesh Limited") is the first private sector financial institution of the country established in 1981 by a distinguished group of shareholders namely International Finance Corporation (IFC), USA, German Investment and Development Company (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED), Switzerland, Commonwealth Development Corporation (CDC), UK and the Government of Bangladesh</p>
        <p className='flex text-pink-600 items-center'>Read More<FaArrowRight /></p>
        </div>

      </div>
      

    </div>
  )
}

export default Partner
