// Going to call this in index.js
import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID P264NlKMDvlQBmY63r3Wpz9eAn0FV1tCTXy80ekiKUQ'
        },
        params: {
            query: term,
        }
    });
    
    return response.data.results;
}

export default searchImages;