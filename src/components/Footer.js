import React from "react";
import Box from "@mui/material/Box";
import { Typography, Link } from "@mui/material";
import "./Other.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { baseColor } from "./styles/common";

const Footer = () => {
  const footerStyle = {
    backgroundColor: baseColor,
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  };
  return (
    <Box component="footer" style={footerStyle}>
      <div
        style={{ borderBottom: "1px solid black", marginBottom: "10px" }}
      ></div>
      <Typography variant="h5" gutterBottom style={{ color: "black" }}>
        AKFs
      </Typography>
      <div>
        <Link
          href="https://www.facebook.com/profile.php?id=61559387822102"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon style={{ fontSize: "35px", color: "black" }} />
        </Link>
        <Link
          href="https://www.instagram.com/akflours/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon style={{ fontSize: "35px", color: "black" }} />
        </Link>
      </div>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} AKFs. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
