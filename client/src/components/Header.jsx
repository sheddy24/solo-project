import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
//import appleLogo from '../logos/apple.jpeg';
//import dellLogo from '../logos/dell.jpg';
import hpLogo from '../logos/hp logo.png';
import lenovoLogo from '../logos/lenovo.png';
import samsungLogo from '../logos/samsung.png';
import sonyLogo from '../logos/sony.png';

export default function Header() {
  const logos = [
    // { src: appleLogo, alt: 'Apple Logo' },
    // { src: dellLogo, alt: 'Dell Logo' },
    { src: hpLogo, alt: 'HP Logo' },
    { src: lenovoLogo, alt: 'Lenovo Logo' },
    { src: samsungLogo, alt: 'Samsung Logo' },
    { src: sonyLogo, alt: 'Sony Logo' },
  ];

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#000000' }}> {/* Adjust backgroundColor as needed */}
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" noWrap>
          Laptop Store
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {logos.map((logo, index) => (
            <Box
              component="img"
              key={index}
              src={logo.src}
              alt={logo.alt}
              sx={{ height: 40, width: 'auto', marginLeft: 2 }} // Adjust as needed
            />
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}