import AvatarImg from '../../assete/png/avatar.png';
import SingInForm from './SingInForm/SingInForm';
import css from './SingIn.module.scss';

const SingIn = ({ onSubmit }) => {
  return (
    <section className={css.wrapperSection}>
      <img src={AvatarImg} alt="avatar" />
      <SingInForm onSubmit={onSubmit} />
    </section>
  );
};
export default SingIn;
