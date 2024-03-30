import SingIn from 'modules/SingIn/SingIn';
import css from './page.module.scss';

const SingInPage = ({ onSubmit }) => {
  return (
    <div className={css.wrapperSingInPage}>
      <SingIn onSubmit={onSubmit} />
    </div>
  );
};
export default SingInPage;
