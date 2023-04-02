import { useReducer } from 'react';
import './App.css';
import ShowAllBooks from './components/books/ShowAllBooks';
import { books } from './components/books/books.component';
const App = () => {
  const findTheBook = (id) => {
    const currentBook = books.find((book) => book.id === id);
    console.log(currentBook);
  };
  return (
    <div className='App'>
      <ShowAllBooks findTheBook={findTheBook} />
    </div>
  );
};

export default App;
