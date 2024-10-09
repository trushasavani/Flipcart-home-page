import React from 'react'
import { AppBar, Button, colors, Typography, TextField, InputAdornment, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function FashionPage() {
  return (
    <Box>
      <Box sx={{ backgroundColor: '#2370f4' }}>


        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={3} sx={{ py: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'end' }}>
              <Box className='fashion'>

                <img
                  src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png'
                  alt='flipcartlogo'
                  style={{ maxWidth: '60px', height: 'auto', mr: 2 }}
                />
                <Typography sx={{ fontSize: '13px', marginTop: '-5px', color: '#fff' }}>Explore <span >Plus</span><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' style={{ width: '10px', mt: -1 }} alt='...' /></Typography>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ mt: '-5px',mb:1 }}>

              <TextField
                className='pro'
                variant="outlined"
                fullWidth
                placeholder="Search for products, brands and more"

                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: '#2370f4', fontSize: '20px' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ backgroundColor: '#fff', borderRadius: '4px', display: 'flex', mt: '-1' }}
              />

            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box sx={{ display: 'flex', alignItems: 'center',mt:'-5px' }}>

              <Box >
                <Button size="small" sx={{ backgroundColor: '#fff', fontWeight: '700', px: 6, }}>Login</Button>
              </Box>
              <Box>
                <Typography sx={{ color: '#fff', fontWeight: '700', ml: 5 }}>Become a Seller</Typography>


              </Box>
              <Box sx={{ ml: 3 }}>
                <Button variant="contained" endIcon={<KeyboardArrowDownIcon sx={{fontSize:'5px',ml:'-5px'}} />}>
                  More
                </Button>
              </Box>
              <Box >
                <Button variant="outlined" sx={{color:'white'}} startIcon={<ShoppingCartIcon sx={{fontSize:'5px',mr:'-5px'}} />}>
                 Cart
                </Button>
              </Box>

            </Box>
          </Grid>

        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{display:'flex',py:1}}>

          <Box sx={{display:'flex',alignItems:'center'}}>
            <Typography sx={{ml:42,fontSize:'14px',fontWeight:'700'}} endIcon={<KeyboardArrowDownIcon  sx={{color:'red'}}/>}>Electronic </Typography>
            <KeyboardArrowDownIcon sx={{fontSize:'20px',color:'grey'}} />
          </Box>
          <Box sx={{display:'flex',alignItems:'center'}}>
            <Typography sx={{ml:6,fontSize:'14px',fontWeight:'700'}}  endIcon={<KeyboardArrowDownIcon  sx={{color:'red'}}/>}>TV & Appliances</Typography>
            <KeyboardArrowDownIcon sx={{fontSize:'20px'}} />
          </Box>
          <Box sx={{display:'flex',alignItems:'center'}}>
            <Typography sx={{ml:6,fontSize:'14px',fontWeight:'700'}}  endIcon={<KeyboardArrowDownIcon  sx={{color:'red'}}/>}>Men</Typography>
            <KeyboardArrowDownIcon sx={{fontSize:'20px'}} />
          </Box>
          <Box sx={{display:'flex',alignItems:'center'}}>
            <Typography sx={{ml:6,fontSize:'14px',fontWeight:'700'}}  endIcon={<KeyboardArrowDownIcon  sx={{color:'red'}}/>}>Women</Typography>
            <KeyboardArrowDownIcon sx={{fontSize:'20px'}} />
          </Box>
          <Box sx={{display:'flex',alignItems:'center'}}>
            <Typography sx={{ml:6,fontSize:'14px',fontWeight:'700'}}  endIcon={<KeyboardArrowDownIcon  sx={{color:'red'}}/>}>Baby & Kids</Typography>
            <KeyboardArrowDownIcon sx={{fontSize:'20px'}} />
          </Box>
          <Box sx={{display:'flex',alignItems:'center'}}>
            <Typography sx={{ml:6,fontSize:'14px',fontWeight:'700'}}  endIcon={<KeyboardArrowDownIcon  sx={{color:'red'}}/>}>Home & Furniture</Typography>
            <KeyboardArrowDownIcon sx={{fontSize:'20px'}} />
          </Box>
          <Box sx={{display:'flex',alignItems:'center'}}>
            <Typography sx={{ml:6,fontSize:'14px',fontWeight:'700'}}  endIcon={<KeyboardArrowDownIcon  sx={{color:'red'}}/>}>Sports, Books & More</Typography>
            <KeyboardArrowDownIcon sx={{fontSize:'20px'}} />
          </Box>
          <Box >
            <Typography sx={{ml:6,fontSize:'14px',fontWeight:'700'}}  endIcon={<KeyboardArrowDownIcon  sx={{color:'red'}}/>}>Flights</Typography>
            
          </Box>
          <Box >
            <Typography sx={{ml:6,fontSize:'14px',fontWeight:'700'}}  endIcon={<KeyboardArrowDownIcon  sx={{color:'red'}}/>}>Offer Zone</Typography>
            
          </Box>
         
         
         
         
          
        
         
          </Box>




        </Grid>
       
      </Grid>
    </Box>


    <Box>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box sx={{backgroundColor:'#eaeded',width:'270px',height:'400px',display:'flex',flexDirection:'column',marginLeft:'120px'}}>
            <Box>

            <Typography variant='h6' sx={{ml:2,mt:1,fontWeight:'500'}}>Filters</Typography>
            </Box>
            <Divider sx={{borderColor:'grey',width:'100%'}} />
            
            <Box>
             <Typography sx={{fontSize:'14px',ml:2,mt:1}}>CATEGORIES</Typography>
            </Box>
            <Box sx={{display:'flex',ml:2,fontWeight:'700'}}>
            <KeyboardArrowDownIcon sx={{fontSize:'20px'}} />
             <Typography sx={{fontSize:'14px',}}>Clothing and Accessories...</Typography>
            </Box>
           

          </Box>
          
          <Box>

          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box>xs=4</Box>
        </Grid>
        
        
      </Grid>
    </Box>
    </Box>

    </Box>
  )
}

export default FashionPage
