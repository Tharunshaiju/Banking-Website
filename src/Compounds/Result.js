import React from 'react'

const Result = () => {
  return (
    <div id='About Us' className='mt-10 pb-20'>
      <div className='flex flex-col justify-center items-center pb-10'>
      <p className='text-4xl font-semibold p-5'>Our best results for the year</p>
      <p className='text-gray-400 pt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus </p>
      <p className='text-gray-400'>mattis vel feugiat erat tortor eleifend.</p>
      </div>
 

      <div className='flex flex-row justify-evenly pt-10 pb-5'>

        <div className='space-y-1 flex flex-col '>
            <p className='text-4xl font-bold effect'>57.6 bn</p>
            <p className='text-gray-400'>LOAN PORTFOLIO</p>
        </div>
        <div className='space-y-1 flex flex-col  effect'>
            <p className='text-4xl font-bold '>0.95%</p>
            <p className='text-gray-400'>CLASSIFIED LOAN PORTFOLIO</p>
        </div>
        <div className='space-y-1 flex flex-col  effect'>
            <p className='text-4xl font-bold '>388.5%</p>
            <p className='text-gray-400'>CLASSIFIED LOAN Coverage</p>
        </div>
        <div className='space-y-1 flex flex-col  effect'>
            <p className='text-4xl font-bold '>50.4 bn</p>
            <p className='text-gray-400'>Deposit</p>
        </div>

      </div>

      <div className='flex flex-row justify-evenly pr-10 pt-5'>

        <div className='space-y-1 flex flex-col  effect'>
            <p className='text-4xl font-bold'>6.1 bn</p>
            <p className='text-gray-400'>SHAREHOLDERS</p>
        </div>
        <div className='space-y-1 flex flex-col effect'>
            <p className='text-4xl font-bold'>18.51%</p>
            <p className='text-gray-400'>CACPITAL ADEQUACY RATIO</p>
        </div>
        <div className='space-y-1 flex flex-col effect'>
            <p className='text-4xl font-bold'>8.5 bn</p>
            <p className='text-gray-400'>MARKET CAPITALIZATION</p>
        </div>
        <div className='space-y-1 flex flex-col effect'>
            <p className='text-4xl font-bold'>AAA</p>
            <p className='text-gray-400'>CREDIT RATING</p>
        </div>
        
      </div>

    </div>
  )
}

export default Result
