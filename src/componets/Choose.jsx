import React from 'react'

const Choose = () => {
  return (
    <div className='w-full mt-10'>
      <p className='text-center font-semibold text-2xl '> Why Choose us</p>
      <div className='max-w-[1300px] mx-auto flex gap-30 mt-10'>
        <div className='w-[250px] h-[100px] shadow  rounded-xl text-center'>
          <div className='bg-gray-200 p-2 w-10 text-center ms-auto me-auto rounded-full mt-3'><i class="fa-solid fa-anchor"></i></div>
          <p className='font-semibold text-xl'>Secure Booking</p>
        </div>
         <div className='w-[250px] h-[100px] shadow  rounded-xl text-center'>
          <div className='bg-gray-200 p-2 w-10 text-center ms-auto me-auto rounded-full mt-3'><i class="fa-solid fa-house"></i></div>
          <p className='font-semibold text-xl'>Verified Homes</p>
        </div>
         <div className='w-[250px] h-[100px] shadow  rounded-xl text-center'>
          <div className='bg-gray-200 p-2 w-10 text-center ms-auto me-auto rounded-full mt-3'><i class="fa-solid fa-bell-concierge"></i></div>
          <p className='font-semibold text-xl'>24/7 Support</p>
        </div>
         <div className='w-[250px] h-[100px] shadow  rounded-xl text-center'>
          <div className='bg-gray-200 p-2 w-10 text-center ms-auto me-auto rounded-full mt-3 '><i class="fa-solid fa-bell-concierge"></i></div>
          <p className='font-semibold text-xl'>Best Price Gurantee</p>
        </div>
      </div>
    </div>
  )
}

export default Choose