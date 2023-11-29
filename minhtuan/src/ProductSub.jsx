import { useNavigate } from "react-router-dom";

function ProductSub({name, image, price, id}) {
    const navigate = useNavigate();
    return ( 
        <div className="productview-container" onClick={() => navigate(`/products/${id}`)}>
            <img src={image} alt={id} className="productview-profile-pic"/>
            <h2 className="productview-name">{name}</h2>
            {price}
        </div>
     );
}

export default ProductSub;