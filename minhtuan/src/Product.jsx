import { useNavigate } from "react-router-dom";

function Product({name, image, price, id}) {
    const navigate = useNavigate();
    return (  
        <div onClick={window.scrollTo({top: 0, left: 0, behavior: 'instant'})}>
        <div className="productlist-container" onClick={() => navigate(`/products/${id}`)}>
            <img src={image} alt={id} className="productlist-image"/>
            <h2 >{name}</h2>
            <h3 >{price}</h3>
        </div>
        </div>
     );
}

export default Product;