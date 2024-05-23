import React from "react";
import { Typography } from "@mui/material";
import { baseColor } from "../components/styles/common";

const Header = ({ title, subtitle }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: baseColor,
          height: "60vh",
          textAlign: "center",
          paddingTop: "3rem",
        }}
      >
        <Typography
          sx={{
            px: { xs: "0rem", md: "3rem" },
            py: { xs: "3rem", md: "1rem" },
            textAlign: "center",
            mx: { xs: "0rem", md: "3rem" },
            fontSize: { xs: "50px", md: "70px" },
          }}
        >
          {title}
        </Typography>

        <img
          src={require("../components/images/Logo-removebg-preview.png")}
          alt="Your img"
          sx={{
            width: { xs: "90%", md: "40%" },
            maxWidth: "500px",
            height: { xs: "100px", md: "500px" },
            paddingBottom: "1rem",
          }}
          style={{
            position: "relative",
            top: "+10px",
          }}
        />
      </div>

      <div style={{ padding: "5rem 1rem", marginTop: "200px" }}>
        <Typography
          sx={{
            px: { xs: "3rem", md: "3rem" },
            textAlign: "center",
            mx: { xs: "0rem", md: "3rem" },
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
