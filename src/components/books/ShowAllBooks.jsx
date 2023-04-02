import Book from '../../components/books/book.component';
import { books } from '../../components/books/books.component';

const ShowAllBooks = ({ findTheBook }) => {
  return (
    <div>
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
    </div>
  );
};
export default ShowAllBooks;
