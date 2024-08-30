import React from 'react';
import { FormControl, InputLabel, Input, Button, Typography, Box } from '@mui/material';

export default function Register() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 8,
        maxWidth: 400,
        mx: 'auto',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Register
      </Typography>
      <Box component="form">
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" required />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" required />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" type="password" required />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
          <Input id="confirm-password" type="password" required />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}
