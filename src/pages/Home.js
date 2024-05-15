import React from "react";
import Card from "../components/Card";
import SliderImages from "../components/Slider";
import { CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Header from "../components/Header";
import { baseColor } from "../components/styles/common";
import ContactUs from "../components/ContactUs.js";

const Home = () => {
  const description =
    "Where you can find flourishing health and flourishing flour, From all-purpose to specialty flours, we have everything you need for your culinary creations.";
  const images = [
    {
      image: require("../components/images/pexels-life-of-pix-9095.jpg"),
    },
    {
      image: require("../components/images/pexels-victorfreitas-703008.jpg"),
    },
    {
      image: require("../components/images/pexels-towfiqu-barbhuiya-3440682-9797029.jpg"),
    },
    {
      image: require("../components/images/pexels-anthonyshkraba-production-8902067.jpg"),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const areaLinksStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "10px",
  };

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
            <Slider {...settings}>
              {images.map((i, index) => (
                <div key={index}>
                  <img
                    src={i.image}
                    alt={`Slide ${index}`}
                    style={{
                      width: "95%",
                      height: "450px",
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </Slider>
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
