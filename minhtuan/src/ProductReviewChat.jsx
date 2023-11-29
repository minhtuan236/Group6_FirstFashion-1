import Review from "./Review";
import { useState, useEffect } from 'react';




function ProductList() {
    

    const [reviews, setProducts] = useState([]);
    
    const getProducts = () => {
        fetch("https://653f52019e8bd3be29e0421c.mockapi.io/reviewer")
        .then((data) =>data.json())
        .then((productList) => setProducts(productList));
    }

    //ham delete

    useEffect(() => getProducts(), []);
    
    return ( 
        <div className="review-chat" >
            {reviews.map( (reviewer, index) => <Review 
                                            user={reviewer.user} 
                                            review={reviewer.review} 
                                            rating={reviewer.rating}                              
                                            key={index} 
                                            /> )}
        </div>
     );
}

export default ProductList;