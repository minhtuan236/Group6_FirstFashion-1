
import React, { useEffect, useState } from 'react';
import './ShoppingBag.css';
import ShowItemsInShoppingBag from './ShowItemsInShoppingBag';
import Empty from './Empty';

function ShoppingBag({ cartItems, onUpdateCartQuantity, onRemove }) {
  const isEmpty = cartItems.length === 0;
  const content = isEmpty ? <Empty /> : cartItems.map((item) =>
    <ShowItemsInShoppingBag cartItems={item} key={item.id} onUpdateCartQuantity={onUpdateCartQuantity} onRemove={onRemove}
      item={cartItems.find((x) => x.id === item.id)} />
  );
  const [totalPrice, setTotalPrice] = useState(0);



  // Calculate total price when cartItems change
  useEffect(() => {
    const newTotalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.qty, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  return (
    <div className='shoppingbag-background'>
      <br /><br />
      <div className="shoppingbag-div">
        <p>
          <span className='shoppingbag-title'>SHOPPING BAG</span> <br />
          <span className='shoppingbag-text'>FIRST FASHION presents each purchase in signature packaging.</span>
        </p> <br />
        {isEmpty ? content : <ul>{content}</ul>}
        {/* Display total price */}
        <p>Total Price: {totalPrice}</p>
        <br /><br /><br /><br /><br />
      </div>
    </div>
  );
}

export default ShoppingBag;

