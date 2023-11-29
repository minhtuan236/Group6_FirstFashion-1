import Product from "./Product";
import { useState, useEffect } from 'react';

function ProductList() {
    
    const [products, setProducts] = useState([]);
    
    const getProducts = () => {
        fetch("/data/product.json")
        .then((data) =>data.json())
        .then((productList) => setProducts(productList));
    }
    useEffect(() => getProducts(), []);
    
    return ( 
        <div className="user-container-list" >
            {products.map( (product, index) => <Product 
                                            id={product.id}
                                            name={product.name} 
                                            image={product.image} 
                                            price={product.price}                              
                                            key={index} 
                                            /> )}
        </div>
     );
}

export default ProductList;