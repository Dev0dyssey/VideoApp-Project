import axios from 'axios';

const KEY = 'AIzaSyB271TRa1TuXeevm3PVBR8-8xYHH-k1c0g';

export default axios.create({
    baseURL:  'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});