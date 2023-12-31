import BookEdit from './BookEdit';
import {useState} from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookShow({book}) {
    const { deleteBookById } = useBooksContext();
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        deleteBookById(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleEditSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleEditSubmit} onEdit={handleEditSubmit}/>;
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