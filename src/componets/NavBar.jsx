import React from 'react';
import logo from "../assets/logo.jpg"

const NavBar = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row gap-90 ml-5'>
        <img className='w-full max-w-[200px] h-20' src={logo} />
        <div className='mt-7'>
          <ul className='flex flex-row gap-12'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <div  className='ml-20'>
          <button className='bg-blue-600  px-8 py-3 rounded-2xl  hidden md:block font-bold text-white cursor-pointer mt-4'>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar