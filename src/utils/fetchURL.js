import axios from "axios";

const customFetch = axios.create({
    baseURL: 'https://api.unsplash.com/search/photos?client_id=-1ZMECLZ_SF3kxwX3LMk5oqR3Q3ENXXvcRb55NHQOS0&query=cat',
}); 


export default customFetch;