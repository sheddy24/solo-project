import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useLaptops } from "../context/laptopContext";
import { useCart } from "../context/cartContext";

export default function MainContent() {
  const { laptops } = useLaptops(); // Get laptops from context
  const { addToCart } = useCart(); // Get addToCart function from Cart context

  return (
    <Grid container spacing={3}>
      {laptops.map((laptop) => (
        <Grid item xs={12} sm={6} md={4} key={laptop.id}>
          <Link to={`/product/${laptop.id}`} style={{ textDecoration: 'none' }}>
            <Card>
              <CardMedia
                component="img"
                height="140" // Set a height for the image
                image={laptop.image}
                alt={laptop.productName}
                sx={{ objectFit: "contain" }} // This will ensure the image fits within the specified dimensions
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
                {/* <Typography variant="body2" sx={{ mb: 2 }}>
                  {laptop.description}
                </Typography> */}
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ShoppingCartIcon />}
                  onClick={(event)=>{
                    event.preventDefault(); // Prevent the default link behavior
                    event.stopPropagation();
                    addToCart(laptop)}}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

