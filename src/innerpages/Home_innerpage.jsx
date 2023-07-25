import React from 'react'
import video from '../assets/video.mp4'

const Home = () => {
  return (
    <div className='w-full mb-20 '>
        <div className='w-[110vw] lg:h-[100vh]  h-[100vh] bg-gray-600/30 absolute '>
        <video aria-hidden="true" controls autoPlay muted loop  
       className='w-[400vw] lg:h-[100vh]  h-[100vh] md:w-full  z-20 transition-opacity pointer visible
       opacity-100 object-cover mix-blend-overlay'>
        <source src={video} type="video/mp4"/>
      </video>
      

        </div>
        <div className='max-w-[1240px] lg:pt-[50vh] pt-[40vh] sm:pt-[20vh] md:pt-[60vh]  mx-auto text-white relative'>
        <div className='px-4 '> 
        <h1 className=' font-oswald text-center  font-bold text-white mt-5 pt-8 text-2xl lg:text-6xl '>STUDY CONFIDENTLY</h1>
        <h4 className='mt-1 font-bold lg:text-2xl text-center text-lg'>Enjoy our online tutoring with expert teachers.</h4>
        <p className='mt-0 text-center'>Private 1 on 1 tutoring with expert teachers, tailored to meet your needs.</p>
       
        </div>
        

        
        </div>
    </div>
  )
}

export default Home