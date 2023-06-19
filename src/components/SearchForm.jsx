import { useQueryClient } from "@tanstack/react-query";
import { useGlobalContext } from "../utils/context";


const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const searchValue = e.target.elements.search.value; // get the value that has a name attribute equal to search (name='search') which is the input;
        if(!searchValue) return;
        setSearchTerm(searchValue);
    } 
  return (
    <section>
        <h1 className="title">unsplash images</h1>
        <form action="" className="search-form" onSubmit={handleSubmit}>
            <input type="text" className="form-input search-input" name="search" placeholder="cat"/>
            <button type="submit" className="btn">Search</button>
        </form>
    </section>
  )
}

export default SearchForm;