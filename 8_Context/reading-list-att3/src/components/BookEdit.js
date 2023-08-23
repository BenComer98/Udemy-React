import {useState} from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book, onSubmit, onEdit}) {
    const {editBookById} = useBooksContext();
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        editBookById(book.id, title);
        onSubmit();
    }

    return <form className="book-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} onSubmit={handleSubmit}/>
        <button className="button is-primary" onClick={handleSubmit}>
            Save
        </button>
    </form>;
}

export default BookEdit;