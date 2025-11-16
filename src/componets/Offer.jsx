import React from 'react'
import offer1 from "../assets/offer1.webp"
import offer2 from "../assets/offer2.avif"
import feature3 from "../assets/feature3.webp";
import feature4 from "../assets/feature4.webp"

const Offer = () => {
  return (
     <div className='w-full h-[450px] max-w-[1300px] p-5 mx-auto bg-gray-200 rounded-xl  mt-10'>
          <h5 className='text-center text-3xl font-semibold'>Special offers</h5>
          <div className=' max-w-[1300px]  mx-auto mt-5 flex gap-10'>
            <div className='h-[300px] w-[300px]  shadow bg-white rounded-2xl'>
              <img className='w-full rounded-t-2xl h-[200px]' src={offer1}/>
              <div className='p-3'>
                <p className='font-semibold text-xl'>Eid offers</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
              <div className='h-[300px] w-[300px]  shadow bg-white rounded-2xl'>
              <img className='w-full rounded-t-2xl h-[200px]' src={offer2}/>
              <div className='p-3'>
                <p className='font-semibold text-xl'>Weekend Discount</p>
                <p>Lorem ipsum dolor sit amet.</p>
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

export default Offer