import React from 'react';
import Slider from 'react-slick';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import './ProductCarousel.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// Mũi tên tùy chỉnh cho Slick
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-next`}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-prev`}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

// Cài đặt cho Slider
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024, // Dưới 1024px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600, // Dưới 600px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480, // Dưới 480px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const ProductCarousel = ({ products, brand }) => {
  const brandPath = `/brand/${brand.toLowerCase()}`; // Tạo đường dẫn dựa trên tên thương hiệu

  return (
    <div className="product-carousel">
      <h2>{brand}</h2>
      <Slider {...settings}>
        {products.map((product, idx) => (
          <ProductItem key={idx} product={product} />
        ))}
      </Slider>
      {/* Nút "See All" */}
      <div className="see-all-container">
        <Link to={brandPath} className="see-all-link">See All</Link>
      </div>
    </div>
  );
};

export default ProductCarousel;
