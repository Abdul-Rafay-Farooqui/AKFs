import React from "react";
import Card from "../components/Card";
import { Grid, Typography } from "@mui/material";
import SliderImages from "../components/Slider.js";
import Header from "../components/Header";
import ContactUs from "../components/ContactUs.js";

const Home = () => {
  const description =
    "Where you can find flourishing health and flourishing flour, From all-purpose to specialty flours, we have everything you need for your culinary creations.";

  const sliderContainerStyle = {
    maxWidth: "100%",
  };

  return (
    <>
      <Header title={"Welcome to AKFs"} subtitle={description} />
      <Grid
        sx={{
          backgroundColor: "#557153",
          paddingTop: "1rem",
          paddingBottom: "2rem",
          marginTop: "1rem",
          width: "100%",
          height: "500px",
        }}
      >
        <Grid sx={{ width: "100%", height: "300px", order: { xs: 1, sm: 2 } }}>
          <div style={sliderContainerStyle}>
            <SliderImages />
          </div>
        </Grid>
      </Grid>
      <Grid
        sx={{
          color: "Black",
          p: "2rem",

          textAlign: "center",
        }}
      >
        <Typography variant="h3">Here We Have</Typography>
      </Grid>
      <Card />
      <ContactUs />
    </>
  );
};

export default Home;
