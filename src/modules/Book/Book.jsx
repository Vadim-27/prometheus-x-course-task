import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
// import { fetchAllBooks } from '../../redux/books/books-operation';
import { getAllBooks } from '../../redux/books/books-selectors';
// import defaultImage from '../../assete/jpg/default2.jpg';
// import { fetchAllBooks } from '../../redux/books/books-operation';
// import data from '../../shared/services/books';
import CounterBook from './CounterBook/CounterBook';

import css from './Book.module.scss';

const Book = () => {
  // const dispatch = useDispatch();
  // dispatch(fetchAllBooks(data));
  const { id } = useParams();
  const isBooks = useSelector(getAllBooks);


  const element = isBooks.find(book => book.id === parseInt(id));

  if (!element) {
    return <div>Book not found</div>;
  }
  const { image, title, author, level, price, tags, description } = element;
  // const imgSrc = image ? image : defaultImage;
  const imgSrc = image;

  return (
    <div className={`${css.wrapperCardBook} ${'container'}`}>
      <div className={css.wrapperInfoBook}>
        <div className={css.wrapperImg}>
          <img src={imgSrc} alt="Book" className={css.image} />
        </div>
        <div>
          <p className={css.bookName}>Title: {title}</p>
          <p className={css.bookAuthor}>Author: {author}</p>
          <p className={css.bookLevel}>level: {level}</p>
          <div className={css.wrapperTag}>
            Tag:{' '}
            <ul className={css.wrapperTagList}>
              {tags.map((tag, index) => (
                <li key={index}>{tag},</li>
              ))}
            </ul>
          </div>
        </div>
        <CounterBook price={price} id={id} title={title} />
      </div>
      <p className={css.bookDescription}>Description: {description}</p>
    </div>
  );
};

export default Book;
