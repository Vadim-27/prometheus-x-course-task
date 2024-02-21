import ButtonPrimary from 'shared/components/Button/ButtonPrimary/ButtonPrimary';
import { SvgSelector } from 'shared/components/SvgSelector/SvgSelector';
import AvatarImg from '../../assete/png/avatar.png';

import css from './Heder.module.scss';

const Heder = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.wrapperLogo}>
        <p>X-course task</p>
        <span>/</span>
        <p>Bulanyi Vadym</p>
      </div>
      <div className={css.userBlock}>
        <div className={css.cart}>
          <SvgSelector id="cart" />
        </div>
        <ButtonPrimary>Sing-Out</ButtonPrimary>
        <img src={AvatarImg} alt="avatar" className={css.avatarImg} />
        <p className={css.avatarName}>Name</p>
      </div>
    </div>
  );
};
export default Heder;
