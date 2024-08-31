//import React, { useState } from 'react';
import { Box, Toolbar } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
export default function Home() {
  

  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <MainContent />
      </Box>
    </Box>
  );
}
