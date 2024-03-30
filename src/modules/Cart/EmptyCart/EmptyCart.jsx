import { Link } from 'react-router-dom';
import css from './EmptyCart.module.scss';

const EmptyCart = () => {
  return (
    <>
      <h1 className={css.titleEmptyCart}>The cart is currently empty.</h1>
      <p className={css.textEmptyCart}>
        To add books to your cart, go to the books page
      </p>
      <Link className={css.linkBtn} to={'/books'}>
        <button className={css.btnEmptyCart} type="button">
          Go to books page
        </button>
      </Link>
    </>
  );
};
export default EmptyCart;
