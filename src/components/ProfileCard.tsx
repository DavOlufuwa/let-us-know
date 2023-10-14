import roleFunc from "../utils/role";
import { Techie } from "../utils/types"

const ProfileCard = ({techieProfile}:{techieProfile: Techie}) => {
  
  const {name, specialization, githubUsername, twitterUsername, email, location, techStory} = techieProfile;
 
  return (
    <div className="text-white ">
      <div>
        <img src={`https://github.com/${githubUsername}.png`} alt="github profile image" className="rounded-3xl"/>
      </div>
      <h1>{name}</h1>
      <h2>{specialization} {roleFunc(specialization)}</h2>
      <div>
        <h3>How did I get into tech?</h3>
      </div>
      <p>
        {techStory}
      </p>
    </div>
  )
}

export default ProfileCard