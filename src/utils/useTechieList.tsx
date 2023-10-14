import { useEffect, useState } from 'react'
import { Techie } from './types'

const useTechieList = () => {

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



  return {
    techies
  }
}

export default useTechieList