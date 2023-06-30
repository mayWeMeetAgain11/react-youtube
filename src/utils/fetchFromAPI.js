// import axios from "axios";

// export const fetchFromAPI = async (selectedCategory) => {
//     const { data } = await axios.get(`https://youtube-v31.p.rapidapi.com/search`, {
//         params: {
//             q: `${selectedCategory}`,
//             part: 'snippet,id',
//             maxResults: '50',
//         },
//         headers: {
//             'X-RapidAPI-Key': '0b46351c6fmshd51a77cdde55180p19c660jsn89f87da70e0d',
//             'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//             }
//     });
//     return data;
// }

import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};