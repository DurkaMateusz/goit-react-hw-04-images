import axios from "axios";

 export const fetchImages = async (searchQuery, currentPage) => {
    axios.defaults.baseURL = "https://pixabay.com/api/";
    const key = "41298074-cfd64eaa637c088c07f5acf73";
    const url = `?q=${searchQuery}&page=${currentPage}&key=${key}&safesearch=true&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(url);
    return response;
}