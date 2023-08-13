import {useState} from 'react';

function SearchBar({onSubmit}) {
    // Using 'cars' here defaults the value to cars.
    // Our term overrides the input so we can do this!
    const [term, setTerm] = useState('cars');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return <div>
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange}/>
        </form>
    </div>;
}

export default SearchBar;