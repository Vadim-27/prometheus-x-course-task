import { Link } from 'react-router-dom';
import ButtonPrimary from 'shared/components/Button/ButtonPrimary/ButtonPrimary';
import { SvgSelector } from 'shared/components/SvgSelector/SvgSelector';
import AvatarImg from '../../assete/png/avatar.png';

import css from './Heder.module.scss';

const Heder = ({ stateLogin, onLogout }) => {
  return (
    <div className={`${css.wrapper} ${'container'}`}>
      <div className={css.wrapperLogo}>
        <p>X-course task</p>
        <span>/</span>
        <p>Bulanyi Vadym</p>
      </div>
      {stateLogin && (
        <div className={css.userBlock}>
          <Link className={css.wrapperButton} to={'/cart'}>
            <div className={css.cart}>
              <SvgSelector id="cart" />
            </div>
          </Link>
          <ButtonPrimary onClick={onLogout}>Sing-Out</ButtonPrimary>
          <img src={AvatarImg} alt="avatar" className={css.avatarImg} />
          <p className={css.avatarName}>{stateLogin?.userName}</p>
        </div>
      )}
    </div>
  );
};
export default Heder;
