import { useState, useContext, createContext } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
  const [posts, setPosts] = useState([])

  const apiUrl = "http://localhost:3000"

  const fetchBlog = () => {
    axios.get(`${apiUrl}/posts`)
    .then (res => 
      setPosts(res.data)
    )
    .catch(e => 
      console.log('errore nel caricamento')
    )
  }

  const onDelete = (id) => {
    axios.delete(`${apiUrl}/posts/${id}`)
      .then(res => {
       setPosts((prevPost) => prevPost.filter (post => post.id != id))
      })
      .catch(error => {
        console.error("Errore ", error)
      })
    }

  const details = (id) => {
    axios.get(`${apiUrl}/posts/${id}`)
     .then(res => {
        setPosts(res.data)
      })
      .catch(error => {
        console.error("Errore ", error)
      })}


  return (
     <GlobalContext.Provider value = {{fetchBlog, posts, onDelete, details}}>
       {children}
     </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export {
  GlobalProvider,
  useGlobalContext
}