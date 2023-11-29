import './App.css';
import { FaStar } from "react-icons/fa"

function Review({user,rating,review}) {
  return (
    <div className="reviewchat-container" >
      <h4 className='reviewer-nameuser'>{user}</h4>
      <div className='reviewer-ratinguser'>
        {rating}.<FaStar size={24} className='review-star' color='#FFBA5A'/>
      </div>
      <h3 className='reviewer-reviewuser'>
        {review}
      </h3>
    </div>
  );
};
export default Review;

