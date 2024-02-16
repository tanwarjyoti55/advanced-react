import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/loader/loader";
import Book from "./components/books/book";
import Books from "./components/books/books";
import "./App.css";

export type Book = {
  id: number;
  title: string;
  author?: string;
};

export const fetchRandomBook = async () => {
  const response = await axios.get(`http://localhost:5000/api/books/random`);
  return response.data;
};

export const fetchBook = async (count: number) => {
  const response = await axios.get(
    `http://localhost:5000/api/books?limit=${count}`
  );
  return response.data;
};

function App() {
  // const [book, setBook] = useState<Book | undefined>();
  const [books, setBooks] = useState<Book[]>([]);
  const [count, setCount] = useState(10);

  // useEffect(() => {
  //   fetchRandomBook().then(setBook);
  // }, []);

  // if (!book) return <Loader />;
  if (!books) return <Loader />;

  return (
    <main className="w-full max-w-2xl py-16 mx-auto">
      {/* <Book title={book.title} author={book.author} /> */}
      <Books
        count={count}
        onChange={(e) => setCount(e.target.valueAsNumber)}
        onSubmit={() => fetchBook(count).then(setBooks)}
      >
        {books.map((book) => {
          return <Book title={book.title} author={book.author} />;
        })}
      </Books>
    </main>
  );
}

export default App;
