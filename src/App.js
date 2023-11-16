import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './Product';
import Review from './Review';
import ProductList from './ProductList';
import Footer from './Footer';
import ProductInfo from './ProductInfo';

function App() {
  return (
    <div className="App">
      <img src="/image/LOGO.jpg" alt="logo" className='logo'/>
      <Product />
      <ProductInfo />
      <Review />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
