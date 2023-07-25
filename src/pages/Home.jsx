import React from 'react'
import Home_innerpage from '../innerpages/Home_innerpage'
import Home_innerpagetwo from '../innerpages/Home_innerpagetwo'
import Home_innerpagethree from '../innerpages/Home_innerpagethree'
import Home_innerpagefour from '../innerpages/Home_innerpagefour'
import Home_innerpagefive from '../innerpages/Home_innerpagefive'

import ImageSlider from '../innerpages/ImageSliders'
import Home_innerpagesix from '../innerpages/Home_innerpagesix'



const Home = () => {
  return (
    <div>
      <Home_innerpage/>
      <Home_innerpagetwo/>
      <Home_innerpagethree/>
      <Home_innerpagefour/>
      <Home_innerpagefive/>
      <Home_innerpagesix/>
      <ImageSlider/>
      
      
    </div>
  )
}

export default Home