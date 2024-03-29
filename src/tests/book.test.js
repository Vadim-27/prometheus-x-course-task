import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Book from '../modules/Book/Book';
import CounterBook from '../modules/Book/CounterBook/CounterBook';

describe('Book Page', () => {
  test('increments quantity when add button is clicked', () => {
    render(<Book />);
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('decrements quantity when subtract button is clicked', () => {
    render(<Book />);
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('changes total price when quantity is changed', () => {
    render(<CounterBook price={10} id={1} title="Test Book" />);
    fireEvent.change(screen.getByTestId('quantity-input'), {
      target: { value: '3' },
    });
    expect(screen.getByTestId('total-price')).toHaveTextContent('30.00');
  });
});
