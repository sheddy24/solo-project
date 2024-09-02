import React from 'react';
import { useCart } from '../context/cartContext'; // Adjust the path as needed
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart(); // Get cart items and remove function from context

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  if (cartItems.length === 0) {
    return <Typography variant="h6" align="center">Your cart is empty.</Typography>;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.map((item) => (
        <Card sx={{ display: 'flex', marginBottom: 2 }} key={item.id}>
          <CardMedia
            component="img"
            sx={{ width: 150 }}
            image={item.image}
            alt={item.productName}
          />
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="h6">{item.productName}</Typography>
            <Typography variant="body2" color="textSecondary">
              CPU: {item.cpu}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              RAM: {item.ram}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Storage: {item.storage}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Screen: {item.screen}
            </Typography>
            <Typography variant="h6" color="textPrimary">
              ${item.price}
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => removeFromCart(item.id)}
              sx={{ marginTop: 2 }}
            >
              Remove from Cart
            </Button>
          </CardContent>
        </Card>
      ))}
      <Typography variant="h5" align="center" sx={{ marginTop: 3 }}>
        Total: ${totalPrice.toFixed(2)}
      </Typography>

    </Box>
  );
}
