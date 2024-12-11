import React from 'react';

const ProductDetails = ({ product }) => {
  if (!product) return <p>Select a product to see details.</p>;

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price} FCFA</p>
    </div>
  );
};

export default ProductDetails;
