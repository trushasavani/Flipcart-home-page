import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';


function Secondcarousel() {
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
        <Box sx={{ height: '450px', }}>
            <Grid container spacing={2} sx={{padding:'10px'}} >
                <Grid item xs={10}>
                    <Box sx={{ mt: 2, backgroundColor: ' #fff ', height: '400px', }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant='h4' sx={{ m: 2, fontWeight: 'normal' }}>Best Deals on Smartphones</Typography>
                            <ArrowCircleLeftOutlinedIcon sx={{ m: 2 }} />
                        </Box>
                        <div className="slider-container">

                            <Slider {...settings} className='carousel-btn-right' sx={{ gap: 2 }}>
                                <div>
                                   <Box style={{width:'200px',height:'250px',border:'1px solid grey'}}>
                                      <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=80" style={{width:'90%',padding:'10px 10px 10px 10px ',height:'180px',ml:4}} alt="" />
                                      <Typography sx={{fontSize:'16px',textAlign:'center'}}>Realme P1 5g</Typography>
                                      <Typography sx={{fontSize:'16px',textAlign:'center',fontWeight:'700'}}>From ₹14,999</Typography>
                                     
                                   </Box>
                                </div>
                                <div>
                                <Box style={{width:'200px',height:'250px',border:'1px solid grey'}}>
                                      <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=80" style={{width:'90%',padding:'10px 10px 10px 10px ',height:'180px'}} alt="" />
                                      <Typography sx={{fontSize:'16px',textAlign:'center'}}>Realme P1 5g</Typography>
                                      <Typography sx={{fontSize:'16px',textAlign:'center',fontWeight:'700'}}>From ₹14,999</Typography>
                                     
                                   </Box>
                                </div>
                                <div>
                                <Box style={{width:'200px',height:'250px',border:'1px solid grey'}}>
                                      <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=80" style={{width:'90%',padding:'10px 10px 10px 10px ',height:'180px'}} alt="" />
                                      <Typography sx={{fontSize:'16px',textAlign:'center'}}>Realme P1 5g</Typography>
                                      <Typography sx={{fontSize:'16px',textAlign:'center',fontWeight:'700'}}>From ₹14,999</Typography>
                                     
                                   </Box>
                                </div>
                                <div>
                                <Box style={{width:'200px',height:'250px',border:'1px solid grey'}}>
                                      <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=80" style={{width:'90%',padding:'10px 10px 10px 10px ',height:'180px'}} alt="" />
                                      <Typography sx={{fontSize:'16px',textAlign:'center'}}>Realme P1 5g</Typography>
                                      <Typography sx={{fontSize:'16px',textAlign:'center',fontWeight:'700'}}>From ₹14,999</Typography>
                                     
                                   </Box>
                                </div>
                                <div>
                                <Box style={{width:'200px',height:'250px',border:'1px solid grey'}}>
                                      <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=80" style={{width:'90%',padding:'10px 10px 10px 10px ',height:'180px'}} alt="" />
                                      <Typography sx={{fontSize:'16px',textAlign:'center'}}>Realme P1 5g</Typography>
                                      <Typography sx={{fontSize:'16px',textAlign:'center',fontWeight:'700'}}>From ₹14,999</Typography>
                                     
                                   </Box>
                                </div>
                                <div>
                                <Box style={{width:'200px',height:'250px',border:'1px solid grey'}}>
                                      <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=80" style={{width:'90%',padding:'10px 10px 10px 10px ',height:'180px'}} alt="" />
                                      <Typography sx={{fontSize:'16px',textAlign:'center'}}>Realme P1 5g</Typography>
                                      <Typography sx={{fontSize:'16px',textAlign:'center',fontWeight:'700'}}>From ₹14,999</Typography>
                                     
                                   </Box>
                                </div>




                            </Slider>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ mt: 3 }}>
                        <img src='https://rukminim2.flixcart.com/fk-p-flap/530/810/image/6c0a8888ed7a580a.jpeg?q=20' style={{ width: '300px', height: '400px' }} alt='...' />
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Secondcarousel
