import { useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Techie } from '../utils/types';

const Carousels = ({techieList}: {techieList: Techie[]}) => {

  const [listQuery, setListQuery] = useState<String>("Frontend")
  const [currentList, setCurrentList] = useState<Techie[]>([])

  useMemo(() => {
    setCurrentList(techieList.filter(techie => techie.specialization.toLowerCase() === listQuery.toLowerCase()
    ))
  }, [listQuery])

  const role = (value:string): string => {
    switch (value) {
      case "Frontend":
        return "Engineer" 
      case "Backend":
        return "Engineer"
      case "Fullstack":
        return "Engineer"
      case "Data Science":
        return "Engineer"
      case "UI/UX":
        return "Designer"
      case "DevOps":
        return "Engineer"
      case "Cloud":
        return "Engineer"
      case "QA":
        return "Engineer"
      case "Cyber Security":
        return "Engineer"
      case "Data Analytics":
        return "Engineer"
      case "AI/ML":
        return "Engineer"
      default:
        return "Software Engineer"
    }
  }

  return (
    <div>
      <div className='flex gap-4 overflow-x-scroll'>
        {
          techieList.map(({specialization}) => (
            <div 
              className='cursor-pointer text-slate-300 border-2 border-slate-300 px-5 py-2 rounded-3xl duration-200 hover:text-black hover:border-black hover:bg-primary' key={uuidv4()}
              onClick={() => setListQuery(specialization)} 
            >
              {specialization}
            </div>
          ))
        }
      </div>
      <div className='grid grid-cols-2'>
        {
          currentList.map(({name, specialization, githubUsername}) => (
            <div key={uuidv4()} className="relative  transition-all hover:duration-700 h-40 hover:h-60 hover:cursor-pointer origin-bottom rounded-lg">
              <img src={`https://github.com/${githubUsername}.png`} alt={"github display picture"} className='w-full h-full object-cover rounded-2xl '/>
              <div className='absolute  top-0  left-0 w-full h-full rounded-lg text-xl p-2 font-extrabold text-white bg-[rgba(72,72,48,0.53)] ease-in-out hover:duration-900 hover:bg-primary hover:text-black  '>
                <div className='h-full flex flex-col justify-between py-5 z-30'>
                  <div>
                    <h2 className='font-balisong'>{name}</h2>
                    <p>{specialization} {role(specialization)}</p>
                  </div>
                  <p className='text-xs font-medium'>Read their story</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Carousels