import { Link } from 'react-router-dom';

import ButtonPrimary from '../Button/ButtonPrimary/ButtonPrimary';
import defaultImage from '../../../assete/jpg/default2.jpg';
import { useTheme } from 'utils/providers/TemeProvider';
import css from './SingleItemBook.module.scss';

const SingleItemBook = ({ id, title, image, author, price }) => {
  const { isDark } = useTheme();
  const imgSrc = image ? image : defaultImage;

  return (
    <div className={`${css.wrapperCardBook} ${
        isDark ? css.dark : css.light
      }`}>
      <div className={css.wrapperImg}>
        <img src={imgSrc} alt="Book" className={css.image} />
      </div>
      <p className={css.bookName}>Title: {title}</p>
      <p className={css.bookAuthor}>Author: {author}</p>
      <p className={css.bookPrice}>Price: {price}</p>
      <Link to={`/book/${id}`} className={css.wrapperBtn}>
        <ButtonPrimary>View</ButtonPrimary>
      </Link>
    </div>
  );
};

export default SingleItemBook;
