import { v4 as uuidv4 } from 'uuid';

interface ImagesInterface{
  url: string,
  alt: string,
  content: string 
}


const ImageGallery = () => {

  const imageArray : ImagesInterface[] = [
    {
      url: "https://source.unsplash.com/SYTO3xs06fU",
      alt: "",
      content: "Entering the tech industry can be challenging due to ageism, lack of technical skills, confusion about where to start, cost of courses, and tech-bro culture. Overcoming these challenges requires developing technical skills, networking, considering alternative paths, being open to continuous learning, and finding a mentor."
    },
    {
      url: "https://source.unsplash.com/bzdhc5b3Bxs",
      alt: "", 
      content: "In an increasingly interconnected world, developers from diverse backgrounds must unite to share their experiences. Collaborative knowledge exchange not only fuels innovation but also fosters a sense of community. Together, we can solve complex problems, learn from one another, and build a stronger tech community."
    },
    {
      url: "https://source.unsplash.com/EhTcC9sYXsw",
      alt: "",
      content:"We hope this project becomes a beacon of support for everyone in the tech world. Whether you're a newcomer or a seasoned veteran, we're here to amplify your experiences and demonstrate that nobody is alone in their tech journey."
    },
    {
      url: "https://source.unsplash.com/people-sitting-on-chairs-watching-a-game-6vAjp0pscX0",
      alt: "",
      content:"Share your story of how you got into tech! Your experience can inspire others and help them overcome the challenges of entering and surviving in the industry. As Albert Einstein said, 'It has become appallingly obvious that our technology has exceeded our humanity.' Let's work together to make the tech industry more inclusive and diverse."
    },
  ]



  return (
    <div className="py-16 px-4">

      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
          imageArray.map(({url, alt, content}) => (
            <div key={uuidv4()} className='relative min-h-max'>
              <img src={url} alt={alt} className='rounded-2xl w-full h-full object-cover'/>
              <p className='absolute select-none top-0 pt-6 px-4 h-full w-full text-black/0 font-semibold duration-300 bg-[rgba(211,211,198,0.20)] rounded-2xl hover:text-black hover:duration-300 hover:bg-primary'>{content}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ImageGallery