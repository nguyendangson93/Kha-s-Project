import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [hideCart, setHideCart] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const CheckoutEmail="example@";
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (id) => {
    cartCtx.add1Item(id);
  };

  const cartItemDeleteHandler = (id) => {
    cartCtx.deleteItem(id);
  }

  const cartClearHandler = () => {
    cartCtx.clearCart();
  }

  const orderHandler = () => {
    setIsCheckout(true);
    setHideCart(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    // await fetch('https://react-app-3f5bd-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', {  //https://react-app-3f5bd-default-rtdb.asia-southeast1.firebasedatabase.app/
    //   method: 'POST',
    //   body: JSON.stringify({
    //     user: userData,
    //     orderedItems: cartCtx.items,
    //   }),
    // });

    
    setIsSubmitting(false);
    setDidSubmit(true);
    //cartCtx.clearCart();
    setHideCart(false);
  };

  

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          img={item.img}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item.id)}
          onDelete={cartItemDeleteHandler.bind(null,item.id)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={cartClearHandler}>
          Clear Cart
        </button>
      )}
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
      
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {!isCheckout && modalActions}
    </React.Fragment>
  );

const checkoutModelContent = (
  <Checkout onOk={submitOrderHandler} onCancel={props.onClose} />
)

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>
        Close
      </button>
    </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && !hideCart && cartModalContent }
      {isCheckout && checkoutModelContent}
      
      {/* {isSubmitting && isSubmittingModalContent} */}
      {/* {!isSubmitting && didSubmit && didSubmitModalContent} */}
    </Modal>
  );
};

export default Cart;
