import React from 'react'
import {MdFitScreen, MdMoreTime, MdFolderCopy} from 'react-icons/md'
import {GiPoliceBadge} from 'react-icons/gi'
import p4 from '../assets/p4.jpg'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'


const Home_innerpagefour = () => {
  return (
    <div className='w-[100vw] mx-auto bg-white text-black my-5'>
        <div className='max-w-[1240px] mx-auto py-[20vh]'>
            <div className='text-center py-3 text-black'>
                <h1 className='lg:text-5xl text-[35px] font-bold py-10 font-sans'>why choose us?</h1>
                <p className='lg:text-2xl text-[25px]  font-sans mt-1'>we accelerate and support learning beyond the classroom Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quo aliquam sapiente nisi obcaecati praesentium quaerat, possimus commodi dicta nihil distinctio iure, velit eveniet. Nemo dolores eius praesentium sed alias!</p>

            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 px-2 pt-10 text-center gap-4'>

                <div className='text-center border  rounded-xl py-[3vh] shadow-xl'>
                    <img src={p4} alt="image" />
                </div>

                <div className='text-center border  rounded-xl translate-y-3/4 py-[3vh] shadow-xl'>
                <img src={p1} alt="image" />
                    
                </div>

                <div className='text-center border rounded-xl hover:translate-y-3 py-[3vh] shadow-xl'>
                <img src={p3} alt="image" />
                </div>

                <div className='text-center border  translate-y-3/4 rounded-xl py-[3vh] shadow-xl'>
                <img src={p2} alt="image" />
                </div>
                <h2>hello</h2>

                    
                


            </div>
        </div>
    </div>
  )
}

export default Home_innerpagefour