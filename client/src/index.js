import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LaptopProvider } from "./context/laptopContext";
import { CartProvider } from "./context/cartContext";
import { AuthProvider } from "./context/authContext";
//import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <CartProvider>
      <LaptopProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </LaptopProvider>
    </CartProvider>
  </AuthProvider>
);
