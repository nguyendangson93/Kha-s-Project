import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  add1Item: (id) => {},
  removeItem: (id) => {},
  deleteItem: (id) =>{},
  clearCart: () => {}
});

export default CartContext;