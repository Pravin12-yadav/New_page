import React from 'react'
import NavBar from '../componets/NavBar'
import Slide from '../componets/Slide'
import Feature from '../componets/Feature'
import Offer from '../componets/Offer'
import Join from '../componets/Join'
import Choose from '../componets/Choose'
import Testimonial from '../componets/Testimonial'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Slide/>
        <Feature/>
        <Offer/>
        <Join/>
        <Choose/>
        <Testimonial/>
    </div>
  )
}

export default Home