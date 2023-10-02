import React from "react";
import { Route, Routes } from "react-router-dom";

const Navbar = ({ products }) => {
  // Access the products array through the props

  return (
    <div>
      <div>Random Product: {products[0].name}</div>
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Navbar;
