import {useState} from "react";

function BookEdit({book, onEdit}) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(book.id, title);
        
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