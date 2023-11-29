import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductList from './ProductList';
import { Link, Route, Routes } from "react-router-dom";
import ProductAll from './ProductAll'


function App() {
  return (
    <div className="productview-app">
        <Link to="/products" className='link'>ProductList</Link>
        <Routes>
          <Route path='/products' element={<ProductList />}></Route>
          <Route path='/products/:id' element={<ProductAll />}></Route>
        </Routes>
    </div>
  );
  
}

export default App;