// File: components/BrandPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';

const BrandPage = ({ products }) => {
  const { brandName } = useParams();
  const brandProducts = products[brandName] || [];

  return (
    <div>
      <h1>{brandName.charAt(0).toUpperCase() + brandName.slice(1)}</h1>
      <div className="brand-products">
        {brandProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
