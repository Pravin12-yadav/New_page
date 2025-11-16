import React from 'react'
import test1 from "../assets/test1.webp"
import test2 from "../assets/test2.avif"

const Testimonial = () => {
  return (
    <div className='w-full'>
      <div className='w-[1300px] mx-auto h-[350px] bg-gray-200 mt-10 p-5'>
        <p className='text-center text-2xl font-semibold mt-5'> What our Guests Say</p>
        <div className='flex gap-50 mt-10'>
          <div className='w-[300px] h-[200px] bg-white shadow-xl p-3'>
           <div className='flex gap-3 '>
             <img className='w-11 h-12 rounded-full'  src={test1}/>
             <div>
              <p className='font-semibold'>Sophia Kharter</p>
              <p className='text-sm text-gray-500'>Nov-15-2025</p>
             </div>
            </div>
            <div className='flex gap-2 mt-2'>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, molestiae.</p> 
          </div>
          <div className='w-[300px] h-[200px] bg-white shadow-xl p-3'>
           <div className='flex gap-3 '>
             <img className='w-11 h-12 rounded-full'  src={test2}/>
             <div>
              <p className='font-semibold'>Alex Kharter</p>
              <p className='text-sm text-gray-500'>Nov-15-2025</p>
             </div>
            </div>
            <div className='flex gap-2 mt-2'>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, molestiae.</p> 
          </div>
          <div className='w-[300px] h-[200px] bg-white shadow-xl p-3'>
           <div className='flex gap-3 '>
             <img className='w-11 h-12 rounded-full'  src={test2}/>
             <div>
              <p className='font-semibold'>Sophia Kharter</p>
              <p className='text-sm text-gray-500'>Nov-15-2025</p>
             </div>
            </div>
            <div className='flex gap-2 mt-2'>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
              <p className='text-blue-500'><i class="fa-solid fa-star"></i></p>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, molestiae.</p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial