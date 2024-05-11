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
          variant="h1"
          style={{ padding: "2rem", marginBottom: "2rem" }}
        >
          {title}
        </Typography>

        <img
          src={require("../components/images/Logo-removebg-preview.png")}
          alt="Your Image"
          style={{
            width: "40%",
            height: "100%",
            paddingBottom: "2rem",
            position: "relative",
            top: "-10px",
          }}
        />
      </div>

      <div style={{ padding: "5rem 10rem", marginTop: "200px" }}>
        <Typography
          sx={{
            px: "3rem",
            textAlign: "center",
            mx: "3rem",
            fontSize: "20px",
          }}
        >
          {subtitle}
        </Typography>
      </div>
    </>
  );
};

export default Header;
