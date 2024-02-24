import SingIn from 'modules/SingIn/SingIn';
import css from './page.module.scss'

const SingInPage = ({ onSubmit }) => {
  return (
    <div className={css.wrapper}>
      <SingIn onSubmit={onSubmit} />
    </div>
  );
};
export default SingInPage;
