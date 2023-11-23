// ChanelPage.js

import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import ProductCarousel from './ProductCarousel';

const ChanelPage = () => {
  const [chanelProducts, setChanelProducts] = useState({ perfume: [], clothes: [], shoes: [] });

  useEffect(() => {
    // Đảm bảo rằng file JSON có đường dẫn chính xác
    fetch('/data/chanelProducts.json')
      .then(response => response.json())
      .then(data => setChanelProducts(data));
  }, []);

  return (
    <div>
      <Banner />
      <div className="product-categories">
        {/* Thêm nút để chuyển đến các loại sản phẩm */}
        <button onClick={() => {/* Logic chuyển đến perfume */}}>Perfume</button>
        <button onClick={() => {/* Logic chuyển đến clothes */}}>Clothes</button>
        <button onClick={() => {/* Logic chuyển đến shoes */}}>Shoes</button>
      </div>
      {/* ProductCarousel cho từng loại sản phẩm */}
      <ProductCarousel products={chanelProducts.perfume} brand="Perfume" />
      <ProductCarousel products={chanelProducts.clothes} brand="Clothes" />
      <ProductCarousel products={chanelProducts.shoes} brand="Shoes" />
    </div>
  );
};

export default ChanelPage;
