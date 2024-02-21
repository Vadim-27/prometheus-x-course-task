
import css from './ButtonPrimary.module.scss';

const ButtonPrimary = ({ children, type = 'button' }) => {
  return (
    <button type={type} className={css.btn}>
      {children}
    </button>
  );
};

export default ButtonPrimary;

