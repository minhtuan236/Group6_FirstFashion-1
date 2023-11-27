// ProductItem.js
import React from 'react';
import './ProductItem.css'; // Đảm bảo bạn cũng có một file CSS cho component này nếu cần

function ProductItem({ product, clicked, onAdd }) {
  return (
    <div className="product-item">
      <div className='banner'></div>
      <img src={product.image} alt={product.name} />
      <h3 className={`product-name  ${clicked ? 'clicked' : ''}`}>{product.name}</h3>
      <p className={`product-price ${clicked ? 'clicked' : ''}`}>{product.price}</p> {/* Giá tiền */}
      <button onClick={onAdd}>Add to chart</button>
    </div>
  );
}

export default ProductItem;
