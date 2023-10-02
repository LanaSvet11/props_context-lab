import React from "react";

const Cart = ({ products }) => {
  // Filter the products to display only those in the cart
  const cartProducts = products.filter((product) => product.inCart);

  return (
    <div>
      {/* Display products that are in the cart */}
      {cartProducts.map((product) => (
        <div key={product.id}>
          {product.name} - ${product.price}
        </div>
      ))}
    </div>
  );
};

export default Cart;
