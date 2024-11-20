import React from 'react'
import Img1 from '../Images/Image1.png'
import Img2 from '../Images/Image2.png'
import Img3 from '../Images/Image3.png'
import Img4 from '../Images/Image4.png'
import { FaCircleArrowRight } from "react-icons/fa6";

const Support = () => {
  return (
    <div id='Covid 19' className='mt-20 pt-10 pb-20'>
      <div className='flex flex-col justify-center items-center space-y-6'>
      <p className='text-4xl font-semibold'>Our Services</p>
      <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
 
 
      <div className='flex gap-20 '>

        <div className='flex flex-col pt-10 space-y-5'>
          <img src={Img1} />
          <div className='flex justify-between items-center'>
          <p className='w-1/2 font-semibold '>IPDC SAVING SCHEMES</p>
          <FaCircleArrowRight size={20} color='pink'/>
          </div>
        </div>

        <div className='flex flex-col pt-10 space-y-5'>
          <img src={Img2} />
          <div className='flex justify-between items-center'>
          <p className='w-1/2 font-semibold '>IPDC PERSONAL LOAN</p>
          <FaCircleArrowRight size={20} color='pink'/>
          </div>
        </div>
        
        <div className='flex flex-col  pt-10 space-y-5'>
          <img src={Img3} />
          <div className='flex justify-between items-center'>
          <p className='w-1/2 font-semibold '>IPDC Deposit SCHEMES</p>
          <FaCircleArrowRight size={20} color='pink'/>
          </div>
        </div>
        
        <div className='flex flex-col  pt-10 space-y-5'>
          <img src={Img4} />
          <div className='flex justify-between items-center'>
          <p className='w-1/2 font-semibold '>IPDC AUTO LOAN</p>
          <FaCircleArrowRight size={20} color='pink'/>
          </div>
        </div>


      </div>

      </div>
    </div>
  )
}

export default Support
