import { useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Techie } from '../utils/types';
import { Link } from 'react-router-dom';
import roleFunc from '../utils/role';

const Carousels = ({techieList}: {techieList: Techie[]}) => {

  const [listQuery, setListQuery] = useState<String>("Frontend")
  const [currentList, setCurrentList] = useState<Techie[]>([])

  useMemo(() => {
    setCurrentList(techieList.filter(techie => techie.specialization.toLowerCase() === listQuery.toLowerCase()
    ))
  }, [listQuery, techieList])



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
          currentList.map((info) => (
            <Link 
              to={`/profile/${info.githubUsername}`} 
              key={uuidv4()} 
              state={{info}}
            >    
              <div className="relative  max-w-2xl transition-all hover:duration-700 h-40 hover:h-60 hover:cursor-pointer origin-bottom rounded-lg">
                <img src={`https://github.com/${info.githubUsername}.png`} alt={"github display picture"} className='w-full h-full object-cover rounded-2xl '/>
                <div className='absolute top-0  left-0 w-full h-full rounded-2xl text-xl p-2 font-extrabold text-white bg-[rgba(72,72,48,0.53)] hover:bg-primary hover:text-black duration-[0.7s] '>
                  <div className='h-full flex flex-col justify-between gap-5 py-5 px-3'>
                    <div>
                      <h2 className='font-balisong'>{info.name}</h2>
                      <p>{info.specialization} {roleFunc(info.specialization)}</p>
                    </div>
                    <p className='truncate ... font-normal whitespace-no-wrap'>
                      {info.techStory}
                    </p>
                    <p className='text-xs font-medium text-right'>Click to read their story</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Carousels