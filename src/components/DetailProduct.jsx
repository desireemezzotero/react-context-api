import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

function DetailProducts(props) {
  const navigate = useNavigate();

  const {image, title, content, id } = props.post
  return (
  <>
    <div className="container d-flex justify-content-center">
      <div className="card card-detail" key={id}>
        <img src={image} className="card-img-top" alt="... " />
          <div className="card-body">
           <h5 className="card-title">{title}</h5>
           <p className="card-text">{content}</p>
          </div>
        <div className="d-flex justify-content-between">
           <div className="btn btn-success" style={{width: "50px"}} onClick={() => navigate(-1)}>
             <Link className="btn btn-success ms-0">
               <i class="fa-solid fa-backward"></i>
              </Link>
           </div>
            <div className="btn btn-success" style={{width: "50px"}} onClick={() => navigate(-1)}>
              <Link className="btn btn-success ms-0">
                 <i class="fa-solid fa-forward"></i>
              </Link>
             </div>
        </div>

      </div>
    </div>
  </>
  )
}

export default DetailProducts