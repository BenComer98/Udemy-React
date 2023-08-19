import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    // Event handlers
    const addBook = (title) => {
        setBooks([...books, {
            id: Math.round(Math.random() * 9999),
            title,
        }]); // title is the same as "title: title"
    };

    const deleteBookById = (id) => {
        console.log("Deleting id: ", {id});
        setBooks(
            books.filter((book, index) => {
                return book.id !== id;
            })
        );
    }

    const editBookById = (id, newTitle) => {
        console.log("Editing id: ", {id});
        setBooks(
            books.map((book) => {
                if (book.id === id)
                    return {...book, title: newTitle};
                else
                    return book;

                
            })
        );
    }

    return <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
        <BookCreate onCreate={addBook}/>
    </div>;
}

export default App;