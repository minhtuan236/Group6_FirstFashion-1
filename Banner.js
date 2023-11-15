import React from 'react';
import './Banner.css'; // Tạo một file CSS riêng cho Banner

function Banner() {
  return (
    <div className="banner">
      {/* Đây là vị trí để bạn thêm hình ảnh hoặc carousel */}
      <img src="/sanpham/nh1.png" alt="Fashion Banner" />
    </div>
  );
}

export default Banner;
