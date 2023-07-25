import React, {useState} from 'react'
import{menu,Xicon} from '../component/Icons'
import{FaAccusoft} from 'react-icons/fa'
import{BsFacebook, BsTwitter, BsInstagram, BsTiktok, BsLinkedin, BsHandIndexThumbFill} from'react-icons/bs'
import lg from '../assets/lg.png'



const NavBar = () => {

    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav = ()=>{
      setNav(!nav);
      setLogo(!logo);

    }
    


  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
          <h1 onClick={handleNav} className={logo ? 'block' : 'block'}> <img src={lg} alt="logo" className='w-[50vh] my-2 mt-0' /></h1>
        </div>


        <ul className='hidden md:flex gap-4 text-white lg:text-[22px] font-mono'>
          <li>Home</li>
          <li>Tutors</li>
          <li>Pricing</li>
          <li>Business</li>
          <li>Cart</li>
        </ul>

        <div className='hidden md:flex text-white font-mono'>
          <div className='border-none text-white font-bold rounded-xl py-3 px-5 mr-4 text-xl font-mono'>Login</div>
          <div className='border-solid border-2 border-white bg-transparent rounded-xl px-5 py-3 mr-43 text-xl font-mono'>Register</div>
        </div>

        <div onClick={handleNav} className='md:hidden z-10'> 
        {!nav ? <h2>{menu}</h2> :  <h2>{Xicon}</h2>}

        </div>

        <div onClick={handleNav} className={nav ? 'absolute text-white left-0 top-0 w-full bg-black px-4 py-7 flex flex-col' : 'absolute left-[-120%]'}>
          <h1><img src={lg} alt="logo" className='w-[50vh]' /></h1>
          <ul className='font-mono'>
            
            <li className='border-b'>Home</li>
            <li className='border-b'>Tutors</li>
            <li className='border-b'>Pricing</li>
            <li className='border-b'>Business</li>
            <li className='border-b'>Cart</li>
            <div className='flex flex-col'>
              <button className='my-6 border-solid border-2 border-white bg-transparent rounded-xl'>Register</button>
              <button>Login</button>
            </div>
            <div className='flex justify-between my-6'>
              <BsFacebook/>
              <BsInstagram/>
              <BsTiktok/>
              <BsLinkedin/>
              <BsTwitter/>

            </div>
          </ul>
        </div>


      

    </div>
  )
}

export default NavBar