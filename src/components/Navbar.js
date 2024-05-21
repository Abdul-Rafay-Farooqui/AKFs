import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { Link } from "react-router-dom";
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
            alt="Your img"
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
