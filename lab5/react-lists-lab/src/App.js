import Book from './Component/Book.js';
import booksData from './booksData.js';
import './Component/Book.js';

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {booksData.map(book => <Book key={book.id} book={book} />)}
      </div>
    </div>
  );
}

export default App;
