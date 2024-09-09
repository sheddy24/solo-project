
import { Link } from 'react-router-dom';
import { Drawer, Toolbar, Box, List, ListItem, ListItemIcon, ListItemText, Badge, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/cartContext';
import { useAuth } from '../context/authContext'; // Import the AuthContext

export default function Sidebar() {
  const { cartItems } = useCart();
  const { user } = useAuth(); // Get the user from the AuthContext

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
      <Box sx={{ overflow: 'auto', p: 2 }}>
        {/* Display welcome message */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Happy Shopping, {user ? user.name : 'Guest'}!
        </Typography>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon sx={{ minWidth: 40 }}>
              <HomeIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              primaryTypographyProps={{ fontSize: '1.25rem' }}
            />
          </ListItem>
          <ListItem button component={Link} to="/about">
            <ListItemIcon sx={{ minWidth: 40 }}>
              <InfoIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
            <ListItemText
              primary="About"
              primaryTypographyProps={{ fontSize: '1.25rem' }}
            />
          </ListItem>
          <ListItem button component={Link} to="/contact">
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
