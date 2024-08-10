import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Slider from "react-slick";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function Section6() {
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

  const maping = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <Box>

    <Box sx={{mt:3}}>
    <Grid container spacing={1}>
<Grid item xs={4} >
<Box>
    <img src='https://rukminim2.flixcart.com/fk-p-flap/520/280/image/f9f788398c975058.jpg?q=20' style={{width:'100%',height:'250px'}} alt='....' />
</Box>
</Grid>
<Grid item xs={4} >
<Box>
<img src='https://rukminim2.flixcart.com/fk-p-flap/520/280/image/9e9aac081d595462.jpg?q=20'   alt='....' />
</Box>
</Grid>
<Grid item xs={4} >
<Box>
<img src='https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c2c99f5afba3627e.jpg?q=20'  style={{width:'100%',height:'250px'}} alt='....' />
</Box>
</Grid>

</Grid>

  
</Box>

{/* /* -------------section7 */ }
<Box sx={{mt:2,backgroundColor:'#fff '}}>
  <div className="slider-container">
    <Typography variant='h5' sx={{p:3,fontWeight:'700'}} className='heder'>Featured Brands</Typography>
      <Slider {...maping} spacing={2}>
        <Box sx={{ml:5}}>
     
        <img src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/b97643a8b100987e.jpeg?q=20"  sx={{width:'100%',ml:5}}  alt="" />

       
        </Box>
        <Box sx={{ml:10}} >
         <img src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/6b731ee205f466a5.jpeg?q=20" sx={{width:'100%'}} alt="" />
        </Box>
        <Box sx={{ml:15}}>
         <img src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/c1438b421fe3307d.jpeg?q=20"  sx={{width:'100%'}} alt="" />
        </Box>
        <Box sx={{ml:20}}>
         <img src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/c1438b421fe3307d.jpeg?q=20"  sx={{width:'100%'}} alt="" />
        </Box>
        <Box sx={{ml:20}}>
         <img src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/c1438b421fe3307d.jpeg?q=20"  sx={{width:'100%'}} alt="" />
        </Box>
       
      </Slider>
  <Box>
    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/350/image/4f095748fe5cdf77.png?q=20" style={{width:'100%',height:'250px'}} alt="" />
  </Box>
    </div>
  </Box>



  {/* section8 */}
  <Box sx={{mt:2}}>
    <Grid container spacing={1}>
<Grid item xs={4} >
<Box>
    <img src='https://rukminim2.flixcart.com/fk-p-flap/520/280/image/f9f788398c975058.jpg?q=20' style={{width:'100%',height:'300px'}} alt='....' />
</Box>
</Grid>
<Grid item xs={4} >
<Box>
<img src='https://rukminim2.flixcart.com/fk-p-flap/520/280/image/9e9aac081d595462.jpg?q=20'  style={{width:'100%',height:'300px'}} alt='....' />
</Box>
</Grid>
<Grid item xs={4} >
<Box>
<img src='https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c2c99f5afba3627e.jpg?q=20'  style={{width:'100%',height:'300px'}} alt='....' />
</Box>
</Grid>

</Grid>

  
</Box>




{/* section 9 */}
<div className="slider-container">
<Box sx={{display:'flex',alignItems:'center' ,justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant='h5' sx={{fontWeight:'700',m:3}}>New Arrivals Collections</Typography>
       <ChevronRightIcon sx={{backgroundColor:'blue',borderRadius:'20px',mr:3}} />
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



    {/* section 10 */}
    <Box sx={{mt:5}}> 
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={3} sx={{backgroundColor:'#fff'}}>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>

            <Typography sx={{fontSize:'20px',fontWeight:'700',ml:4}}>Sports & Fitness Essentials</Typography>
            <ChevronRightIcon sx={{backgroundColor:'blue',borderRadius:'20px',mr:4}} />
            </Box>
        <Grid item xs={12}>
       <Box sx={{display:'flex',mt:2}}>
       <Box sx={{width:'200px',height:'240px',border:'1px solid black',ml:4}}>
            <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/kids-dress/0/h/o/18-24-months-mini-mouse-muskan-beauty-collection-original-imagg4gb9bvf9ytv.jpeg?q=80" style={{width:'90%',padding:'10px 0px 10px 10px ',height:'150px'}} alt="" />
            <Typography sx={{textAlign:'start',fontSize:'16px',ml:2}} >True Wireless</Typography>
            <Typography  sx={{textAlign:'start',fontSize:'16px',fontWeight:'700',color:'green',ml:2}}>Min. 40% Off</Typography>
          </Box>
          <Box sx={{width:'180px',height:'240px',border:'1px solid black',ml:2}}>
            <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/kids-dress/0/h/o/18-24-months-mini-mouse-muskan-beauty-collection-original-imagg4gb9bvf9ytv.jpeg?q=80" style={{width:'90%',padding:'10px 0px 10px 10px ',height:'150px'}} alt="" />
            <Typography sx={{textAlign:'start',fontSize:'16px',ml:2}} >True Wireless</Typography>
            <Typography  sx={{textAlign:'start',fontSize:'16px',fontWeight:'700',ml:2,color:'green'}}>Min. 50% Off</Typography>
          </Box>
       </Box>
          
        </Grid>
        <Grid item xs={12 } >
       <Box sx={{display:'flex'}}>
       <Box sx={{width:'200px',height:'240px',border:'1px solid black',ml:4,mt:2}}>
            <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/kids-dress/0/h/o/18-24-months-mini-mouse-muskan-beauty-collection-original-imagg4gb9bvf9ytv.jpeg?q=80" style={{width:'90%',padding:'10px 0px 10px 10px ',height:'150px'}} alt="" />
            <Typography sx={{textAlign:'start',fontSize:'16px',ml:2}} >True Wireless</Typography>
            <Typography  sx={{textAlign:'start',fontSize:'16px',fontWeight:'700',ml:2,color:'green'}}>Min. 50% Off</Typography>
          </Box>
          <Box sx={{width:'180px',height:'240px',border:'1px solid black',ml:2,mt:2}}>
            <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/kids-dress/0/h/o/18-24-months-mini-mouse-muskan-beauty-collection-original-imagg4gb9bvf9ytv.jpeg?q=80" style={{width:'90%',padding:'10px 0px 10px 10px ',height:'150px'}} alt="" />
            <Typography sx={{textAlign:'start',fontSize:'16px',ml:2}} >True Wireless</Typography>
            <Typography  sx={{textAlign:'start',fontSize:'16px',fontWeight:'700',ml:2,color:'green'}}>Min. 50% Off</Typography>
          </Box>
       </Box>
          
        </Grid>
         
        </Grid>
        <Grid item xs={9}>
            <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2023/01/05/219906-thumbnaillogoflipkart-green.jpg?itok=wiIJ7She" style={{width:'100%',height:'560px',marginTop:'-13px'}} alt="" />
       
          
        </Grid>
        
        
      </Grid>
    </Box>
  </Box>


  {/* sewction 11 */}
 
  <Box sx={{mt:2}}>
    <Grid container spacing={1}>
<Grid item xs={4} >
<Box>
    <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/amazon-to-lay-off-several-hundred-employees-at-prime-video--studios-102829848-16x9.jpg?VersionId=QD7WRT9F5TV3Un.lA9pcpVAt5vuSNowl&size=690:388' style={{width:'100%',height:'250px'}} alt='....' />
</Box>
</Grid>
<Grid item xs={4} >
<Box>
<img src='https://i.pcmag.com/imagery/articles/05qp7E8Z6G2lM79Y6Epl0tl-11..v1660159907.jpg'  style={{width:'100%',height:'250px'}} alt='....' />
</Box>
</Grid>
<Grid item xs={4} >
<Box>
<img src='https://reviewed-com-res.cloudinary.com/image/fetch/s--qzC9-2Xe--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1590656678455/Amazon_Prime_Video_tips_1.jpg'  style={{width:'100%',height:'250px'}} alt='....' />
</Box>
</Grid>

</Grid>

  
</Box>

{/* section 12 */}

<Box sx={{mt:2,backgroundColor:'#f2f3f4 '}}>
  <div className="slider-container">
    <Typography variant='h5' sx={{p:3,fontWeight:'700'}}>Featured Brands</Typography>
      <Slider {...maping} spacing={2}>
        <Box sx={{ml:4}}>
     
        <img src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/f256aa3e8f67d0dc.jpeg?q=20"  sx={{width:'100%'}}  alt="" />

       
        </Box>
        <Box sx={{ml:4}} >
         <img src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/52fc8a9c452ff5c4.jpeg?q=20" sx={{width:'100%',height:'300px'}} alt="" />
        </Box>
        <Box sx={{ml:4}}>
         <img src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/5b8870767c2e986e.jpeg?q=20"  sx={{width:'100%'}} alt="" />
        </Box>
        <Box sx={{ml:4}}>
         <img src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/c1438b421fe3307d.jpeg?q=20"  sx={{width:'100%'}} alt="" />
        </Box>
       
      </Slider>
  
    </div>
  </Box>


{/* section 13 */}

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{padding:'20px'}}>
        <Grid item xs={3} >
          <Box>
            <img src="https://static.toiimg.com/thumb/msid-54688291,width-1280,height-720,resizemode-4/54688291.jpg" style={{width:'100%',height:'200px',ml:2}} alt="" />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
          <img src="https://static.toiimg.com/thumb/msid-54688291,width-1280,height-720,resizemode-4/54688291.jpg" style={{width:'100%',height:'200px'}} alt="" />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
          <img src="https://static.toiimg.com/thumb/msid-54688291,width-1280,height-720,resizemode-4/54688291.jpg" style={{width:'100%',height:'200px'}} alt="" />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
          <img src="https://static.toiimg.com/thumb/msid-54688291,width-1280,height-720,resizemode-4/54688291.jpg" style={{width:'100%',height:'200px'}} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Box>




    {/* section 14 */}
    <Box sx={{mt:5}}> 
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={3} sx={{backgroundColor:'#fff'}}>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>

            <Typography sx={{fontSize:'20px',fontWeight:'700',ml:4}}>Best Gadgets & Appliances</Typography>
            <ChevronRightIcon sx={{backgroundColor:'blue',borderRadius:'20px',mr:4}} />
            </Box>
        <Grid item xs={12}>
       <Box sx={{display:'flex',mt:2}}>
       <Box sx={{width:'200px',height:'240px',border:'1px solid black',ml:4}}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/fbff6e02d6037bfd.jpg?q=80" style={{width:'90%',padding:'10px 0px 10px 10px ',height:'150px'}} alt="" />
            <Typography sx={{textAlign:'start',fontSize:'16px',ml:2}} >Woman Dresses</Typography>
            <Typography  sx={{textAlign:'start',fontSize:'16px',fontWeight:'700',color:'green',ml:2}}>Min. 40% Off</Typography>
          </Box>
          <Box sx={{width:'180px',height:'240px',border:'1px solid black',ml:2}}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/fbff6e02d6037bfd.jpg?q=80" style={{width:'90%',padding:'10px 0px 10px 10px ',height:'150px'}} alt="" />
            <Typography sx={{textAlign:'start',fontSize:'16px',ml:2}} >True Wireless</Typography>
            <Typography  sx={{textAlign:'start',fontSize:'16px',fontWeight:'700',ml:2,color:'green'}}>Min. 50% Off</Typography>
          </Box>
       </Box>
          
        </Grid>
        <Grid item xs={12 } >
       <Box sx={{display:'flex'}}>
       <Box sx={{width:'200px',height:'240px',border:'1px solid black',ml:4,mt:2}}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/fbff6e02d6037bfd.jpg?q=80" style={{width:'90%',padding:'10px 0px 10px 10px ',height:'150px'}} alt="" />
            <Typography sx={{textAlign:'start',fontSize:'16px',ml:2}} >True Wireless</Typography>
            <Typography  sx={{textAlign:'start',fontSize:'16px',fontWeight:'700',ml:2,color:'green'}}>Min. 50% Off</Typography>
          </Box>
          <Box sx={{width:'180px',height:'240px',border:'1px solid black',ml:2,mt:2}}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/fbff6e02d6037bfd.jpg?q=80" style={{width:'90%',padding:'10px 0px 10px 10px ',height:'150px'}} alt="" />
            <Typography sx={{textAlign:'start',fontSize:'16px',ml:2}} >True Wireless</Typography>
            <Typography  sx={{textAlign:'start',fontSize:'16px',fontWeight:'700',ml:2,color:'green'}}>Min. 50% Off</Typography>
          </Box>
       </Box>
          
        </Grid>
         
        </Grid>
        <Grid item xs={9}>
            <img src="https://thumbs.dreamstime.com/b/clothes-hangers-colorful-clothes-women-shop-summer-sale-73852501.jpg" style={{width:'100%',height:'560px',marginTop:'-13px'}} alt="" />
       
          
        </Grid>
        
        
      </Grid>
    </Box>
  </Box>



  {/* section 15 */}

  <div className="slider-container">
<Box sx={{display:'flex',alignItems:'center' ,justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant='h5' sx={{fontWeight:'700',m:3}}>Your Favorite Brands deals</Typography>
       <ChevronRightIcon sx={{backgroundColor:'blue',borderRadius:'20px',mr:3}} />
    </Box>
      <Slider {...settings} className='carousel-btn-right'>
        <div>
          <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:2}}>
            <img src="https://rukminim2.flixcart.com/image/210/210/l111lzk0/shoe/5/9/m/10-22g-862-campus-wht-v-org-original-imagczuenuvvgbzm.jpeg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
            <Typography sx={{textAlign:'center',fontSize:'16px',mt:8}} >Woodland, Wildcraft...</Typography>
            <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>

          </Box>
        </div>
        <div>
        <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:2}}>
            <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/sandal/y/i/m/-original-imagg6rp5zgcptd5.jpeg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px',height:'200px'}} alt="" />
            <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
            <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>

          </Box>
        </div>
        <div>
        <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:2}}>
            <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/shoe/t/p/s/-original-imagp984qhjj4gbm.jpeg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px',height:'200px'}} alt="" />
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
        <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:1}}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/5aa98b7cee183286.jpg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
            <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
            <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>

          </Box>
        </div>
      </Slider>
    </div>

    {/* section 16 */}

    <Box sx={{ flexGrow: 1,mt:2 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Box>
            <img src="https://entrackr.com/storage/2018/10/vs.jpg" style={{width:'100%',height:'250px'}} alt="" />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
          <img src="https://entrackr.com/storage/2018/10/vs.jpg" style={{width:'100%',height:'250px'}} alt="" />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
          <img src="https://entrackr.com/storage/2018/10/vs.jpg" style={{width:'100%',height:'250px'}} alt="" />
          </Box>
        </Grid>
       
      </Grid>
    </Box>


    <div className="slider-container" sx={{p:5}}>
<Box sx={{display:'flex',alignItems:'center' ,justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant='h5' sx={{fontWeight:'700',m:3}}>Best Deals On Appliances</Typography>
       <ChevronRightIcon sx={{backgroundColor:'blue',borderRadius:'20px',mr:3}} />
    </Box>
      <Slider {...settings} >
        <div>
          <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:5}}>
            <img src="https://rukminim2.flixcart.com/image/210/210/l111lzk0/shoe/5/9/m/10-22g-862-campus-wht-v-org-original-imagczuenuvvgbzm.jpeg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
            <Typography sx={{textAlign:'center',fontSize:'16px',mt:8}} >Woodland, Wildcraft...</Typography>
            <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>

          </Box>
        </div>
        <div>
        <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:5}}>
            <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/sandal/y/i/m/-original-imagg6rp5zgcptd5.jpeg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px',height:'200px'}} alt="" />
            <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
            <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>

          </Box>
        </div>
        <div>
        <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:5}}>
            <img src="https://rukminim2.flixcart.com/image/210/210/xif0q/shoe/t/p/s/-original-imagp984qhjj4gbm.jpeg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px',height:'200px'}} alt="" />
            <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
            <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>

          </Box>
        </div>
        <div>
        <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:5}}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/5aa98b7cee183286.jpg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
            <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
            <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>

          </Box>
        </div>
        <div>
        <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:5}}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/5aa98b7cee183286.jpg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
            <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
            <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>

          </Box>
        </div>
        <div>
        <Box sx={{width:'250px',height:'270px',border:'1px solid red',ml:5}}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/5aa98b7cee183286.jpg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
            <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
            <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>

          </Box>
        </div>
        <div>
        {/* <Box sx={{width:'250px',height:'270px',border:'1px solid red'}}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/210/210/image/5aa98b7cee183286.jpg?q=80" style={{width:'80%',padding:'10px 0px 10px 20px'}} alt="" />
            <Typography sx={{textAlign:'center',fontSize:'16px'}} >Woodland, Wildcraft...</Typography>
            <Typography  sx={{textAlign:'center',fontSize:'16px',fontWeight:'700'}}>Min. 40% Off</Typography>

          </Box> */}
        </div>
      </Slider>
    </div>

    </Box>
  )
}

export default Section6
