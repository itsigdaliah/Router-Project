import React from 'react';

const ProductList = ({ products, onSelect }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card" onClick={() => onSelect(product)}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price} FCFA</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
