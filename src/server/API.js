import { SEARCH_VIDEOS_BASE_URL, POPULAR_VIDEOS_BASE_URL } from "./Config.js";

const APIController = {
  fetchVideos: async (searchTerm, maxResults) => {
    console.log("In controller");
    const endPoint =
      searchTerm !== ""
        ? `${SEARCH_VIDEOS_BASE_URL}&q=${searchTerm}&maxResults=${maxResults}`
        : `${POPULAR_VIDEOS_BASE_URL}&maxResults=${maxResults}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
  },
};

export default APIController;
