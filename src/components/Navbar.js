import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { baseColor } from "./styles/common";

const Navbar = () => {
  const cartItemQty = useSelector((state) => state.cart.items.length);

  return (
    <div>
      <AppBar style={{ backgroundColor: baseColor }}>
        <Toolbar>
          <img
            src={require("../components/images/Logo-removebg-preview.png")}
            alt="Your Image"
            style={{ height: "60px" }}
          />
          <Typography
            variant="h5"
            component="div"
            style={{ flexGrow: 1, color: "#242424" }}
          >
            AKFs
          </Typography>
          <React.Fragment>
            <Link className="nav-links" to="/">
              HOME
            </Link>
            <Link className="nav-links" to="/aboutus">
              ABOUT US
            </Link>
          </React.Fragment>

          <Link className="nav-icon-mobile" to="/cart">
            <ShoppingCartIcon style={{ fontSize: "30px" }} />
            <p className="badge">{cartItemQty}</p>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
