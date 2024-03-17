import { Link } from "react-router-dom";

import ButtonPrimary from "../Button/ButtonPrimary/ButtonPrimary";
import defaultImage from '../../../assete/jpg/default2.jpg';
import css from "./SingleItemBook.module.scss";

const SingleItemBook = ({ id, title, image, author, price }) => {
  const imgSrc = image ? image : defaultImage;

  return (
    <div className={css.wrapperCardBook}>
      <div className={css.wrapperImg}>
        <img src={imgSrc} alt="Book" className={css.image}  />
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
