import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './Product';
import Review from './Review';
import ProductList from './ProductList';
import ProductInfo from './ProductInfo';

function App() {
  return (
    <div className="App">
      <Product />
      <ProductInfo />
      <Review />
      <ProductList />
    </div>
  );
}

export default App;
