import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

function Footer() {
  return (
    <Box sx={{ flexGrow: 1,backgroundColor:'black',mt:5 }}>
      <Grid container spacing={2} sx={{padding:'50px 0px 50px 50px'}}>
        <Grid item xs={6}>
            <Box sx={{display:'flex'}}>

          <Box sx={{display:'flex',flexDirection:'column',color:'white'}}>
            <Typography sx={{color:'grey',fontSize:'16px',}}>ABOUT</Typography>
            <Typography sx={{fontWeight:'bold',mt:2}}>Contact Us</Typography>
            <Typography sx={{fontWeight:'bold'}}>About Us</Typography>
            <Typography sx={{fontWeight:'bold'}}>Careers</Typography>
            <Typography sx={{fontWeight:'bold'}}>Flipkart Stories</Typography>
            <Typography sx={{fontWeight:'bold'}}>Press</Typography>
            <Typography sx={{fontWeight:'bold'}}>Corporate Information</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',color:'white',mr:5}}>
          <Typography  sx={{color:'grey',fontSize:'14px'}}>GROUP COMPANIES</Typography>
            <Typography sx={{fontWeight:'bold',mt:1}}>Myntra</Typography>
            <Typography sx={{fontWeight:'bold'}}>Cleartrip</Typography>
            <Typography sx={{fontWeight:'bold'}}>Shopsy</Typography>
            
          </Box>
        <Box sx={{display:'flex',flexDirection:'column',ml:2,color:'white',ml:5}}>
            <Typography sx={{color:'grey',fontSize:'16px'}}>HELP</Typography>
            <Typography sx={{fontWeight:'bold',mt:2}}>Payments</Typography>
            <Typography sx={{fontWeight:'bold'}}>Shipping</Typography>
            <Typography sx={{fontWeight:'bold'}}>Cancellation & Returns</Typography>
            <Typography sx={{fontWeight:'bold'}}>FAQ</Typography>
            <Typography sx={{fontWeight:'bold'}}>Report Infringement</Typography>
          
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',ml:2,color:'white',ml:10}}>
            <Typography sx={{color:'grey',fontSize:'16px'}}>CONSUMER POLICY</Typography>
            <Typography sx={{fontWeight:'bold',mt:2}}>Cancellation & Returns</Typography>
            <Typography sx={{fontWeight:'bold'}}>Terms Of Use</Typography>
            <Typography sx={{fontWeight:'bold'}}>Security</Typography>
            <Typography sx={{fontWeight:'bold'}}>Privacy</Typography>
            <Typography sx={{fontWeight:'bold'}}>Sitemap</Typography>
          
          </Box>
            </Box>
        </Grid>
          <Divider orientation="vertical" sx={{ml:5,borderColor: 'white'}} variant="middle" flexItem />

        <Grid item xs={5}>
            <Box  sx={{display:'flex'}}>
            <Box sx={{display:'flex',flexDirection:'column',color:'white',ml:4}}>
            <Typography sx={{color:'grey',fontSize:'16px'}}>Mail Us:</Typography>
            <Typography sx={{fontWeight:'bold',mt:2}}>Flipkart Internet Private Limited, </Typography>
            <Typography sx={{fontWeight:'bold'}}> Buildings Alyssa, Begonia & </Typography>
            <Typography sx={{fontWeight:'bold'}}> Clove Embassy Tech Village, </Typography>
            <Typography sx={{fontWeight:'bold'}}> Outer Ring Road, Devarabeesanahalli Village, </Typography>
            <Typography sx={{fontWeight:'bold'}}> Bengaluru, 560103, </Typography>
            <Typography sx={{fontWeight:'bold'}}> Karnataka, India </Typography>
          
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',mr:2,color:'white',ml:5}}>
            <Typography sx={{color:'grey',fontSize:'16px'}}>Registered Office Address:</Typography>
            <Typography sx={{fontWeight:'bold',mt:2}}>Flipkart Internet Private Limited,  </Typography>
            <Typography sx={{fontWeight:'bold'}}>  Buildings Alyssa, Begonia &  </Typography>
            <Typography sx={{fontWeight:'bold'}}>  Clove Embassy Tech Village,  </Typography>
            <Typography sx={{fontWeight:'bold'}}>  Outer Ring Road, Devarabeesanahalli Village,  </Typography>
            <Typography sx={{fontWeight:'bold'}}>  Bengaluru, 560103,  </Typography>
            <Typography sx={{fontWeight:'bold'}}> Karnataka, India  </Typography>
            <Typography sx={{fontWeight:'bold'}}>  CIN : U51109KA2012PTC066107   </Typography>
            <Typography sx={{fontWeight:'bold'}}>  Telephone: <a href="">044-45614700</a>/ <a href=''>044-67415800</a>
              </Typography>
          
          </Box>
       
            </Box>
        </Grid>
       
      </Grid>
    </Box>
  )
}

export default Footer
