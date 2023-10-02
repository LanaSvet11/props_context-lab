import React from "react";

const ProductsDisplay = ({ products, onProductClick }) => {
  const handleProductClick = (id) => {
    onProductClick(id);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product.id)}>
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default ProductsDisplay;
