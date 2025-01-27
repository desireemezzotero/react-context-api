import FooterBar from "../data/footerBar"
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
        <section className="container container-nav">
          <nav className="navbar navbar-expand-lg navbar-light navBar">   
            <ul className="navbar-nav">
              {FooterBar.map(item => 
                <li className="nav-item" key={item.id}>
                  <NavLink to={item.url} className="navlink"> 
                    <i className={`fa-brands fa-${item.name.toLowerCase()}`} style={{ marginRight: "8px" }}></i>
                      {item.name}
                  </NavLink>
                </li>
                )}
            </ul>
          </nav>
        </section>
      )
}

export default Footer