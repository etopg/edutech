import React from 'react'

const Home_innerpagetwo = () => {
  return (
    <div className='w-screen mt-[35vh] lg:mt-[25vh]  '>
        <div className='max-w-[1240px]  mx-auto'>
            <div className='grid md:grid-cols-4 px-2 pt-[1vw] text-center gap-5'>
            
            <div className='border py-10 rounded-xl bg-slate-200 shadow-xl'>
            <p className='text-4xl font-bold text-gray-600 '>9,259+</p>
            <p className='text-gray-400 mt-2 font-bold'>Sucess stories</p>

          </div>

          <div className='border py-10 rounded-xl shadow-xl'>
            <p className='text-4xl font-bold text-indigo-600'>10,200+</p>
            <p className='text-gray-400 mt-2 font-bold'>Expert tutors</p>

          </div>
          <div className='border py-10 rounded-xl bg-orange-300   shadow-xl'>
            <p className='text-4xl font-bold  text-white'>50,850+</p>
            <p className='text-gray-400 mt-2 font-bold'>Hours tutored</p>

          </div>
          <div className='border py-10 rounded-xl shadow-xl'>
            <p className='text-4xl font-bold text-indigo-600'>80,800+</p>
            <p className='text-gray-400 mt-2 font-bold'>Active student</p>

          </div>

            </div>
        </div>
    </div>
  )
}

export default Home_innerpagetwo