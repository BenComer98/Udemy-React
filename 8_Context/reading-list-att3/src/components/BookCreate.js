import {useState} from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
    const { addBook } = useBooksContext();
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addBook(title);
        setTitle('');
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit} >
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button" onClick={handleSubmit}>Submit</button>
        </form>
    </div>;
}

export default BookCreate;