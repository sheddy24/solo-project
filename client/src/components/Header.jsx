import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { useAuth } from '../context/authContext'; // Import Auth Context

import hpLogo from '../logos/hp logo.png';
import lenovoLogo from '../logos/lenovo.png';
import samsungLogo from '../logos/samsung.png';
import sonyLogo from '../logos/sony.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { user, logout } = useAuth(); // Get user and logout function from AuthContext
  const navigate=useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to login page after logout
  };


  const logos = [
    { src: hpLogo, alt: 'HP Logo' },
    { src: lenovoLogo, alt: 'Lenovo Logo' },
    { src: samsungLogo, alt: 'Samsung Logo' },
    { src: sonyLogo, alt: 'Sony Logo' },
  ];

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#000000' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" noWrap>
          Laptop Store
        </Typography>

        {/* Display logos */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {logos.map((logo, index) => (
            <Box
              component="img"
              key={index}
              src={logo.src}
              alt={logo.alt}
              sx={{ height: 40, width: 'auto', marginLeft: 2 }}
            />
          ))}
        </Box>

        {/* Welcome message and Logout button */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2 }}>
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            Welcome, {user ? user.name : 'Guest'}
          </Typography>
          {user && (
            <Button variant="contained" color="secondary" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
