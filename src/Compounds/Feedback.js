import React from 'react'
import circleImg from '../Images/Circle Layer.png'
import galleryImg from '../Images/Scenery.png'
import rocketImg from '../Images/Rocket.png'
import squareImg from '../Images/Object Ungroup.png'

const Feedback = () => {
  return (
    <div id='SME' className='m-20 pt-20'>
      <div className='flex flex-col items-center space-y-6'>
        <p className='text-4xl font-semibold'>Creating Extraordinary Customer Experience</p>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.</p>
      </div>


      <div className='flex flex-row justify-evenly pt-20 pl-20'>
      <div className='w-1/6 space-y-2'>
        <img src={circleImg}/>
        <p className='text-xl font-semibold'>Integrity</p>
        <p className='text-gray-400 text-sm w-1/2'>Displaying the highest level of Integrity in the way we conduct our business</p>
      </div>

      <div className='w-1/6 space-y-2'>
        <img src={galleryImg}/>
        <p className='text-xl font-semibold'>Demonstrate</p>
        <p className='text-gray-400 text-sm w-1/2'>Demonstrating a strong Will to Win in the market place</p>
      </div>

      <div className='w-1/6 space-y-2'>
        <img src={squareImg}/>
        <p className='text-xl font-semibold'>Diversity</p>
        <p className='text-gray-400 text-sm w-1/2'>Promoting Diversity in the work place and community</p>
      </div>
       
      <div className='w-1/6 space-y-2'>
        <img src={rocketImg}/>
        <p className='text-xl font-semibold'>Teamwork</p>
        <p className='text-gray-400 text-sm w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id </p>
      </div>

      </div>

      <div className='flex flex-row justify-evenly pt-20 pl-20'>
      <div className='w-1/6 space-y-2'>
        <img src={circleImg}/>
        <p className='text-xl font-semibold'>Integrity</p>
        <p className='text-gray-400 text-sm w-1/2'>Displaying the highest level of Integrity in the way we conduct our business</p>
      </div>

      <div className='w-1/6 space-y-2'>
        <img src={galleryImg}/>
        <p className='text-xl font-semibold'>Demonstrate</p>
        <p className='text-gray-400 text-sm w-1/2'>Demonstrating a strong Will to Win in the market place</p>
      </div>

      <div className='w-1/6 space-y-2'>
        <img src={squareImg}/>
        <p className='text-xl font-semibold'>Diversity</p>
        <p className='text-gray-400 text-sm w-1/2'>Promoting Diversity in the work place and community</p>
      </div>
       
      <div className='w-1/6 space-y-2'>
        <img src={rocketImg}/>
        <p className='text-xl font-semibold'>Teamwork</p>
        <p className='text-gray-400 text-sm w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id</p>
      </div>

      </div>


    </div>
     
  )
}

export default Feedback
