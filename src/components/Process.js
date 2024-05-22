import { Grid, Typography } from "@mui/material";
import React from "react";
import { baseColor } from "./styles/common";

const Process = () => {
  const data = [
    {
      image: require("../components/images/pexels-pixabay-326082.jpg"),
      content:
        "Wheat, a staple crop, undergoes a fascinating journey from field to table. Farmers begin by planting wheat seeds in prepared soil, using drills pulled by tractors. As the wheat grows, they monitor its health and address any issues. When its time for harvest, mechanical combine harvesters come into play. These efficient machines cut the wheat stalks, separate the grain from the straw, and collect the kernels—all in one operation. The harvested grain is then transported to grain elevators, cleaned, and stored. Ultimately, its processed into flour and other wheat-based products that reach our tables",
    },
    {
      image: require("../components/images/pexels-pixabay-54084.jpg"),
      content:
        "The process of separating grains from wheat involves several steps. First, wheat is harvested using combine harvesters, which cut the wheat and separate the grain from straw. Next, threshing separates the grains from the chaff. The cleaned grains are then processed to remove bran and germ, resulting in granular pieces used for making flour. Finally, the valuable wheat grains are ready for storage or further use",
    },
    {
      image: require("../components/images/milling-processing1.gif"),
      content:
        "Grains are ground in a mill where they pass through a series of rollers or grinding stones. These machines crush the grains into finer particles, gradually breaking down the outer husks and endosperm to produce flour. The milling process involves sifting to separate bran and germ from the flour, ensuring a smooth, consistent texture suitable for baking and cooking",
    },
    {
      image: require("../components/images/last.jpg"),
      content:
        "Once the flour is milled, it is carefully transferred to packaging machines where it is measured and dispensed into bags. These bags are then sealed to maintain freshness and prevent contamination. The sealed bags are labeled with essential information and stacked for distribution, ensuring they are ready for transport to stores or customers",
    },
  ];
  return (
    <Grid paddingTop="3rem">
      <Typography variant="h3" textAlign="center" paddingBottom="4rem">
        PROCESS
      </Typography>
      {data.map((item) => (
        <Grid container key={item} style={{ marginBottom: "2rem" }}>
          <Grid item xs={10} md={6} lg={5} paddingRight="2rem">
            <img
              alt="error"
              style={{
                objectFit: "cover",
                border: "none",
                borderTopRightRadius: "40px",
                borderBottomRightRadius: "40px",
              }}
              src={item.image}
              width="100%"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={7}
            style={{
              backgroundColor: baseColor,
              padding: "30px",
              border: "none",
              borderTopLeftRadius: "40px",
              borderBottomLeftRadius: "40px",
            }}
          >
            <Typography fontSize="20px" textAlign="justify">
              {item.content}
            </Typography>
          </Grid>
        </Grid>
      ))}
      ;
    </Grid>
  );
};

export default Process;
