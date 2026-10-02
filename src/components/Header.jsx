import "./Header.css";
import { NavLink } from "react-router";

function Header() {
  return (
    <header className="header">
      <p className="header__logo">ReactAcademy</p>
      <nav className="header__menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__menu--active" : "header__menu"
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/cursos"
          className={({ isActive }) =>
            isActive ? "header__menu--active" : "header__menu"
          }
        >
          Cursos
        </NavLink>
        <NavLink
          to="/nosotros"
          className={({ isActive }) =>
            isActive ? "header__menu--active" : "header__menu"
          }
        >
          Nosotros
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
