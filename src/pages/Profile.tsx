import { Link, useLocation } from "react-router-dom"
import ProfileCard from "../components/ProfileCard"
import roleFunc from "../utils/role"
import useTechieList from "../utils/useTechieList"
import { v4 as uuidv4 } from "uuid"

const Profile = () => {

  const location = useLocation()

  const {info } = location.state
  const {techies} = useTechieList()
  
  return (
    <div className="bg-black min-h-[100svh]">
      <ProfileCard techieProfile={info} />
      <div>
        <div className="text-white">
          <div>
            Check out other stories from other {info.specialization} {roleFunc(info.specialization)}s
          </div>
          <div>
            {
              techies.filter(techie => techie.specialization === info.specialization).map((info) => (
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
      </div>
    </div>
  )
}

export default Profile