import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { baseColor } from "../components/styles/common";
import Header from "../components/Header";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const AboutUs = () => {
  const description =
    "At AKFs, we're passionate about providing you with the finest quality flour products to elevate your culinary experience. Located at Plot no 1209, Street no 22, Block C, Toor Baba Road, Shershah, Karachi, our store stands as a beacon of quality and reliability in the heart of the city.";
  const styles = {
    cardCaptions: {
      fontSize: "18px",
      backgroundColor: "#557153",
      color: "white",
      padding: "1.5rem",
      marginTop: 0,
      border: "none",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      height: "100px",
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
    },
    cardImage: {
      height: "200px",
      border: "none",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",
      marginBottom: 0,
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
    },
  };

  return (
    <>
      <Header title={"ABOUT US"} subtitle={description} />
      <Grid>
        <Grid
          style={{ padding: "1rem", textAlign: "center", marginBottom: "2rem" }}
        >
          <Typography variant="h3">Wheat Milling Process Flow</Typography>
        </Grid>
        <Grid
          container
          spacing={3}
          style={{
            padding: "2rem",
            marginBottom: "1rem",
          }}
        >
          <Grid item xs={3}>
            <img
              src={require("../components/images/pexels-pixabay-326082.jpg")}
              style={styles.cardImage}
            />
            <Typography style={styles.cardCaptions}>
              Handpicked from fields of golden wheat, our grains embody purity
              and vitality.
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <img
              src={require("../components/images/pexels-pixabay-54084.jpg")}
              style={styles.cardImage}
            />
            <Typography style={styles.cardCaptions}>
              Meticulously separated, only the plumpest kernels make it into our
              flour.
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <img
              src={require("../components/images/milling-processing1.gif")}
              style={styles.cardImage}
            />
            <Typography style={styles.cardCaptions}>
              Expertly ground, our ancient tradition meets modern innovation.
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <img
              src={require("../components/images/last.jpg")}
              style={styles.cardImage}
              width={"100%"}
            />
            <Typography style={styles.cardCaptions}>
              Each package meticulously sealed, preserving freshness and flavor.
            </Typography>
          </Grid>
        </Grid>
        <Grid style={{ padding: "1rem", textAlign: "center" }}>
          <Typography variant="h3">Visit Us</Typography>
        </Grid>

        <Grid
          style={{
            padding: "2rem 10rem",
            marginBottom: "2rem",
          }}
        >
          <Grid container mx={"10rem"}>
            <LocationOnIcon item xs={5} sx={{ fontSize: "40px" }} />
            <Typography variant="h6" item xs={7} padding={"0.5rem 1rem"}>
              Plot no 1209, Street no 22, Block C, Toor Baba Road, Shershah,
              Karachi.
            </Typography>
          </Grid>
          <Grid container mx={"10rem"}>
            <CallIcon item xs={5} sx={{ fontSize: "40px" }} />
            <Typography variant="h6" item xs={7} padding={"0.5rem 1rem"}>
              0341 126 9900
            </Typography>
          </Grid>
          <Grid container mx={"10rem"}>
            <EmailIcon item xs={5} sx={{ fontSize: "40px" }} />
            <Typography variant="h6" item xs={7} padding={"0.5rem 1rem"}>
              khanammad1818@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
