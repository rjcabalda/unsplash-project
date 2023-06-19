import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;
// when pushing to git hub, key must hide.
// use env variable to hide the key when pushing to github or any version control system.
// the key is in the env file.
// env file must in the root. to get the value in the .env = import.meta.env.VITE_API_KEY
// .env must in the .gitignore. what's in the gitignore will not push to github.
export const useFetchPhoto = () =>{
    const {searchTerm} = useGlobalContext();
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['photo', searchTerm], //every time user search, it will trigger refetch due to change state of searchTerm
                                        // adding the search term will trigger refetch       
        queryFn : async() => {  
                const {data} = await axios.get(`${url}&query=${searchTerm}`);
                return data; 
        },
        });
     return {data, isLoading, isError, error};
}