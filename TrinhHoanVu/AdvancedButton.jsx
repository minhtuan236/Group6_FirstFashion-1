import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoPersonOutline } from 'react-icons/io5';
import { PiShoppingCart } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

function AdvancedButton({ clicked, showLoginForm, onAccountClick }) {
  const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate('/account');
    onAccountClick(); // Gọi hàm callback từ prop để cập nhật trạng thái LoginForm
  };

  return (
    <div className={`home-advanced-button ${clicked ? 'clicked' : ''}`}>
      <button className={`home-advanced-detail-button ${clicked ? 'clicked' : ''}`}>
        <IoIosSearch />
      </button>
      <button className={`home-advanced-detail-button ${clicked ? 'clicked' : ''}`}
        onClick={handleAccountClick}
      >
        <IoPersonOutline />
      </button>
      <button
        className={`home-advanced-detail-button ${clicked ? 'clicked' : ''}`}
        style={{ fontSize: '125%' }}

      >
        <PiShoppingCart />
      </button>
    </div>
  );
}

export default AdvancedButton;
