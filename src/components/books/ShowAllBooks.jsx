import Book from '../../components/books/book.component';
import { books } from '../../components/books/books.component';

const ShowAllBooks = ({ findTheBook }) => {
  return (
    <>
      <h1>Top Sellers</h1>
      {books.map((book, index) => {
        return (
          <Book
            {...book}
            key={book.id}
            findTheBook={findTheBook}
            number={index + 1}
          />
        );
      })}
    </>
  );
};
export default ShowAllBooks;
