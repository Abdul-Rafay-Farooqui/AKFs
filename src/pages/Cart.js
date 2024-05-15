import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  empty,
  decQty,
  incQty,
  removeFromCart,
} from "../redux/reducers/cartActions";
import { addToCart } from "../redux/reducers/cartActions";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Button,
  colors,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Close from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/system";
import "../components/Other.css";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import { red } from "@mui/material/colors";
import OrderSubmissionModal from "../components/OrderSubmissionModal";

const CartPage = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
});

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items) || [];
  const total = useSelector((state) => state.cart.total) || 0;
  const shipping = useSelector((state) => state.cart.shipping) || 0;
  const discount = useSelector((state) => state.cart.discount) || 0;
  const tax = useSelector((state) => state.cart.tax) || 0;
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

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

  const handleOpen = () => setOpen(true);

  return (
    <>
      <OrderSubmissionModal open={open} setOpen={setOpen} />
      <Grid container paddingTop="3rem">
        <Grid item xs={12} lg={cartItems.length > 0 ? 8 : 12} px={2}>
          <CartPage
            sx={{
              backgroundColor: "#557153",
              my: "2rem",
              mx: "auto",
              p: "2rem",
              borderRadius: "5px",
            }}
          >
            <Typography fontSize={{ lg: "32px", xs: "20px" }} color={"black"}>
              Your Shopping Cart
            </Typography>
            <Grid container>
              <List sx={{ color: "black", pt: "2rem", width: "100%" }}>
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <ListItem
                      key={item.id}
                      sx={{ borderBottom: "solid", width: "100%", padding: 0 }}
                    >
                      <Grid item xs={2} sx={{ ml: { xs: 0 } }}>
                        <ListItemAvatar>
                          <Avatar
                            alt={item.name}
                            src={item.picture}
                            sx={{
                              width: { lg: "4rem", sx: "1rem" },
                              height: { lg: "4rem", sx: "1rem" },
                              mr: "2rem",
                              mb: "0.5rem",
                              my: "0.5rem",
                            }}
                          />
                        </ListItemAvatar>
                      </Grid>
                      <Grid item xs={6} ml={1}>
                        <Typography fontSize={{ lg: "25px", xs: "h3" }}>
                          {item.name}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Add
                          onClick={() => handleAdd(item)}
                          sx={{
                            backgroundColor: "#fff",
                            color: "#242424",
                            borderRadius: "5px",
                            ":hover": { color: "black", bgcolor: "black" },
                          }}
                        />
                        <Typography
                          sx={{
                            px: { xs: "2px", lg: "1rem" },
                            py: "0.5rem",
                            fontSize: { xs: "12px", lg: "18px" },
                          }}
                        >
                          {item.quantity}
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

                      <Grid item xs={3} sx={{ textAlign: "right" }}>
                        <Typography fontSize={{ lg: "20px", xs: "h3" }}>
                          {item.total_item_price}.Rs
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={0}
                        sm={3}
                        sx={{
                          textAlign: "right",
                          display: { xs: "none", sm: "block" },
                        }}
                      >
                        <IconButton
                          onClick={() => handleDelete(item.id)}
                          aria-label="delete"
                        >
                          {<Close sx={{ color: "#fff" }} />}
                        </IconButton>
                      </Grid>
                    </ListItem>
                  ))
                ) : (
                  <Typography
                    sx={{ textAlign: "center", paddingBottom: "10rem" }}
                  >
                    <h4>Cart is Empty</h4>
                  </Typography>
                )}
              </List>
            </Grid>
          </CartPage>
        </Grid>
        {cartItems.length > 0 && (
          <Grid item xs={12} lg={4} pr={2} mx={"auto"}>
            <CartPage
              sx={{
                backgroundColor: "#557153",
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
                      {total}.Rs
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={11} color={"black"}>
                      Shipping
                    </Grid>
                    <Grid item xs={1} color={"black"}>
                      {shipping + 70}.Rs
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={11} color={"black"}>
                      Discount%
                    </Grid>
                    <Grid item xs={1} color={"black"}>
                      {discount}.Rs
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={11} color={"black"}>
                      Tax
                    </Grid>
                    <Grid item xs={1} color={"black"}>
                      {tax}.Rs
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={11} color={"black"}>
                      Total Bill
                    </Grid>
                    <Grid item xs={1} color={"black"}>
                      {total + 70}.Rs
                    </Grid>
                    <Grid item xs={12} marginTop={4} textAlign={"center"}>
                      <Button
                        onClick={handleOpen}
                        sx={{
                          bgcolor: "#fff",
                          color: "#242424",
                          ":hover": { color: "#fff" },
                        }}
                      >
                        Continue
                      </Button>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </CartPage>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Cart;
