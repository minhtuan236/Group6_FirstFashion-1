import './App.css';
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { PiDownloadSimple } from "react-icons/pi";

function ProductDesign() {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const PDF_FILE_URL = 'http://localhost:3000/file_pdf.pdf'
    const downloadFileAtURL=(url)=>{
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href=url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    useEffect(() => {
    fetch('/data/product.json')
        .then((data) => data.json())
        .then((products) => {
        const selectedProduct = products.find(item => item.id === id);
        setProduct(selectedProduct);
        })
        .catch((error) => console.error('Error fetching product data:', error));
    }, [id]);
    
    return ( 
        <div class="row">
            <aside class="col-md-6">
                <div>
                    <img src={product.image} alt='product' className='productview'/>
                </div>
            </aside>
            <main class="col-md-5">
                <article>
                    <div class="mb-5 " className='productview-box'>
                        <h1 className='productview-title'>{product.name}</h1>
                        <h5>Ref.  {product.id}</h5>
                        <h6>SGD:  {product.price}</h6>
                        <hr style={{
                            height: '5px',
                        }}/>
                        <h5 className='productview-size'>SIZE</h5>
                        <h6 className='productview-quantity'>1 piece</h6>
                        <div>
                            <button className='productview-add'>ADD TO BAG</button>
                        </div>
                    </div>
                </article>
            </main>
            <div className="productview-productinfo">
            <h1 class="mt-5">PRODUCT INFORMATION</h1>
            <hr />
            <article>
                <div className="box">
                    <div className="productview-infomation">
                        <dl class="row">
                            <dt class="col-sm-3">Product</dt>
                                        
                        <dd className="productview-info">{product.infomation}</dd>

                            <dt class="col-sm-3">Ingredient</dt>
                                        
                        <dd className="productview-info">{product.infomation2}</dd>
                        </dl>
                    </div>
                    <button className="download" onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}><PiDownloadSimple />Download description</button>
                </div>
            </article>
          
        </div>
        </div>

     );
}

export default ProductDesign;