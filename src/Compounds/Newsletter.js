import { Input } from '@mui/material'
import React from 'react'

const Newsletter = () => {
  return (
    <div id='Campgains' className='bg-color p-20 space-y-6'>
      <div className='flex flex-col justify-center items-center  pt-10 pb-10'>
      <p className='text-4xl font-semibold'>Newsletter</p>
      <p className='text-gray-400 pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
      <p className='text-gray-400'>elit. Eget ac quis aliquam arcu lacus.</p>
      <div className=' space-y-8 space-x-3'>
      <input placeholder='Your email'className='fill'/>
      <button className='btn4 rounded-lg text-white hover:bg-white hover:text-pink-600 hover:shadow-2xl'>Subscribe</button>
      </div>
      </div>
    </div>
  )
}

export default Newsletter
