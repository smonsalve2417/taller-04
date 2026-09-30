import'./Header.css'

function Header() {
  return (
    <header className="header">
          <p className="header__logo">ReactAcademy</p>
          <nav className="header__menu">
            <a href="#inicio">Inicio</a>
            <a href="#cursos">Cursos</a>
            <a href="#nosotros">Nosotros</a>
        </nav>
    </header>
  )
}

export default Header