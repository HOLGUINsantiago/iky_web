//using YOUTUBE DATA API

const API_URL = "https://www.googleapis.com/youtube/v3/";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const POPULAR_VIDEOS_BASE_URL = `${API_URL}videos?key=${API_KEY}&part=contentDetails&part=snippet&part=statistics&chart=mostPopular`;
const SEARCH_VIDEOS_BASE_URL = `${API_URL}search?part=snippet&&key=${API_KEY}`;

export { API_KEY, API_URL, POPULAR_VIDEOS_BASE_URL, SEARCH_VIDEOS_BASE_URL };
