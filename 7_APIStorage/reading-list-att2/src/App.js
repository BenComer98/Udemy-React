import {useState, useEffect} from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    // Event handlers
    const addBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        setBooks([...books, response.data]);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        setBooks(
            books.filter((book, index) => {
                return book.id !== id;
            })
        );
    }

    const editBookById = async(id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }

            return book;
        });

        setBooks(updatedBooks);
    }

    return <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
        <BookCreate onCreate={addBook}/>
    </div>;
}

export default App;