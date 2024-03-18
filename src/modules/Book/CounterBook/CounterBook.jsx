
import { useState, useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import ButtonPrimary from 'shared/components/Button/ButtonPrimary/ButtonPrimary';
import { fetchCart } from '../../../redux/books/books-operation';

import css from './CounterBook.module.scss';

const CounterBook = ({ price, id, title }) => {
  const [quantity, setQuantity] = useState({
    count: 1,
    totalPrice: price,
  });

  const dispatch = useDispatch();
  const addInCart = () => {
    dispatch(
    fetchCart({
      id: id,
      title: title,
      price: price,
      count: quantity.count,
      totalPrice: quantity.totalPrice,
    })
  );
  }


  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setQuantity(prevQuantity => ({
        ...prevQuantity,
        count: parseInt(storedCount),
        totalPrice: parseInt(storedCount) * price,
      }));
    }
    return () => {
      localStorage.removeItem('count');
    };
  }, [price]);

  const handleQuantityChange = e => {
    const newCount = parseInt(e.target.value);
    const newTotalPrice = newCount * price;

    setQuantity({
      count: newCount,
      totalPrice: newTotalPrice,
    });
    localStorage.setItem('count', newCount.toString());
  };

  return (
    <div className={css.wrapperCounter}>
      <ul className={css.countList}>
        <li className={css.itemCounter}>
          <p>Price, $</p>
          <p>{price}</p>
        </li>
        <li className={css.itemCounter}>
          <p>Count</p>
          <input
            className={css.input}
            type="number"
            min="1"
            max="100"
            step="1"
            value={quantity.count}
            onChange={handleQuantityChange}
          />
        </li>
        <li className={css.itemCounter}>
          <p>Total price, $</p>
          <p>{quantity.totalPrice.toFixed(2)}</p>
        </li>
      </ul>

      <div className={css.wrapperButton} onClick={addInCart}>
        <ButtonPrimary>Add to cart</ButtonPrimary>
      </div>
    </div>
  );
};
export default CounterBook;
