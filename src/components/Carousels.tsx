import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Carousels = () => {
// fetch dataList
const myArray = [
  {
      name: "John",
      image: "image1.jpg",
      address: "123 Main St"
  },
  {
      name: "Jane",
      image: "image2.jpg",
      address: "456 Elm St"
  },
  {
      name: "Mike",
      image: "image3.jpg",
      address: "789 Oak St"
  },
  {
      name: "Sarah",
      image: "image4.jpg",
      address: "987 Pine St"
  }
];

  return (
    <div>
      <div>
        {
          
        }
      </div>
      <div className='grid grid-cols-2'>
        {
          myArray.map((item) => (
            <div key={uuidv4()} className="relative bg-[url(https://source.unsplash.com/EhTcC9sYXsw)] bg-cover bg-center bg-no-repeat transition-all hover:duration-300 h-40 hover:h-60 hover:cursor-pointer origin-bottom">
              <div className='absolute w-full h-full text-3xl font-extrabold text-white bg-[rgba(72,72,48,0.53)] hover:bg-[rgba(208,227,134,0.98)] hover:duration-300  hover:text-black'>
                <div className='z-10'>
                  <h2 className=''>{item.name}</h2>
                  <p>{item.address}</p>
                  <p className='text-xs mt-auto'>Read their story</p>
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