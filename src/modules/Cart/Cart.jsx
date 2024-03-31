import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getCart } from '../../redux/books/books-selectors';
import { fetchCleanCart } from '../../redux/books/books-operation';
import {
  putNewCountCart,
  deleteItemCart,
} from '../../redux/books/books-operation';

import { SvgSelector } from 'shared/components/SvgSelector/SvgSelector';

import { useTheme } from 'utils/providers/TemeProvider';
import EmptyCart from './EmptyCart/EmptyCart';
import css from './Cart.module.scss';

const Cart = () => {
  const { isDark } = useTheme();
  const dispatch = useDispatch();
  const isCart = useSelector(getCart);
  const cartLocalData = localStorage.getItem('cart');
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const updatedCartData =
      isCart.length > 0 ? isCart : JSON.parse(cartLocalData) || [];
    setCartData(updatedCartData);
  }, [isCart, cartLocalData]);

  const handleIncrement = ({ id, title, count, price }) => {
    let newCount = count < 42 ? count + 1 : 42;
    let newTotalPrice = newCount * price;
    dispatch(
      putNewCountCart({
        id: id,
        title: title,
        count: newCount,
        price: price,
        totalPrice: newTotalPrice,
      })
    );
  };
  const handleDecrement = ({ id, title, count, price }) => {
    console.log('handleDecrement', id);
    let newCount = count > 1 ? count - 1 : 1;
    let newTotalPrice = newCount * price;
    dispatch(
      putNewCountCart({
        id: id,
        title: title,
        count: newCount,
        price: price,
        totalPrice: newTotalPrice,
      })
    );
  };
  const handleDelete = ({ id }) => {
    dispatch(deleteItemCart({ id: id }));
  };

  const element = cartData.map(({ id, title, price, count, totalPrice }) => {
    return (
      <li className={css.cartItem} key={id}>
        <p className={css.cartItemTitle}>{title}</p>
        <p className={css.cartItemPrice}>Price: {price} $</p>
        <p className={css.cartItemCountName}>Count:</p>
        <button
          className={css.cartItemBtn}
          onClick={() =>
            handleDecrement({ id, title, count, price, totalPrice })
          }
        >
          -
        </button>
        <p className={css.cartItemCount}>{count}</p>
        <button
          className={css.cartItemBtn}
          onClick={() =>
            handleIncrement({ id, title, count, price, totalPrice })
          }
        >
          +
        </button>
        <p className={css.cartItem_totalPrice}>
          Total price, ${totalPrice.toFixed(2)}
        </p>
        <div
          className={css.wrapperItemTrash}
          onClick={() => handleDelete({ id })}
        >
          <SvgSelector id="trash" styles={css.itemTrash} />
        </div>
      </li>
    );
  });

  const handleCleanLocal = () => {
    localStorage.removeItem('cart');
    dispatch(fetchCleanCart([]));
    setCartData([]);
  };

  const allTotal = cartData.reduce((total, { totalPrice }) => {
    return total + totalPrice;
  }, 0);

  return (
    <div
      className={`${css.section} ${
        isDark ? css.dark : css.light
      } ${'container'}`}
    >
      {cartData.length > 0 ? (
        <>
          <button
            type="button"
            className={css.btnBought}
            onClick={handleCleanLocal}
          >
            Purchase
          </button>
          <ul>{element}</ul>
          <p className={css.totalPrice}>
            Total price, $ {allTotal.toFixed(2)}{' '}
          </p>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
export default Cart;
