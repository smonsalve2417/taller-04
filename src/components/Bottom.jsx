import { useState } from "react";
import './Bottom.css'

function Bottom() {
  const [conteo, setConteo] = useState(0);
  const handleIncrement = () => {
    setConteo(conteo + 1);
  }
  const handleDecrement = () => {
      setConteo(conteo - 1);
  };

  return (
    <div className="bottom">
      <p className="bottom__heading">Cuantos estudiantes van a inscribirse?</p>
      <p className="subheading">Usa los botones para ajustar el numero</p>
      <div className="counter">
        <button className="button button--circle" onClick={handleDecrement}>-</button>
        <span className="bottom__value">{conteo}</span>
        <button className="button button--circle" onClick={handleIncrement}>+</button>
      </div>
      <p className="subheading">estudiantes inscritos</p>
    </div>
  );
}

export default Bottom

