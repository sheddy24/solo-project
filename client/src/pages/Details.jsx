import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLaptops } from '../context/laptopContext'; // Adjust the path as needed
import { Card, CardContent, CardMedia, Typography, Box, Container, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components for better design
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  maxWidth: 800,
  margin: 'auto',
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
}));

const ImageContainer = styled(Box)({
  flex: '1 1 50%',
});

const DetailsContainer = styled(Box)({
  flex: '1 1 50%',
  padding: '0 16px',
});

const StyledCardMedia = styled(CardMedia)({
  height: '100%',
  width: '100%',
  objectFit: 'contain',
});

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: theme.spacing(2, 0),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const Details = () => {
  const { id } = useParams(); // Get the laptop ID from the URL
  const { laptops } = useLaptops(); // Get laptops from context
  const laptop = laptops.find((laptop) => laptop.id === id ); // Find the laptop by ID

  const [view, setView] = useState('main'); // Track the current view

  if (!laptop) {
    return <div>Product not found</div>; // Handle case where laptop is not found
  }

  // Determine the image URL based on the current view
  const imageMap = {
    main: laptop.image,
    back: laptop.backview,
    side: laptop.sideview
  };

  return (
    <Container>
      <Box my={4}>
        <StyledCard>
          <ImageContainer>
            <StyledCardMedia
              component="img"
              image={imageMap[view]}
              alt={laptop.productName}
            />
            <ButtonContainer>
              <Button
                variant="outlined"
                onClick={() => setView('main')}
                sx={{ mr: 1 }}
              >
                Main View
              </Button>
              <Button
                variant="outlined"
                onClick={() => setView('back')}
                sx={{ mr: 1 }}
              >
                Back View
              </Button>
              <Button
                variant="outlined"
                onClick={() => setView('side')}
              >
                Side View
              </Button>
            </ButtonContainer>
          </ImageContainer>
          <DetailsContainer>
            <CardContent>
              <StyledTypography variant="h4" component="div" gutterBottom>
                {laptop.productName}
              </StyledTypography>
              <StyledTypography variant="h6" color="textSecondary">
                CPU: {laptop.cpu}
              </StyledTypography>
              <StyledTypography variant="h6" color="textSecondary">
                RAM: {laptop.ram}
              </StyledTypography>
              <StyledTypography variant="h6" color="textSecondary">
                Storage: {laptop.storage}
              </StyledTypography>
              <StyledTypography variant="h6" color="textSecondary">
                Screen: {laptop.screen}
              </StyledTypography>
              <StyledTypography variant="h5" color="textPrimary">
                ${laptop.price}
              </StyledTypography>
              <StyledTypography variant="body1" color="textSecondary">
                {laptop.description}
              </StyledTypography>
            </CardContent>
          </DetailsContainer>
        </StyledCard>
      </Box>
    </Container>
  );
}

export default Details;
