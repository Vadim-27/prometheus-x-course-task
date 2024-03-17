// import data from "shared/services/books";
import BookList from "shared/components/BookList/BookList";
import css from "./BooksLists.module.scss"

const BooksLists = ({ data }) => {
  return (
    <ul className={css.booksList}>
      <BookList items={data} />
    </ul>
  );
};
export default BooksLists;
