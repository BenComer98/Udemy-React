import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    // Event handlers
    const createBook = (title) => {
        console.log('Need to add book with:', title);
    }

    return <div>
        <BookCreate onCreate={createBook}/>
    </div>;
}

export default App;