import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Toolbar, Box, List, ListItem, ListItemIcon, ListItemText, Badge } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/cartContext';

export default function Sidebar() {
  const { cartItems } = useCart();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button>
            <ListItemIcon sx={{ minWidth: 40 }}> {/* Adjusted icon size */}
              <HomeIcon sx={{ fontSize: 30 }} /> {/* Increased icon size */}
            </ListItemIcon>
            <ListItemText
              primary="Home"
              primaryTypographyProps={{ fontSize: '1.25rem' }} 
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <InfoIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
            <ListItemText
              primary="About"
              primaryTypographyProps={{ fontSize: '1.25rem' }}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <ContactMailIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
            <ListItemText
              primary="Contact"
              primaryTypographyProps={{ fontSize: '1.25rem' }}
            />
          </ListItem>

          <ListItem button component={Link} to="/cart">
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Badge badgeContent={cartItems.length} color="primary">
              <ShoppingCartIcon sx={{ fontSize: 30 }} />
              </Badge>
            </ListItemIcon>
            <ListItemText
              primary="Cart"
              primaryTypographyProps={{ fontSize: '1.25rem' }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
