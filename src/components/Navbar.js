import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:850px)');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
 

  const sideList = () => (
    <div style={{ width: 230 ,backgroundColor: "#FFC72C" }}>
      <CloseIcon onClick={toggleDrawer} sx={{float:"right", fontSize:"2rem", padding: "1rem", cursor: "pointer"}}/>
      <Link to="/" className='side-link' onClick={toggleDrawer}>Home</Link>
      <Link to="/products" className='side-link' onClick={toggleDrawer}>Product</Link>
      <Link to="/signup" className='side-link' onClick={toggleDrawer}>SignUp</Link>
    </div>
  );

  const cartItemQty = useSelector(state=>state.cart.items.length)

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#FFC72C' }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              sx={{color: "#242424"}}
              edge="start"
              aria-label="menu"
              style={{ marginRight: '16px' }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          <img src={require("../components/images/Logo-removebg-preview.png")} alt="Your Image" style={{ height: "60px" }} />
          <Typography variant="h5" component="div" style={{ flexGrow: 1, color: '#242424' }}>
            AKFs
          </Typography>

          {!isMobile && (
            <React.Fragment>
              <Link className="nav-links" to="/">
                HOME
              </Link>
              <Link className="nav-links" to="/aboutus">
                ABOUT US
              </Link>
            </React.Fragment>
          )}
              <Link className="nav-icon-mobile" to="/cart">
                <ShoppingCartIcon style={{ fontSize: '30px' }} />
                <p className='badge'>
                  {cartItemQty}
                </p>
              </Link>
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer anchor="left"  open={isDrawerOpen} onClose={toggleDrawer}>
          {sideList()}
        </Drawer>
      )}
    </div>
  );
};

export default Navbar;
