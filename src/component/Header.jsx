

import React, { useState } from 'react';
import { Box, AppBar, Grid, Button, IconButton, Menu, MenuItem, InputBase } from '@mui/material';
import { useHistory } from 'react-router-dom'; // Use useHistory for navigation in v5
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Outlet } from '@mui/icons-material';
import Carousel from './Carousel';
import Secondcarousel from './Secondcarousel';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory(); 

  const categories = [
    { name: 'Electronics', path: '/electronics' },
    { name: 'Fashion', path: '/fashion' },
    { name: 'Home Appliances', path: '/home-appliances' },
    { name: 'Books', path: '/books' },
    { name: 'Groceries', path: '/groceries' }
  ];

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCategoryClick = (path) => {
    history.push(path); 
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#fff ', display: 'flex', alignItems: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', height: '80px', justifyContent: 'end' }}>
            <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
              <img
                src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg'
                alt='flipcartlogo'
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
            <Box>
              <Button sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <InputBase

                  
                  type="text"
                  placeholder='Search for products, Brands, and More'
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  onClick={handleSearchClick}
                  style={{
                    width: '850px',
                    padding: '5px',
                    backgroundColor: '#ebf5fb',
                    fontSize: '18px',
                    border: 'none',
                    borderRadius: '10px',
                    color:'grey'
                  }}
                />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {categories.map((category, index) => (
                  <MenuItem key={index} onClick={() => handleCategoryClick(category.path)}>
                    {category.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <Box sx={{ color: 'black', display: 'flex', justifyContent: 'between' }}>
              <Button variant="text" startIcon={<AccountCircleOutlinedIcon />} endIcon={<KeyboardArrowDownOutlinedIcon />}>
                Login
              </Button>
            </Box>
            <Box>
              <Button variant="text" startIcon={<HouseboatIcon />}>
                Cart
              </Button>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
            <Box>
              <Button sx={{ ml: 4, color: 'black' }} variant="text" startIcon={<ShoppingCartOutlinedIcon />}>
                Become a Seller
              </Button>
            </Box>
            <Box sx={{ marginLeft: '20px' }}>
              <IconButton aria-label="more" size="small">
                <MoreVertIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </AppBar>


      {/* <Carousel />
      <Secondcarousel />   */}
      {/* <Section4 />
      <Section5 />
      <Section6 /> */}
    </Box>
    
  );
};

export default SearchBar;
