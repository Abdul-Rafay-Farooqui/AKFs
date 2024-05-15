import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { baseColor } from "../components/styles/common";

const Header = ({ title, subtitle }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: baseColor,
          height: "60vh",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            px: { xs: "1rem", md: "3rem" },
            py: { xs: "3rem", md: "1rem" },
            textAlign: "center",
            mx: { xs: "1rem", md: "3rem" },
            fontSize: { xs: "50px", md: "70px" },
          }}
        >
          {title}
        </Typography>

        <img
          src={require("../components/images/Logo-removebg-preview.png")}
          alt="Your Image"
          sx={{
            width: "40%",
            maxWidth: "500px",
            height: "500px",
            paddingBottom: "1rem",
          }}
          style={{
            position: "relative",
            top: "+10px",
          }}
        />
      </div>

      <div style={{ padding: "5rem 10rem", marginTop: "200px" }}>
        <Typography
          sx={{
            px: { xs: "1rem", md: "3rem" },
            textAlign: "center",
            mx: { xs: "1rem", md: "3rem" },
            fontSize: { xs: "16px", md: "20px" },
          }}
        >
          {subtitle}
        </Typography>
      </div>
    </>
  );
};

export default Header;
