import "./Hero.css";
import { useNavigate } from "react-router";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero" id="inicio">
      <p className="heading">
        Aprende <span className="header__span">React</span> desde cero
      </p>
      <p className="subheading">
        Domina la libreria mas popular del frontend con proyectos<br></br>{" "}
        practicos y reales.
      </p>
      <button className="button" onClick={() => navigate("/cursos")}>
        Ver Cursos
      </button>
    </div>
  );
}

export default Hero;

//hero
