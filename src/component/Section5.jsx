import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Card from '@mui/material/Card';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
function Section5() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
  return (
    <Box className='10px'>

    <div className="slider-container" >
    <Box sx={{display:'flex',alignItems:'center' ,justifyContent:'space-between',alignItems:'center'}}>
            <Typography variant='h5' sx={{fontWeight:'700',m:3}}>New Arrivals Collections</Typography>
           <ChevronRightIcon sx={{backgroundColor:'blue',borderRadius:'20px',mr:2}} />
        </Box>
          <Slider {...settings} className='carousel-btn-right'>
            <div>
              <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:2}}>
                <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/5aa98b7cee183286.jpg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
                <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
                <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>
    
              </Box>
            </div>
            <div>
            <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:2}}>
                <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/5aa98b7cee183286.jpg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
                <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
                <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>
    
              </Box>
            </div>
            <div>
            <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:2}}>
                <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/5aa98b7cee183286.jpg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
                <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
                <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>
    
              </Box>
            </div>
            <div>
            <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:2}}>
                <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/5aa98b7cee183286.jpg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
                <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
                <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>
    
              </Box>
            </div>
            <div>
            <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:2}}>
                <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/5aa98b7cee183286.jpg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
                <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
                <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>
    
              </Box>
            </div>
            <div>
            <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:2}}>
                <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/5aa98b7cee183286.jpg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
                <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
                <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>
    
              </Box>
            </div>
            <div>
            <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:2}}>
                <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/5aa98b7cee183286.jpg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
                <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
                <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>
    
              </Box>
            </div>
          </Slider>
        </div>
    </Box>
    


  )
}

export default Section5

