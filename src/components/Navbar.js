import React from 'react';
import './Navbar.css'; // Tạo một file CSS riêng cho Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">FIRST FASHION</div>
      <div className="nav-links">
        <a href="/clothes">CLOTHES</a>
        <a href="/perfume">PERFUME</a>
        <a href="/shoes">SHOES</a>
        <a href="/about">ABOUT FIRST FASHION</a>
      </div>
    </nav>
  );
}

export default Navbar;
