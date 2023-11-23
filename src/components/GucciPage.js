import React, { useState, useEffect } from 'react';
import Banner from './Banner'; // Sử dụng lại component Banner
import ProductCarousel from './ProductCarousel';


const ChanelPage = () => {
  const [products, setProducts] = useState({ perfume: [], clothes: [], shoes: [] });

  useEffect(() => {
    // Thay đổi đường dẫn tới file JSON tùy theo cấu trúc thư mục của bạn
    fetch('/path/to/chanelProducts.json') 
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <Banner />
      <ProductCarousel products={products.perfume} brand="Perfume" />
      <ProductCarousel products={products.clothes} brand="Clothes" />
      <ProductCarousel products={products.shoes} brand="Shoes" />
    </div>
  );
};

export default ChanelPage;
