import { useState, useEffect } from 'react';

import css from './FilterBooks.module.scss';

const FilterBooks = ({ data, setFilterDataState }) => {
  const [filterText, setFilterText] = useState('');

  const handleFilterInputChange = event => {
    const text = event.target.value;
    setFilterText(text);
  };
  useEffect(() => {
    const filteredData = data.filter(book =>
      book.title.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilterDataState(filteredData);
  }, [data, setFilterDataState, filterText]);

  return (
    <div>
      <input
        type="text"
        className={css.searchInput}
        value={filterText}
        onChange={handleFilterInputChange}
        placeholder="Search by book name"
      />
    </div>
  );
};
export default FilterBooks;
