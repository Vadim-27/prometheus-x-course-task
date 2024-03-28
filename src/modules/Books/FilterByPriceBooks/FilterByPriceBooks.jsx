import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchAllBooks } from '../../../redux/books/books-operation';

import css from './FilterByPriceBooks.module.scss';

const FilterByPriceBooks = ({ data }) => {
  const dispatch = useDispatch();

  const newData = data && Array.isArray(data.books) ? data.books : [];

  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectData, setSelectData] = useState(newData);

  const handlePriceRangeChange = event => {
    const selectedRange = event.target.value;
    setSelectedPriceRange(selectedRange);

    let filteredData = [];

    if (Array.isArray(newData)) {
      switch (selectedRange) {
        case '0-15':
          filteredData = newData.filter(
            book => book.price > 0 && book.price < 15
          );
          break;
        case '15-30':
          filteredData = newData.filter(
            book => book.price >= 15 && book.price < 30
          );
          break;
        case '30+':
          filteredData = newData.filter(book => book.price >= 30);
          break;
        default:
          filteredData = newData;
          break;
      }
    }

    setSelectData(filteredData);
  };

  useEffect(() => {
    dispatch(fetchAllBooks(selectData));
  }, [dispatch, selectData]);

  return (
    <div>
      <select
        id="priceRange"
        className={css.selectPrice}
        value={selectedPriceRange}
        onChange={handlePriceRangeChange}
        placeholder="Price"
      >
        <option value="all">Price</option>
        <option value="0-15">$0 - $15</option>
        <option value="15-30">$15 - $30</option>
        <option value="30+">$30+</option>
      </select>
    </div>
  );
};
export default FilterByPriceBooks;
