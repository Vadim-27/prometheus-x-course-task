import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ButtonPrimary from 'shared/components/Button/ButtonPrimary/ButtonPrimary';

import css from './CounterBook.module.scss';

const CounterBook = ({ price  }) => {
  const [quantity, setQuantity] = useState({
    count: 1,
    totalPrice: price,
  });

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setQuantity(prevQuantity => ({
        ...prevQuantity,
        count: parseInt(storedCount),
        totalPrice: parseInt(storedCount) * price,
      }

      ));
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
      totalPrice: newTotalPrice
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

      <Link className={css.wrapperButton} to={'/cart'}>
        <ButtonPrimary>Add to cart</ButtonPrimary>
      </Link>
    </div>
  );
};
export default CounterBook;
