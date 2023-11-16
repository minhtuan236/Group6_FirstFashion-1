import { MdOutlineStarPurple500 } from "react-icons/md";

function Reviewer() {
    return ( 
        <div class="row">
                    <h3 className="Review">Review</h3>
                    <div className='star'>
                        <h4><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /></h4>
                    </div>
      <aside class="col-md-2">
                <div>
                    <img src="/image/ava2.jpg" alt='review' className='logo-review' />
                </div>
                <div>
                    <img src="/image/ava3.jpg" alt='review' className='logo-review' />
                </div>
                
      </aside>
        <main class="col-md-5">
          <article className="chat">
            <h4 class="title">Reviewer</h4>      
            One of best shop 
          </article>
          <article className="chat">
            <h4 class="title">Reviewer</h4>      
                    One of best shop     
          </article>
        </main>
        </div>
     );
}

export default Reviewer;