import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, FormControlLabel,Grid, Input, Radio, RadioGroup, Typography, useMediaQuery } from '@mui/material'


const AboutUs = () => {
  
  return (
    <>
    <Grid>
      <Grid style={{backgroundColor:"#FFC72C", height:"150px", textAlign:"center"}}>
        <Typography style={{fontSize:"50px",padding:"2rem"}}>
          ABOUT US
        </Typography>
      </Grid>
      <Grid style={{backgroundColor:"#FFC72C", height:"100px",placeItems:"center",display:"grid",marginBottom:"350px"}}> 
        <img src={require("../components/images/Logo.png")} alt="Your Image" style={{ width: '40%', height: "400px", paddingBottom:"2rem" }} />
      </Grid>
      <Grid style={{backgroundColor:"#FFC72C", padding:"2rem"}}>
        <Typography sx={{px:"3rem",mx:"3rem", fontSize:"20px"}}>
          At AKFs, we're passionate about providing you with the finest quality flour products to elevate your culinary experience. Located at Plot no 1209, Street no 22, Block C, Toor Baba Road, Shershah, Karachi, our store stands as a beacon of quality and reliability in the heart of the city.
        </Typography>
        </Grid>
    </Grid>

    <Grid>
        <Grid style={{padding:"1rem"}}>
        <Typography sx={{fontSize:"20px"}}>
          Our Story:        
        </Typography>
        </Grid>
        <Grid style={{padding:"2rem",backgroundColor:"#FFC72C"}}>
        <Typography sx={{fontSize:"20px"}}>
          Established with a vision to deliver excellence in every grain, AKFs Flour Store has been serving the community with dedication and integrity since our inception. With a legacy spanning years, we have garnered trust and loyalty from our valued customers who rely on us for their flour needs.    
        </Typography>
        </Grid>
        <Grid style={{padding:"1rem"}}>
        <Typography sx={{fontSize:"20px"}}>
          Quality Assurance:     
        </Typography>
        </Grid>
        <Grid style={{padding:"2rem",backgroundColor:"#FFC72C"}}>
        <Typography sx={{fontSize:"20px"}}>
          Quality is at the core of everything we do. We source our flour from trusted suppliers, ensuring that each product meets the highest standards of purity and freshness. Our commitment to quality control extends from procurement to packaging, guaranteeing that every bag of flour that leaves our store is of superior quality.        </Typography>
        </Grid>
        <Grid style={{padding:"1rem"}}>
        <Typography sx={{fontSize:"20px"}}>
          Our Product:        
        </Typography>
        </Grid>
        <Grid style={{padding:"2rem",backgroundColor:"#FFC72C"}}>
        <Typography sx={{fontSize:"20px"}}>
          At AKFs, we offer a diverse range of flour products to cater to the varied needs of our customers. From premium wheat flour to specialized blends, we have something to suit every recipe and preference. Our products undergo rigorous testing to ensure optimal taste, texture, and nutritional value, so you can cook with confidence every time.       
        </Typography>
        </Grid>
        <Grid style={{padding:"1rem"}}>
        <Typography sx={{fontSize:"20px"}}>
          Contact Us:       
        </Typography>
        </Grid>
        <Grid style={{padding:"2rem",backgroundColor:"#FFC72C"}}>
        <Typography sx={{fontSize:"20px"}}>
          We value your feedback and inquiries. Feel free to reach out to us via email at khanammad1818@gmail.com or give us a call at 0341-1269900. Our friendly team is here to assist you with any questions you may have regarding our products or services.     
        </Typography>
        </Grid>
        <Grid style={{padding:"1rem"}}>
        <Typography sx={{fontSize:"20px"}}>
          Visit Us:       
        </Typography>
        </Grid>
        <Grid style={{padding:"2rem",backgroundColor:"#FFC72C",marginBottom:"2rem"}}>
        <Typography sx={{fontSize:"20px"}}>
            Experience the AKFs difference firsthand by visiting our store at Plot no 1209, Street no 22, Block C, Toor Baba Road, Shershah, Karachi. We look forward to welcoming you and serving you with excellence.        </Typography>
        </Grid>

    </Grid>

    </>
  )
}

export default AboutUs;