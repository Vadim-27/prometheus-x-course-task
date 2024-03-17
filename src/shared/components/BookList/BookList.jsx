import SingleItemBook from '../SingleItemBook/SingleItemBook';

const BookList = ({ items }) => {
  const element =
    items && items.length
      ? items.map(({ id, title, image, author, price }) => {
          return (
            <li key={id}>
              <SingleItemBook
                id={id}
                title={title}
                image={image}
                author={author}
                price={price}
              />
            </li>
          );
        })
      : null;

  return <>{element}</>;
};
export default BookList;
