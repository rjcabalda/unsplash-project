import axios from "axios";
import { useFetchPhoto } from "../utils/reactQuery";

const Gallery = () => {
  const {data, isLoading, isError, error} = useFetchPhoto();
  console.log(import.meta.env.VITE_API_KEY);

  if(isLoading){
    return <section className="image-container">
      <h4>Loading...</h4>
    </section>
  }
  if(isError){
    return <section className="image-container">
      <h4>There was an error</h4>
    </section>
  }
  if(data.results.length < 1){
    return <section className="image-container">
      <h4>No result found</h4>
    </section>
  }

  
  return (
    <section className="image-container">
      {data?.results?.map((item)=>{
        const url = item?.urls?.regular;
        return(
          <img src={url} alt={item.alt_description} key={item.id} className="img"/>
        )
      })}
    </section>
  )
}

export default Gallery;