import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  Box,
} from "@mui/material";

import { Link ,useNavigate} from "react-router-dom";


export default function Login() {

  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/home')
  
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 8,
        maxWidth: 400,
        mx: "auto",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" required />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" type="password" required />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          
        >
          Login
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account? <Link to="/register">Register here</Link>
        </Typography>

      </Box>
    </Box>
  );
}
