import axios from "axios";
import { useState, useEffect } from "react";
import CardProducts from "../components/CardProducts";

function Products() {
  const apiUrl = "http://localhost:3000"
  const [posts, setPosts] = useState([])

  const fechBlog = () => {
    axios.get(`${apiUrl}/posts`)
    .then (res => 
      setPosts(res.data)
    )
  }
  
  useEffect (() => {
    fechBlog()
  }, [])

  return (
    <main>
     <div className="container container-main">
       <div className="row m-5">
         {posts.map(post => ( 
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