import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const ContactInfo = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="2rem"
    >
      <Typography variant="h3" py="2rem">
        Visit Us
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom="1rem"
      >
        <LocationOnIcon sx={{ fontSize: "40px" }} />
        <Typography variant="h6" padding="0.5rem 1rem">
          Plot no 1209, Street no 22, Block C, Toor Baba Road, Shershah,
          Karachi.
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom="1rem"
      >
        <CallIcon sx={{ fontSize: "40px" }} />
        <Typography variant="h6" padding="0.5rem 1rem">
          0341 126 9900
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <EmailIcon sx={{ fontSize: "40px" }} />
        <Typography variant="h6" padding="0.5rem 1rem">
          khanammad1818@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactInfo;
