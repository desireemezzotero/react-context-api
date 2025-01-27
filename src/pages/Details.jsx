import { useParams} from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import DetailProducts from "../components/DetailProduct";

function Details() {
  const {id} = useParams();
  const {fetchBlog, post} = useGlobalContext()

  useEffect(() => {
    fetchBlog()
  }, [id, fetchBlog]);

  return (
    <> 
    {!post ? (
      <p>Caricamento in corso...</p>
    ) : (
      <DetailProducts post={post} />
    )}
    </>
  )
}

export default Details