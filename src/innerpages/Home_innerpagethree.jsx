import React from 'react'

import bg from '../assets/bg.jpg'


const Home_innerpagethree = () => {
  return (
    <div className='w-[100vw] mx-auto h-[100vh] mt-5 pt-[18vh] bg-gray-100 flex flex-col justify-between'>
        <h1 className='uppercase  text-center md:text-3xl font-bold'>Find the best tutor for your needs.</h1>
        <div className='grid md:grid-cols-2 gap-5 max-w-[1240px] m-auto'> 
            
            <div className='flex flex-col  justify-center mt-10 md:items-start  w-full px-8 bg-gray-100 border-1 rounded-xl shadow-xl'>
                
                <p className='font-oswald'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quisquam vero earum explicabo labore id vel suscipit itaque aliquam animi
                     reprehenderit minima deleniti laudantium sit, hic recusandae voluptatibus in facilis.
                      Voluptates?Lorem ipsum dolor sit amet !
                </p>

            </div>
            <div className=' mt-10 '>
                <img src={bg} alt="gif-image" className='border-2  rounded-xl shadow-xl ' />
            </div>
        </div>
    </div>
  )
}

export default Home_innerpagethree