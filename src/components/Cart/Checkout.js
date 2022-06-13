import React, { useContext, useRef, useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Checkout.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context'; 


const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;


const Checkout = (props) => {
  const cartCtx = useContext(CartContext);
  const [formInputsValidity, setFormInputsValidity] = useState({
    firstname: true,
    lastname: true,
    email: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const [didSubmit, setDidSubmit] = useState(false);

  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();
  const emailInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstnameInputRef.current.value;
    const enteredLastName = lastnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
    const enteredLastNameIsValid = !isEmpty(enteredLastName); 
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      firstname: enteredFirstNameIsValid,
      lastname: enteredLastNameIsValid,
      email: enteredEmailIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredEmailIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    // props.onOK({
    //   firstname: enteredFirstName,
    //   lastname: enteredLastName,
    //   email: enteredEmail,
    //   street: enteredStreet,
    //   city: enteredCity,
    //   postalCode: enteredPostalCode,
    // });             

    setDidSubmit(true);
  }



    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const cartItems = (
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            img={item.img}
          />
        ))}
      </ul>
    )

    const cartModalContent = (
      <React.Fragment>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
      </React.Fragment>
    );

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`;

  const checkoutForm = (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div>Checkout State</div>
      <div>{totalAmount}</div>
      <div className={nameControlClasses}>
        <label htmlFor='name'>First Name</label>
        <input type='text' id='firstname' ref={firstnameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Last Name</label>
        <input type='text' id='lastname' ref={lastnameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      
      <div className={streetControlClasses}>
        <label htmlFor='street'>Address</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Email</label>
        <input type='text' id='email' ref={emailInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid email!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  )

  // const CheckoutInfo = (
  //   <div>
  //     <div>Checkout Info</div>
  //     <div>{totalAmount}</div>
  //     <div className={nameControlClasses}>
  //       <label htmlFor='name'>First Name</label>
  //       <input value={}></input>
        
  //     </div>
  //     <div className={nameControlClasses}>
  //       <label htmlFor='name'>Last Name</label>
  //       <input type='text' id='lastname' ref={lastnameInputRef} />
  //       {!formInputsValidity.name && <p>Please enter a valid name!</p>}
  //     </div>
      
  //     <div className={streetControlClasses}>
  //       <label htmlFor='street'>Address</label>
  //       <input type='text' id='street' ref={streetInputRef} />
  //       {!formInputsValidity.street && <p>Please enter a valid street!</p>}
  //     </div>
  //     <div className={nameControlClasses}>
  //       <label htmlFor='name'>Email</label>
  //       <input type='text' id='email' ref={emailInputRef} />
  //       {!formInputsValidity.name && <p>Please enter a valid email!</p>}
  //     </div>
  //     <div className={postalCodeControlClasses}>
  //       <label htmlFor='postal'>Postal Code</label>
  //       <input type='text' id='postal' ref={postalCodeInputRef} />
  //       {!formInputsValidity.postalCode && (
  //         <p>Please enter a valid postal code (5 characters long)!</p>
  //       )}
  //     </div>
  //     <div className={cityControlClasses}>
  //       <label htmlFor='city'>City</label>
  //       <input type='text' id='city' ref={cityInputRef} />
  //       {!formInputsValidity.city && <p>Please enter a valid city!</p>}
  //     </div>
  //     <div className={classes.actions}>
  //       <button type='button' onClick={props.onCancel}>
  //         Cancel
  //       </button>
  //       <button className={classes.submit}>Confirm</button>
  //     </div>
  //   </div>
  //)

  return (
    <Modal onClose={props.onClose}>
      {!didSubmit ? checkoutForm : cartModalContent}
    </Modal>
  )
  
    
}


export default Checkout;
