import React from 'react';
import Box from '@mui/material/Box';
import { AppBar, Grid, Button, colors, Typography } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import HouseboatIcon from '@mui/icons-material/Houseboat';

function Header() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#ecf0f1 ', display: 'flex', alignItems: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', height: '80px',justifyContent:'end' }}>
            <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
              <img
                src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg'
                alt='flipcartlogo'
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center',justifyContent:'start' }}>
            <Box>

            <Button sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <input position="start"
            
                type="text"
                placeholder='Search for products, Brands, and More'
                
                style={{
                  width: '850px',
                  padding: '10px',
                  backgroundColor: '#aed6f1',
                  fontSize: '18px',
                  border: 'none',
                  borderRadius: '4px',
                }}
              />
              
            </Button>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center',justifyContent:'end' }}>
            <Box xs={{color:'black',display:'flex',justifyContent:'between'}}>

            <Button variant="text"  startIcon={<AccountCircleOutlinedIcon />} endIcon={<KeyboardArrowDownOutlinedIcon /> } > 
          Login
            </Button>
            </Box>
            <Box>
            <Button  variant="text"  startIcon={<HouseboatIcon />}  > 
            Cart
            </Button>

            </Box>
            
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center',justifyContent:'start' }}>
            <Box >
            <Button   xs={{ml: 4,color:'black'}} variant="text"  startIcon={<ShoppingCartOutlinedIcon />}  > 
            Become a Seller
            </Button>
            </Box>
            <Box  sx={{marginLeft:'20px'}}
            >
            <IconButton aria-label="delete" size="small">
        <MoreVertIcon fontSize="inherit" />
      </IconButton>
        
            </Box>
          </Grid>
         
          
        </Grid>
      </AppBar>
    </Box>
  );
}

export default Header;
