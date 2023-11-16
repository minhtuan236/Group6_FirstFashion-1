import './App.css';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";

function Product() {
    return ( 
        <div class="row">
            <aside class="col-md-6">
                <div>
                    <img src="/image/ava1.jpg" alt='product' className='product' />
                </div>
            </aside>
            <main class="col-md-5">
                <article>
                    <div class="mb-5 " className='productbox'>
                        <h1 class="title">Chanel Perfume</h1>
                        <h4>5.0 <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 />| 88 rating | <GoPlusCircle />Compare</h4>
                        <b className='price'>$1000 </b>
                            <div className='quantity'>
                                Quantity
                                <button type="button"> 
                                    <svg width="22" height="20" fill="#black" viewBox="0 0 24 24">
                                        <path d="M19 13H5v-2h14v2z"></path>
                                    </svg>
                                </button>

                                        <input class="text-center" value="14" className='input'/>
                                                
                                <button type="button"> 
                                    <svg  width="22" height="20" fill="#black" viewBox="0 0 24 24">
                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className='AddBuy'>
                                    <button className='add'>🛒Add to card</button>
                                    <button className='buy'>Buy now</button>  
                            </div>
                    </div>
                </article>
            </main>
        </div>

     );
}

export default Product;