import React from 'react'
import subs from '../assets/subs.png'

const Home_innerpagesix = () => {
  return (
    <div className='w-[110vw] h-[80vh] lg:mb-[2vh] mb-[70vh]  pt-[5vh] bg-white'>
        <div className='grid md:grid-cols-2 gap-6 max-w-[1240px] m-auto'>
            <div className='  md:items-start  w-full px-3 '>
                <img src={subs} alt="image" />

            </div>
            <div className='flex flex-col  justify-center mt-10 md:items-start  w-full px-8 '>
                <form action="">
                <h2 className='text-xl font-bold'>Subscribe Now</h2>
                <h3 className='text-lg font-semibold text-yellow-600'>to our Newsletter</h3>
                <p className='font-oswald mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae aliquid perspiciatis adipisci </p>

                <p className='font-oswald mt-3' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ad </p>

                <p className='font-oswald mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi optio saepe quam a eum consequatur !</p>
                <div className='pt-4 '>
                <input type="name" placeholder='first name' className='w-[80%] px-4 border text-gray-500 bg-[#f9f9f9] rounded-lg ' />
                <input type="name" placeholder='Last name' className='w-[80%] mt-2 px-4 border text-gray-500 bg-gray-100 rounded-lg ' />
                <input type="email" placeholder='Email' className='w-[80%] px-4 border text-gray-500 bg-gray-100 rounded-lg mt-2' /></div>
                <button className='mt-5 lg:w-[15vw] border rounded-lg w-[30vw] text-white bg-yellow-600'>subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Home_innerpagesix