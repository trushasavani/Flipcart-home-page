import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <Box sx={{mt:2}} >

  
    <div className="slider-container " >
    <Slider {...settings} className="carousel-btn">
      <div>
    <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3b592778496399cd.jpeg?q=20' style={{width:'100%',height:'300px'}} />
      </div>
      <div>
      <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/73dc579d2060a578.jpeg?q=20' style={{width:'100%',height:'300px'}} />
      </div>
      <div>
      <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/c71214dd5d01be5c.jpg?q=20' style={{width:'100%',height:'300px'}} />
      </div>
      <div>
      <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a089f473b0ffc63e.jpeg?q=20' style={{width:'100%',height:'300px'}} />
      </div>
      <div>
      <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b35a105fe8bc8cbb.png?q=20' style={{width:'100%',height:'300px'}} />
      </div>
     
    </Slider>
  </div>
  </Box>
  )
}

export default Carousel
