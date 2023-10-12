import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Carousels from '../components/Carousels'
import ImageGallery from '../components/ImageGallery'
import { Techie } from '../utils/types'

const Homepage = () => {

  const [techies, setTechies] = useState<Techie[]>([])
  
  useEffect(() => {
    const getTechieList = async (): Promise<void> => {
      const response = await fetch('dataList.json')
      const information = await response.json()
      const data = information.data
      setTechies(data)
    }
    getTechieList()
  }, [])


  return (
    <div className='bg-black'>
      <Hero />
      <ImageGallery />
      <Carousels techieList={techies} />
    </div>
  )
}

export default Homepage