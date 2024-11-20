import React from 'react'
import logo from '../Images/image-removebg-preview (10) 1.png'
import { IoSearchOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='flex justify-around mt-5'>
      <img src={logo} />
      <div className='pt-3'>
        <ul className='flex gap-20 text-sm'>
            <li><a href='#'>Retail</a></li>
            <li><a href='#SME'>SME</a></li>
            <li><a href='#Corporate'>Corporate</a></li>
            <li><a href='#About Us'>About Us </a></li>
            <li><a href='#Covid 19'>Covid 19</a></li>
            <li><a href='#Campgains'>Campgains</a></li>
        </ul>
      </div>
      <div className='flex space-x-12 pt-2'>
      <IoSearchOutline size={30} color='deeppink'/>
      <button className='btn text-white rounded-lg  hover:bg-white hover:text-pink-600 hover:shadow-2xl'>iSERVICE</button>
      </div>
    </div>
  )
}

export default Navbar
