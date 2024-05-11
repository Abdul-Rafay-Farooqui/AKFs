import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { baseColor } from "./styles/common";

export default function OrderSubmissionModal({ open, setOpen }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    maxWidth: "400px",
    p: 4,
  };
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const onSubmit = () => {
    const data = {
      name: name,
      phone_number: phoneNumber,
      email: email,
      city: city,
      address: address,
    };
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography mb={5}>
          <h2>Place your Order - Shipping Information</h2>
        </Typography>
        <TextField
          label="Name"
          type="text"
          size="small"
          fullWidth
          values={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Phone Number"
          type="text"
          size="small"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Email"
          type="email"
          size="small"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ marginBottom: "1rem" }}
        />
        <InputLabel id="demo-select-small-label">City</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          fullWidth
          size="small"
          value={city}
          type="text"
          onChange={(e) => setCity(e.target.value)}
          sx={{ marginBottom: "1rem" }}
        >
          <MenuItem value="Karachi">Karachi</MenuItem>
        </Select>
        <TextField
          type="text"
          label="Address"
          size="small"
          fullWidth
          multiline
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          sx={{ marginBottom: "1rem" }}
        />

        <Button
          sx={{
            width: "100%",
            backgroundColor: "#557153",
            color: "black",
            marginTop: "20px",
            ":hover": { color: "#557153", backgroundColor: baseColor },
          }}
          onClick={onSubmit}
        >
          Place Order
        </Button>
      </Box>
    </Modal>
  );
}
