import React from 'react'
import Carousel from '../component/Carousel'
import Secondcarousel from '../component/Secondcarousel'
import Section4 from '../component/Section4'
import Section5 from '../component/Section5'
import Section6 from '../component/Section6'
import Box from '@mui/material/Box';
import Navbarimage from '../component/Navbarimage'

function Homepage() {
  return (
    <Box sx={{ backgroundColor: '#e5e8e8' }}> 

    <Navbarimage />
      <Carousel />
      <Secondcarousel />
      <Section4 />
      <Section5 />
      <Section6 />
    </Box>
  )
}

export default Homepage
