import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoPersonOutline } from 'react-icons/io5';
import { PiShoppingCart } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';



function AdvancedButton({ clicked, showLoginForm, onAccountClick, countCartItems }) {
  const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate('/account');
    onAccountClick();
  };


  return (
    <div className={`home-advanced-button ${clicked ? 'clicked' : ''}`}>
      <IoIosSearch className={`home-advanced-detail-button ${clicked ? 'clicked' : ''}`} />

      
      <IoPersonOutline className={`home-advanced-detail-button ${clicked ? 'clicked' : ''}`}
        onClick={handleAccountClick} />


      <PiShoppingCart className={`home-advanced-detail-button ${clicked ? 'clicked' : ''}`}
        style={{ fontSize: '125%' }} 
        onClick={() => navigate('/cart')}
      />

    </div>
  );
}

export default AdvancedButton;
