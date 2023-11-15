// ProductItem.js
import React from 'react';
import './ProductItem.css'; // Đảm bảo bạn cũng có một file CSS cho component này nếu cần

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductItem;
