import React from 'react'
import Hero from '../components/Hero'
import Carousels from '../components/Carousels'
import ImageGallery from '../components/ImageGallery'

const Homepage = () => {
  return (
    <div className='bg-black'>
      <Hero />
      <ImageGallery />
      <Carousels />
    </div>
  )
}

export default Homepage