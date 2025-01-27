import navBar from '../data/navBar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <section className="container container-nav">
      <nav className="navbar navbar-expand-lg navbar-light navBar">   
        <ul className="navbar-nav">
          {navBar.map(item => 
            <li className="nav-item" key={item.id}>
              <NavLink to={item.url} className="navlink">{item.title}</NavLink>
            </li>
            )}
        </ul>
      </nav>
    </section>

    </header>
  )
}

export default Header