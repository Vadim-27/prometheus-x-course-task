import NotFoundPageImg from '../assete/png/imageNotFound.png';
import css from './page.module.scss'

const NotFoundPage = () => {
  return (
    <div className={css.notFoundPage}>
      <img
        className={css.notFoundPageImg}
        src={NotFoundPageImg}
        alt="Not Found Page"
      />
      {/* <p>Not Found Page</p> */}
    </div>
  );
};
export default NotFoundPage;
