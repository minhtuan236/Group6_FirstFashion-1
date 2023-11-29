import React from "react";
import './App.css';
import { useState } from "react";

function ProductReview() {
  const [rating, setRating] = useState("")
  const [review, setReview] = useState("");
  
  const addReview = () => {
    const newReview = {"review": review,"rating": rating};
    console.log(newReview);

        fetch("https://653f52019e8bd3be29e0421c.mockapi.io/reviewer", {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(newReview)
    }).then(res => {
        if (res.ok) {
            alert("Add Success");
            return res.json();
        }
    })
    } 

  return (
    <div className="productreview" >
      <h4>Your Review</h4>
      <select id="rating" value={rating}
                        onChange={(e) => setRating(e.target.value)}>
                           <option value="">Select</option>
                           <option value="1">1- Bad</option>
                           <option value="2">2- Fair</option>
                           <option value="3">3- Good</option>
                           <option value="4">4- Very good</option>
                           <option value="5">5- Excelent</option>

      </select>
      <textarea 
       placeholder="What's your feed back"
       style={styles.textarea}
       onChange={(event => setReview(event.target.value))}
      />
      <button className="productview-summit" onClick={addReview}>Summit</button>
      
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    margin: "7px 0",
    minHeight: 100,
    padding: 10,
    height: 200,
    width: 650,
    display: "flex"
  },
}

export default ProductReview;
