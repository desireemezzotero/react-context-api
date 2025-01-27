import { useEffect } from "react";
import CardProducts from "../components/CardProducts";
import { useGlobalContext } from "../context/GlobalContext";

function Products() {
  const {posts, fetchBlog, onDelete, details} = useGlobalContext()
 
  useEffect (() => {
    fetchBlog()
  }, [fetchBlog]) 

  return (
    <main>
     <div className="container container-main">
       <div className="row m-5">
         {posts?.map(post => ( 
           <CardProducts
           key={post.id}
           post={post}
           onDelete={() => onDelete(post.id)}
           detail= {() => details(post.id)} 
           />
         ))}
       </div>{/* row */}
     </div>{/* container */}
   </main>
  )
}

export default Products