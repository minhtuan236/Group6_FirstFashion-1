import React from 'react';
import Slider from 'react-slick';
import './ProductCarousel.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import ProductItem from './ProductItem'; // Đảm bảo đường dẫn đến file đúng

// Mũi tên tùy chỉnh cho Slick
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-next`}
      style={{ ...style, display: 'block', background: 'red' }} // Tùy chỉnh style ở đây
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-prev`}
      style={{ ...style, display: 'block', background: 'green' }} // Tùy chỉnh style ở đây
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
};

// Component ProductCarousel
function ProductCarousel({ products, brand }) {
  return (
    <div className="product-carousel">
      <h2>{brand}</h2>
      <Slider {...settings}>
        {products.map((product, idx) => (
          // Giả sử ProductItem là component của bạn để hiển thị từng sản phẩm
          <ProductItem key={idx} product={product} />
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;
