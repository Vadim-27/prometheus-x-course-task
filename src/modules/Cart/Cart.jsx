import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCart } from "../../redux/books/books-selectors";
import { fetchCleanCart } from "../../redux/books/books-operation";

import css from './Cart.module.scss';


const Cart = () => {
  const dispatch = useDispatch();
  const isCart = useSelector(getCart);
  const cartLocalData = localStorage.getItem('cart');
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const updatedCartData =
      isCart.length > 0 ? isCart : JSON.parse(cartLocalData) || [];
    setCartData(updatedCartData);
  }, [isCart, cartLocalData]);

  const element = cartData.map(({ id, title, price, count, totalPrice }) => {
    return (
      <li className={css.cartItem} key={id}>
        <p>{title}</p>
        <p>Price: {price}</p>
        <p>Count:</p>
        <button>-</button>
        <p>{count}</p>
        <button>+</button>
        <p className={css.cartItem_totalPrice}>Total price, ${totalPrice}</p>
      </li>
    );
  })

  const handleCleanLocal = () => {
    localStorage.removeItem('cart');
    dispatch(fetchCleanCart([]));
    setCartData([]);
  }

  return (
    <div className="container">
      <button
        type="button"
        className={css.btnBought}
        onClick={handleCleanLocal}
      >
        Purchase
      </button>
      <ul>{element}</ul>
      <p>Total price, $ </p>
    </div>
  );
};
export default Cart;

