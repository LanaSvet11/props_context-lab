import React, { useState } from "react";
import ProductsDisplay from "../../components/ProductsDisplay";

const Products = () => {
  // Define the products array and handleProductClick function here
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1000, inCart: false },
    { id: 2, name: "Smartphone", price: 500, inCart: false },
    { id: 3, name: "Headphones", price: 100, inCart: false },
    { id: 4, name: "Keyboard", price: 50, inCart: false },
    { id: 5, name: "Mouse", price: 30, inCart: false },
  ]);

  const handleProductClick = (id) => {
    // Update the state to mark the product as inCart
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, inCart: true } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>This is the Products Page!</h1>
      {/* Pass the products array and handleProductClick function as props */}
      <ProductsDisplay
        products={products}
        onProductClick={handleProductClick}
      />
    </div>
  );
};

export default Products;
