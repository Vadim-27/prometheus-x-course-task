
import css from './ButtonPrimary.module.scss';

const ButtonPrimary = ({ children, type = 'button', onClick }) => {
  return (
    <button type={type} className={css.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;

