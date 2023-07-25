import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import aladumo from '../assets/aladumo.jpg'
import brillant from '../assets/brillant.jpg'
import cedarwood from '../assets/cedarwood.png'
import crestforth from '../assets/crestforth.jpg'
import masterbuilder from '../assets/masterbuilder.png'
import IrisfieldLogo from '../assets/Irisfield-Logo.png'
import newgruen from '../assets/NewGruen.jpg'
import shalomchild from '../assets/shalomchild.jpg'

const ImageSliders = () => {
 

  return (
    <div className=' w-[100%] pb-[4vh] p-2 '>
      <div className='text-center py-8'>
        <h1 className='text-3xl font-mono tracking-widest font-bold uppercase  text-[#B3850c]'>Trusted by over 30 schools</h1>
        </div>

       <Marquee pauseOnHover speed={45} className='scrollbar-hide '>
        <div className='flex gap-5 h-[100px]'>
      <img src={aladumo} alt="Moving Image "className='hover:scale-110 ease-in duration-200' />
      <img src={brillant} alt="Moving Image "className='hover:scale-110 ease-in duration-200' />
      <img src={cedarwood} alt="Moving Image "className='hover:scale-110 ease-in duration-200' />
      <img src={crestforth} alt="Moving Image "className='hover:scale-110 ease-in duration-200' />
      <img src={masterbuilder} alt="Moving Image "className='hover:scale-110 ease-in duration-200' />
      <img src={IrisfieldLogo} alt="Moving Image "className='hover:scale-110 ease-in duration-200' />
      <img src={shalomchild} alt="Moving Image "className='hover:scale-110 ease-in duration-200' />
      <img src={newgruen} alt="Moving Image "className='hover:scale-110 ease-in duration-200' />
      <img src={newgruen} alt="Moving Image "className='hover:scale-110 ease-in duration-200' />
      <img src={newgruen} alt="Moving Image "className='hover:scale-110 ease-in duration-200' />
      </div>
      </Marquee>

    </div>
    
    
  );
  }

export default ImageSliders

