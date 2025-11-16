import React from 'react'
import feature1 from "../assets/feature1.webp"
import feature2 from "../assets/feature2.jpg"
import feature3 from "../assets/feature3.webp";
import feature4 from "../assets/feature4.webp"

const Feature = () => {
  return (
    <div className='w-full'>
      <h5 className='text-center text-3xl font-bold mt-5 font-semibold '>Featured Properties</h5>
      <div className=' max-w-[1300px] mx-auto mt-5 flex gap-10'>
        <div className='h-[300px] w-[300px]  shadow bg-white rounded-2xl'>
          <img className='w-full rounded-t-2xl h-[200px]' src={feature1}/>
          <div className='p-3'>
            <p className='font-semibold text-xl'>Modern Villa in the Hills</p>
            <p>$200night 4.5 starts</p>
          </div>
        </div>
          <div className='h-[300px] w-[300px]  shadow bg-white rounded-2xl'>
          <img className='w-full rounded-t-2xl h-[200px]' src={feature2}/>
          <div className='p-3'>
            <p className='font-semibold text-xl'>Modern Villa in the Hills</p>
            <p>$200night 4.5 starts</p>
          </div>
        </div>
          <div className='h-[300px] w-[300px]  shadow bg-white rounded-2xl'>
          <img className='w-full rounded-t-2xl h-[200px]' src={feature3}/>
          <div className='p-3'>
            <p className='font-semibold text-xl'>Modern Villa in the Hills</p>
            <p>$200night 4.5 starts</p>
          </div>
        </div>
          <div className='h-[300px] w-[300px]  shadow bg-white rounded-2xl'>
          <img className='w-full rounded-t-2xl h-[200px]' src={feature4}/>
          <div className='p-3'>
            <p className='font-semibold text-xl'>Modern Villa in the Hills</p>
            <p>$200night 4.5 starts</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature