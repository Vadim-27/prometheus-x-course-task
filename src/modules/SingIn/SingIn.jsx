import AvatarImg from '../../assete/png/avatar.png';
import SingInForm from './SingInForm/SingInForm';
import css from './SingIn.module.scss';

const SingIn = ({ onSubmit }) => {
  return (
    <section className={`${css.wrapperSection} ${'container'}`}>
      <img className={css.imgAvatar} src={AvatarImg} alt="avatar" />
      <SingInForm onSubmit={onSubmit} />
    </section>
  );
};
export default SingIn;
