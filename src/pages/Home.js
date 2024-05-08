import React from 'react';
import Card from '../components/Card';
import SliderImages from '../components/Slider';
import { CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Home = () => {
  const images = [
    {
      image: require("../components/images/pexels-life-of-pix-9095.jpg")
    },
    {
      image: require("../components/images/pexels-victorfreitas-703008.jpg")
    },
    {
      image: require("../components/images/pexels-towfiqu-barbhuiya-3440682-9797029.jpg")
    },
    {
      image: require("../components/images/pexels-anthonyshkraba-production-8902067.jpg")
    }
  ];

  const logo = {logo: require("../components/images/Logo.png")}

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const sliderContainerStyle = {
    maxWidth: '100%',
  };

  return (
    <>
      <Grid container spacing={3} px={4} py={2} sx={{backgroundColor: "Black",color: "white", marginY:"0rem" }}>
        <Grid item xs={3}>
        <img src={require("../components/images/Logo.png")} alt="Your Image" style={{ width: '100%', height: "auto" }} />
        </Grid>
        <Grid item xs={8} sx={{textAlign:"center"}}>
        <Typography sx={{fontSize: "35px", p:"1rem"}}>
          Welcome to AKFs
        </Typography>
        <Typography sx={{fontSize: "20px"}}>
          Where you can find flourishing health and flourishing flour, From all-purpose to specialty flours, we have everything you need for your culinary creations.
        </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ backgroundColor: "#FFC72C", paddingTop: "1rem",paddingBottom: "2rem", marginTop: "1rem" }}>
        <Grid  sx={{ width: "100%", order: { xs: 1, sm: 2 } }}>
          <div className="slider-container" style={sliderContainerStyle}>
            <Slider {...settings}>
              {images.map((i, index) => (
                <div key={index} className='image-container'>
                  <img src={i.image} alt={`Slide ${index}`} style={{ width: '90%', height: '100%',borderRadius: '20px', objectFit: 'cover' }} />
                </div>
              ))}
            </Slider>
          </div>
        </Grid>
      </Grid>
      <Grid sx={{backgroundColor: "black", color:"white" , p:"2rem", my: "1rem", textAlign: "center"}}>
        <Typography sx={{fontSize: "25px"}}>
          Here We Have
        </Typography>
      </Grid>
     <Card />
    </>
  );
}

export default Home;
