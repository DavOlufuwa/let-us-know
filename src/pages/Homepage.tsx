import Hero from '../components/Hero'
import Carousels from '../components/Carousels'
import ImageGallery from '../components/ImageGallery'
import useTechieList from '../utils/useTechieList'


const Homepage = () => {

  const {techies} = useTechieList()

  return (
    <div className='bg-black'>
      <Hero />
      <ImageGallery />
      <Carousels techieList={techies} />
    </div>
  )
}

export default Homepage