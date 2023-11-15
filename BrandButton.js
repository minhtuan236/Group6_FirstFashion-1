import React from 'react';
import './BrandButton.css'; // Tạo một file CSS riêng cho BrandButton

function BrandButton({ brandName, onClick }) {
  return (
    <button className="brand-button" onClick={onClick}>
      {brandName}
    </button>
  );
}

export default BrandButton;
