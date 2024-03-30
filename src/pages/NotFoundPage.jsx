import NotFoundPageImg from '../assete/png/imageNotFound.png';
import css from './page.module.scss';

const NotFoundPage = () => {
  return (
    <div className={`${css.notFoundPage} ${'container'}`}>
      <img
        className={css.notFoundPageImg}
        src={NotFoundPageImg}
        alt="Not Found Page"
      />
    </div>
  );
};
export default NotFoundPage;
