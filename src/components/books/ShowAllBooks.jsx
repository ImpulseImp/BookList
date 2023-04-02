import Book from '../../components/books/book.component';
import { books } from '../../components/books/books.component';

const ShowAllBooks = () => {
  return (
    <div>
      {books.map((book) => {
        return <Book {...book} />;
      })}
    </div>
  );
};
export default ShowAllBooks;
