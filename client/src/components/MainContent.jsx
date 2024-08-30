import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function MainContent({ laptops }) {
  return (
    <Grid container spacing={3}>
      {laptops.map((laptop) => (
        <Grid item xs={12} sm={6} md={4} key={laptop.id}>
          <Card>
            <CardMedia
              component="img"
              height="" // Adjust the height to make the image smaller
              image={laptop.image}
              alt={laptop.productName}
              sx={{ objectFit: 'contain' }} // This will ensure the image fits within the specified dimensions
            />
            <CardContent>
              <Typography variant="h6">{laptop.productName}</Typography>
              <Typography variant="body2" color="textSecondary">
                CPU: {laptop.cpu}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                RAM: {laptop.ram}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Storage: {laptop.storage}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Screen: {laptop.screen}
              </Typography>
              <Typography variant="h6">${laptop.price}</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {laptop.description}
              </Typography>
              <Button variant="contained" color="primary" startIcon={<ShoppingCartIcon />}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
