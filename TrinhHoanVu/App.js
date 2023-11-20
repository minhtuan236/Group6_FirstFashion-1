import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';
import Clothes from './Clothes';
import BackToTopButton from "./BackToTopButton";
import ContrastButton from './ContrastButton';
import React, { useState } from 'react';
import Footer from './Footer';
import AdvancedButton from './AdvancedButton';
import Account from './Account';

function App() {
  const [value, setValue] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
  };

  const handleToggleContrast = () => {
    setValue(!value);
  };

  const handleAccountClick = () => {
    setShowLoginForm(true);
  }


  return (
    <div className={`App ${value ? 'contrast-mode' : ''} ${clicked ? 'clicked' : ''}`}>
      <AdvancedButton clicked={clicked} showLoginForm={showLoginForm} onAccountClick={handleAccountClick} />
      <div className={`home-toolbar  ${clicked ? 'clicked' : ''}`}>
        <div className={`home-navbar ${clicked ? 'clicked' : ''}`}>
          <Link to="/" className={`logo ${clicked ? 'clicked' : ''}`}><h1 className={`home-logotext ${clicked ? 'clicked' : ''}`}>FIRST FASHION</h1></Link>

          <div className={`home-nav ${clicked ? 'clicked' : ''}`}>
            <Link to="/"><h4 className={`home-nav-name ${clicked ? 'clicked' : ''}`}>HOME</h4></Link>
            <Link to="/clothes"><h4 className={`home-nav-name ${clicked ? 'clicked' : ''}`}>CLOTHES</h4></Link>
            <Link to="/perfume"><h4 className={`home-nav-name ${clicked ? 'clicked' : ''}`}>PERFUME</h4></Link>
            <Link to="/shoes"><h4 className={`home-nav-name ${clicked ? 'clicked' : ''}`}>SHOES</h4></Link>

            <Link to="/aboutus"><h4 className={`home-nav-name ${clicked ? 'clicked' : ''}`}>ABOUT FIRST FASHION</h4></Link>
          </div>
          <div className={`home-line-nav  ${clicked ? 'clicked' : ''}`}></div>
        </div>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/clothes' element={<Clothes />}></Route>
          <Route path='/perfume'></Route>
          <Route path='/shoes'></Route>
          <Route path='/chanel'></Route>
          <Route path='/gucci' element={<Clothes />}></Route>
          <Route path='/hermes'></Route>
          <Route path='/account' element={<Account showLoginForm={showLoginForm} />}></Route>
        </Routes>
      </div>
      <Footer clicked={clicked} value={value} />
      <BackToTopButton />
      <ContrastButton isOn={value}
        handleToggle={handleToggleContrast}
        onClick={handleButtonClick}
        clicked={clicked}
      />
      <br /><br />
    </div>
  );
}

export default App;
