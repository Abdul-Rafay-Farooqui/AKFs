import React from "react";
import { Typography } from "@mui/material";
import "./Other.css";
const Header = ({ title, subtitle }) => {
  return (
    <>
      <div className="d2">
        <Typography
          sx={{
            pt: { xs: "3rem", md: "5rem" },
            textAlign: "center",
            fontSize: { xs: "35px", sm: "70px" },
          }}
        >
          {title}
        </Typography>

        <div className="imagediv">
          <img
            src={require("../components/images/Logo-removebg-preview.png")}
            alt="Your img"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>

      <div>
        <Typography
          sx={{
            mt: { xs: "150px", md: "200px" },
            pt: { xs: "1rem", md: "2rem" },
            px: { xs: "1rem", md: "3rem" },
            pb: "3rem",
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
