import React from "react";
import { Grid, Typography } from "@mui/material";
import Header from "../components/Header";
import ContactUs from "../components/ContactUs.js";
import Process from "../components/Process.js";

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
      width: "100%",
      border: "none",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",
      marginBottom: 0,
      objectFit: "cover",
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
          <Grid item xs={12} sm={6} lg={3}>
            <img
              src={require("../components/images/pexels-pixabay-326082.jpg")}
              alt="sorry can't find an img"
              style={styles.cardImage}
            />
            <Typography style={styles.cardCaptions}>
              Handpicked from fields of golden wheat, our grains embody purity
              and vitality.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <img
              src={require("../components/images/pexels-pixabay-54084.jpg")}
              alt="sorry can't find an img"
              style={styles.cardImage}
            />
            <Typography style={styles.cardCaptions}>
              Meticulously separated, only the plumpest kernels make it into our
              flour.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <img
              src={require("../components/images/milling-processing1.gif")}
              alt="sorry can't find an img"
              style={styles.cardImage}
            />
            <Typography style={styles.cardCaptions}>
              Expertly ground, our ancient tradition meets modern innovation.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <img
              src={require("../components/images/last.jpg")}
              alt="sorry can't find an img"
              style={styles.cardImage}
              width={"100%"}
            />
            <Typography style={styles.cardCaptions}>
              Each package meticulously sealed, preserving freshness and flavor.
            </Typography>
          </Grid>
        </Grid>
        <Process />
        <ContactUs />
      </Grid>
    </>
  );
};

export default AboutUs;
