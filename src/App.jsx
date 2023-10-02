import React, { useState } from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

function App() {
  // Move the products array declaration here
  const [products, setProducts] = useState([
    { name: "Laptop", price: 1000, inCart: false },
    { name: "Smartphone", price: 500, inCart: false },
    { name: "Headphones", price: 100, inCart: false },
    { name: "Keyboard", price: 50, inCart: false },
    { name: "Mouse", price: 30, inCart: false },
  ]);

  return (
    <div>
      <h1>My Props App</h1>
      <Navbar products={products} />
      <Routes>
        {/* Pass the products array as a prop to the Products component */}
        <Route path="/" element={<Products products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
