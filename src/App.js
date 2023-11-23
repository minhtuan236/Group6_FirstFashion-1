import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner'; 
import ProductCarousel from './components/ProductCarousel';
import BrandButton from './components/BrandButton';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BrandPage from './components/BrandPage';
//
import ChanelPage from './components/ChanelPage';
function App() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleBrandClick = (brandId) => {
    const element = document.getElementById(brandId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Banner />
        <div className="brand-buttons-container">
          {['JUSTFORYOU', 'Gucci', 'Chanel', 'Hermes'].map(brand => (
            <BrandButton key={brand} brandName={brand} onClick={() => handleBrandClick(brand.toLowerCase())} />
            
          ))}
          <Link to="/chanel" className="brand-button">Chanel</Link> {/* Cập nhật nút này */}
        </div>
        {products.JUSTFORYOU && (
          <div id="justforyou">
            <ProductCarousel products={products.JUSTFORYOU} brand="JUST FOR YOU" />
          </div>
        )}

        {products.Chanel && (
          <div id="chanel">
            <ProductCarousel products={products.Chanel} brand="Chanel" />
          </div>
        )}

        {products.Gucci && (
          <div id="gucci">
            <ProductCarousel products={products.Gucci} brand="Gucci" />
          </div>
        )}
       
        {products.Hermes && (
          <div id="hermes">
            <ProductCarousel products={products.Hermes} brand="Hermes" />
          </div>
        )}
        <Routes>
          <Route path="/brand/:brandName" element={<BrandPage products={products} />} />
          <Route path="/clothes" element={<div>Clothes Page</div>} />
          <Route path="/perfume" element={<div>Perfume Page</div>} />
          <Route path="/shoes" element={<div>Shoes Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/brand/:brandName" element={<BrandPage products={products} />} />
          
        </Routes>
      </div>
    </Router>

     

    //
  );
}

export default App;
