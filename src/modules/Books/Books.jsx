import BooksLists from "./BooksLists/BooksLists";
import {  useSelector, useDispatch } from "react-redux";
import { getAllBooks } from "../../redux/books/books-selectors";
import { fetchAllBooks } from "../../redux/books/books-operation";
import data from '../../shared/services/books';

// import css from './Books.module.scss';

const Books = () => {

  const isBooks = useSelector(getAllBooks);
  const dispatch = useDispatch();
  dispatch(fetchAllBooks(data))


  return (
    <section className="container">
      <BooksLists data={isBooks} />
    </section>
  );
};
export default Books;
