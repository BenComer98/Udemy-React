import BookEdit from './BookEdit';
import {useState} from 'react';

function BookShow({book, onDelete, onEdit}) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        onDelete(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleEditSubmit = (id, newTitle) => {
        onEdit(id, newTitle);
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onEdit={handleEditSubmit}/>;
    }

    return <div className="book-show">
        <img 
            alt="books"
            src={`https://picsum.photos/seed/${book.id}/300/200`}
        />
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}/>
            <button className="delete" onClick={handleDelete}/>
        </div>
    </div>;
}

export default BookShow;