import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CopyrightIcon from '@mui/icons-material/Copyright';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Typography } from '@mui/material';
function Footernavbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, backgroundColor: 'black',height:'60px' }}>
        <Grid container spacing={2}>


          <Divider sx={{ width: '100%', borderColor: 'white' }} />



          <Grid item xs={8}>
            <Box sx={{display:'flex',color:'white',fontSize:'14px',alignItems:'center'}}>

            <Box sx={{ display: 'flex', alignItems: 'center', ml: 12 }}>
              <CardGiftcardIcon sx={{color:'#f5b041 ',fontSize:'14px'}} />
              <Typography sx={{ ml: 1 }}>Become a Seller</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', ml: 12 }}>
              <CardGiftcardIcon sx={{color:'#f5b041 ',fontSize:'14px'}} />
              <Typography sx={{ ml: 1, }}>Advertise</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', ml: 12 }}>
              <CardGiftcardIcon sx={{color:'#f5b041 ',fontSize:'14px'}} />
              <Typography sx={{ ml: 1 }}>Gift Cards</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', ml: 12 }}>
              <HelpOutlineIcon  sx={{color:'#f5b041 ',fontSize:'14px'}}/>
              <Typography sx={{ ml: 1 }}>Help Center</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', ml: 12 }}>
              <CopyrightIcon sx={{color:'#f5b041 ',fontSize:'14px'}} />
              <Typography sx={{ ml: 1 }}> 2007-2024 Flipkart.com</Typography>
            </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{mt:1}}>
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="" />
            </Box>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}

export default Footernavbar
