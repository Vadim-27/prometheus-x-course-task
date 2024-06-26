import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getCart } from '../../redux/books/books-selectors';
import ButtonPrimary from 'shared/components/Button/ButtonPrimary/ButtonPrimary';
import { SvgSelector } from 'shared/components/SvgSelector/SvgSelector';
import AvatarImg from '../../assete/png/avatar.png';

import { useTheme } from 'utils/providers/TemeProvider';
import ThemeButton from './TemeButton';
import css from './Heder.module.scss';

const Heder = ({ stateLogin, onLogout }) => {
  const { isDark } = useTheme();
  const isCart = useSelector(getCart);
  const cartLocalData = localStorage.getItem('cart');

  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const updatedCartData =
      isCart.length > 0 ? isCart : JSON.parse(cartLocalData) || [];
    setCartData(updatedCartData);
  }, [isCart, cartLocalData]);
  const allCount = cartData.reduce((total, { count }) => {
    return total + count;
  }, 0);
  return (
    <div
      className={`${css.wrapper} ${
        isDark ? css.dark : css.light
      } ${'container'}`}
    >
      <Link to={'/books'}>
        <div className={css.wrapperLogo}>
          <p>X-course task</p>
          <span>/</span>
          <p>Bulanyi Vadym</p>
        </div>
      </Link>
      {stateLogin && (
        <div className={css.userBlock}>
          <Link className={css.wrapperCart} to={'/cart'}>
            {allCount > 0 && (
              <div className={css.wrapperCounterCart}>
                <p className={css.counterCart}>{allCount}</p>
              </div>
            )}

            <div className={css.cart}>
              <SvgSelector id="cart" />
            </div>
          </Link>
          <ButtonPrimary onClick={onLogout}>Sing-Out</ButtonPrimary>
          <img src={AvatarImg} alt="avatar" className={css.avatarImg} />
          <p className={css.avatarName}>{stateLogin?.userName}</p>
        </div>
      )}
      <ThemeButton />
    </div>
  );
};
export default Heder;
