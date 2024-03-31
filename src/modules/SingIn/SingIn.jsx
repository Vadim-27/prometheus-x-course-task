import AvatarImg from '../../assete/png/avatar.png';
import SingInForm from './SingInForm/SingInForm';
import { useTheme } from 'utils/providers/TemeProvider';
import css from './SingIn.module.scss';

const SingIn = ({ onSubmit }) => {
  const { isDark } = useTheme();
  return (
    <section
      className={`${css.wrapperSection} ${
        isDark ? css.dark : css.light
      } ${'container'}`}
    >
      <img className={css.imgAvatar} src={AvatarImg} alt="avatar" />
      <SingInForm onSubmit={onSubmit} />
    </section>
  );
};
export default SingIn;
