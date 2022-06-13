import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
        <span><img src={props.img} width="50" height="50" /></span>
          <span className={classes.price}>{price}</span>
          
          <span className={classes.amount}>x{props.amount}</span>
          <button onClick={props.onAdd}>+</button>
          <button onClick={props.onRemove}>−</button>
        </div>
      </div>
      <div className={classes.actions}>
        
        <button onClick={props.onDelete}>x</button>
      </div>
      
    </li>
  );
};

export default CartItem;
