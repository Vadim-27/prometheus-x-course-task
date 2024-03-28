import BooksLists from './BooksLists/BooksLists';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAllBooks } from '../../redux/books/books-selectors';

import data from '../../shared/services/books';
import FilterBooks from './FilterBooks/FilterBooks';
import FilterByPriceBooks from './FilterByPriceBooks/FilterByPriceBooks';

import css from './Books.module.scss';

const Books = () => {
  const isBooks = useSelector(getAllBooks);
  const [filterDataState, setFilterDataState] = useState([]);

  useEffect(() => {
    setFilterDataState(isBooks);
  }, [isBooks]);

  return (
    <section className={`${css.section} ${'container'}`}>
      <div className={css.wrapperInput}>
        <FilterBooks data={isBooks} setFilterDataState={setFilterDataState} />
        <FilterByPriceBooks
          data={data}
          setFilterDataState={setFilterDataState}
        />
      </div>
      {filterDataState.length > 0 ? (
        <BooksLists data={filterDataState} />
      ) : (
        <p className={css.textFilter}>No books were found for this filter</p>
      )}
    </section>
  );
};
export default Books;
