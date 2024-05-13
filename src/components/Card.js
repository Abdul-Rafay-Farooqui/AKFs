import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./Other.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cartActions";

const MediaCard = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const addButtonStyle = {
    backgroundColor: "black",
    color: "#557153",
    width: "100%",
    ":hover": { backgroundColor: "#fff", color: "black" },
  };

  const data = [
    {
      id: "1",
      picture: require("./images/last.jpg"),
      orderItem: "Mill Flour 5KG",
      price: 700,
    },
    {
      id: "2",
      picture: require("./images/last.jpg"),
      orderItem: "Mill Flour 10KG",
      price: 1400,
    },
    {
      id: "3",
      picture: require("./images/pexels-klaus-nielsen-6287223.jpg"),
      orderItem: "Fine Flour 5KG",
      price: 650,
    },
    {
      id: "4",
      picture: require("./images/pexels-klaus-nielsen-6287223.jpg"),
      orderItem: "Fine Flour 10KG",
      price: 1300,
    },
  ];
  return (
    <Grid container spacing={2} pb={2} px={2} mt={0.5}>
      {data.map((card) => (
        <Grid item xs={6}>
          <Card
            className="cards"
            sx={{
              maxWidth: 700,
              padding: 0,
              backgroundColor: "#557153",
              boxShadow:
                "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image={card.picture}
              title="Card"
              className="media"
            />
            <CardContent>
              <Typography
                textAlign={"center"}
                gutterBottom
                variant="h5"
                component="div"
                color="black"
              >
                {card.orderItem}
              </Typography>
              <Typography variant="h6" textAlign={"center"} color="black">
                Price : {card.price}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ backgroundColor: "#557153", textAlign: "center" }}
            >
              <Button onClick={() => handleAddToCart(card)} sx={addButtonStyle}>
                <ShoppingCartIcon />
                ADD TO CART
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MediaCard;
