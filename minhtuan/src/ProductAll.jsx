import './App.css';
import ProductDesign from './ProductDesign';
import ProductReview from './ProductReview';
import ProductList from './ProductList';
import ProductReviewChat from './ProductReviewChat';





function ProductAll() {      
    return ( 
        <div>
            <ProductDesign />
            <div className='review-chat-box'>
                <h4 className='review-title'>Review:</h4>
                <ProductReviewChat />
            </div>
            <ProductReview />
            <ProductList /> 
        </div>
     );
}

export default ProductAll;