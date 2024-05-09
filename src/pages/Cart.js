import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  empty,
  decQty,
  incQty,
  removeFromCart,
} from "../redux/reducers/cartActions";
import { addToCart } from "../redux/reducers/cartActions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, List, ListItem, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Close from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/system";
import "../components/Other.css";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import { red } from "@mui/material/colors";

const CartPage = styled("div")({
  marginTop: "20px",
});

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items) || [];
  const total = useSelector((state) => state.cart.total) || 0;
  const shipping = useSelector((state) => state.cart.shipping) || 0;
  const discount = useSelector((state) => state.cart.discount) || 0;
  const tax = useSelector((state) => state.cart.tax) || 0;

  const data = [
    {
      id: "1",
      picture: require("../components/images/pexels-klaus-nielsen-6287223.jpg"),
      name: "Fine Flour 5kg",
      price: 325,
    },
    {
      id: "2",
      picture: require("../components/images/pexels-pexelsgoodboy-3218467.jpg"),
      name: "Fine Flour 10kg",
      price: 650,
    },
  ];
  const data2 = [
    {
      id: "3",
      picture: require("../components/images/pexels-klaus-nielsen-6287223.jpg"),
      name: "Mill Flour 5kg",
      price: 350,
    },
    {
      id: "4",
      picture: require("../components/images/pexels-pexelsgoodboy-3218467.jpg"),
      name: " Mill 10kg",
      price: 700,
    },
  ];

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDelete = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleRemove = (itemId, itemQuantity) => {
    dispatch(decQty(itemId));
    if (itemQuantity - 1 == 0) {
      handleDelete(itemId);
    }
  };

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const handleEmpty = () => {
    dispatch(empty());
  };

  const cardStyle = {
    maxWidth: 300,
    padding: 2,
    backgroundColor: "#242424",
    hover: {
      transform: "scale(1.02)",
    },
  };

  const cardMediaStyle = {
    height: 70,
  };

  const addButtonStyle = {
    backgroundColor: "#fff",
    color: "#242424",
    width: "100%",
    ":hover": { backgroundColor: "#242424", color: "#fff" },
  };

  const productNameStyle = {
    color: "#fff",
    textAlign: "center",
    pt: "5px",
  };

  const productPriceStyle = {
    color: "#fff",
    marginLeft: "43%",
  };

  const gridItemStyle = {
    marginBottom: "10px",
  };

  return (
    <Grid container>
      <Grid item xs={12} lg={8} px={2}>
        <CartPage
          sx={{
            backgroundColor: "#FFC72C",
            my: "2rem",
            mx: "auto",
            p: "2rem",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Typography
            fontSize={{ lg: "25px", xs: "23px" }}
            pb={4}
            color="black"
          >
            Your Shopping Cart
          </Typography>
          <Grid container spacing={2} p={2}>
            {data.map((card, item) => (
              <Grid key={card.name} container pb={3}>
                <Grid item xs={3}>
                  <img
                    src={card.picture}
                    alt="Your Image"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body1">{card.name}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Grid container>
                    <Add
                      item
                      xs={3}
                      onClick={() => handleAdd(item)}
                      sx={{
                        backgroundColor: "#fff",
                        color: "#242424",
                        borderRadius: "5px",
                        ":hover": { color: "black", bgcolor: "black" },
                      }}
                    />
                    <Typography
                      item
                      px={2}
                      xs={6}
                      sx={{
                        color: "black",
                      }}
                    >
                      {/* {item.quantity} */}0
                    </Typography>
                    <Remove
                      onClick={() => handleRemove(item.id, item.quantity)}
                      sx={{
                        backgroundColor: "#fff",
                        color: "#242424",
                        borderRadius: "5px",
                        ":hover": { color: "black", bgcolor: "black" },
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid items xs={2}>
                  <Typography variant="boby2">${card.price}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </CartPage>
      </Grid>

      <Grid item xs={12} lg={4} pr={2} mx={"auto"}>
        <CartPage
          sx={{
            backgroundColor: "#FFC72C",
            my: "2rem",
            p: "2rem",
            borderRadius: "5px",
            marginLeft: "1rem",
            maxWidth: { sm: "50%", lg: "100%" },
          }}
        >
          <Typography variant="h2" color={"black"}>
            Checkout
          </Typography>
          <List>
            <ListItem>
              <Grid container>
                <Grid item xs={11} color={"black"}>
                  Order Total
                </Grid>
                <Grid item xs={1} color={"black"}>
                  ${total}
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container>
                <Grid item xs={11} color={"black"}>
                  Shipping
                </Grid>
                <Grid item xs={1} color={"black"}>
                  ${shipping}
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container>
                <Grid item xs={11} color={"black"}>
                  Discount%
                </Grid>
                <Grid item xs={1} color={"black"}>
                  ${discount}
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container>
                <Grid item xs={11} color={"black"}>
                  Tax
                </Grid>
                <Grid item xs={1} color={"black"}>
                  ${tax}
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container>
                <Grid item xs={11} color={"black"}>
                  Total Bill
                </Grid>
                <Grid item xs={1} color={"black"}>
                  ${total}
                </Grid>
                <Grid item xs={12} marginTop={4} textAlign={"center"}>
                  <Button
                    onClick={handleEmpty}
                    sx={{
                      bgcolor: "#fff",
                      color: "#242424",
                      ":hover": { color: "#fff" },
                    }}
                  >
                    PlaceOrder
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </CartPage>
      </Grid>
    </Grid>
  );
};

export default Cart;

{
  /* 
            {cartItems.length > 0 ? (
            cartItems.map(item => (
              <ListItem key={item.id} sx={{ borderBottom:"solid", width:"100%", padding: 0 }}>
                <Grid item xs={2} sx={{ml:{xs:0}}}>
                <ListItemAvatar >
                  <Avatar alt={item.name} src={item.picture} sx={{width:{lg:"4rem", sx:"1rem"}, height:{lg:"4rem" , sx:"1rem"}, mr:"2rem", mb:"0.5rem" ,my:"0.5rem"}} />
                </ListItemAvatar>
                </Grid>
                <Grid item xs={5} ml={1}>
                <Typography fontSize={{lg:"36px",xs:"12px"}}>
                  {item.name}
                </Typography>
                </Grid>
                <Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <Add onClick={() => handleAdd(item)} sx={{ backgroundColor: "#fff", color: "#242424", borderRadius: "5px", ":hover": { color: "black", bgcolor: "black" } }} />
                  <Typography sx={{ px: { xs: "2px", lg: "1rem" }, py: "0.5rem", fontSize: { xs: "12px", lg: "18px" } }}>{item.quantity}</Typography>
                  <Remove onClick={() => handleRemove(item.id, item.quantity)} sx={{ backgroundColor: "#fff", color: "#242424", borderRadius: "5px", ":hover": { color: "black", bgcolor: "black" } }} />
                  </Grid>

                <Grid item xs={3} sx={{textAlign: "right"}}>
                <Typography>${item.total_item_price}</Typography>
                </Grid>
                <Grid item xs={0} sm={3} sx={{textAlign: "right", display:{xs:"none",sm:"block"}}}>
                <IconButton onClick={() => handleDelete(item.id)} aria-label="delete">
                  { <Close sx={{color:"#fff"}} /> }
                </IconButton>
                </Grid>

              </ListItem>
            ))
            ):(
              <Typography sx={{textAlign:"center",paddingBottom:"10rem"}}><h4>Cart is Empty</h4></Typography>
            )
          }
                
          </List>
          </Grid>
        </CartPage>
      </Grid>
      {cartItems.length>0 &&
      <Grid item xs={12} lg={4} pr={2} mx={"auto"}>
        <CartPage sx={{ backgroundColor:"#242424" ,my:"2rem", p:"2rem", borderRadius:"5px", marginLeft:"1rem", maxWidth:{sm: "50%", lg: "100%"} }}>
          <Typography variant="h2" color={"black"} >Checkout</Typography>
          <List>
            <ListItem>
              <Grid container>
                <Grid item xs={11} color={"black"}>
                  Order Total
                </Grid>
                <Grid item xs={1} color={"black"}>
                  ${total}
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container>
                <Grid item xs={11} color={"black"}>
                  Shipping
                </Grid>
                <Grid item xs={1} color={"black"}>
                  ${shipping}
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container>
                <Grid item xs={11} color={"black"}>
                  Discount%
                </Grid>
                <Grid item xs={1} color={"black"}>
                  ${discount}
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container>
                <Grid item xs={11} color={"black"}>
                  Tax
                </Grid>
                <Grid item xs={1} color={"black"}>
                  ${tax}
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container>
                <Grid item xs={11} color={"black"}>
                  Total Bill
                </Grid>
                <Grid item xs={1} color={"black"}>
                  ${total}
                </Grid>
                <Grid item xs={12} marginTop={4} textAlign={"center"}>
                  <Button onClick={handleEmpty} sx={{bgcolor:"#fff",color:"#242424", ":hover":{color:"#fff"}}}>
                    PlaceOrder
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </CartPage> */
}
