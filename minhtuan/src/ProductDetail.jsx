// Trong component chứa sản phẩm
import React, { useState, useEffect } from 'react';
import Review from './Review';

function ProductDetails() {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/product.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
  };

  return (
    <div>
      <h2>Product Details</h2>
      {products.map(product => (
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          {/* Render product image here */}
          <button onClick={() => handleProductSelect(product.id)}>Select this product</button>
        </div>
      ))}
      <Review reviews={products.flatMap(product => product.reviewer)} selectedProductId={selectedProductId} />
    </div>
  );
}

export default ProductDetails;
