import { Link } from "react-router-dom"

const CardProducts = (props) => {
  const {image, title, content, id } = props.post
  const onDelete = props.onDelete
  const details = props.details
  return (
      <div className="col-4 mb-5">
       <div className="card card-product">
        <img 
           className="card-img-top img-card" 
           onError={(e) => {e.target.src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"}}
           src={image} alt="Card image cap" 
        />
           <div className="card-body">
              <h5 className="card-title text-center"><strong>{title}</strong></h5>

              <div className="d-flex justify-content-center">
                 <div className="btn btn-danger" onClick={onDelete}>
                   <i className="fa-solid fa-trash-can"></i>
                 </div>
                  <div className="btn btn-success" onClick={details}>
                    <Link className="btn btn-success ms-0" to={`/dettagli-post/${id}`}>
                       <i class="fa-solid fa-circle-info"></i>
                    </Link>
                  </div>
               </div>
               
           </div>
      </div>
    </div>
  )
}

export default CardProducts