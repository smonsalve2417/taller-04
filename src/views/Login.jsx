import { useState, useRef } from "react";
import "./Login.css";
import { useNavigate } from "react-router";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const dialogref = useRef(null);

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setMessage("");
  }

  function handleLogin(event) {
    event.preventDefault();
    setMessage("Iniciando sesión de " + form.email);
    dialogref.current.showModal();
  }

  return (
    <main className="login">
      <section className="login__card" aria-labelledby="login-title">
        <h1 className="login__title" id="login-title">
          Iniciar sesion
        </h1>
        <form className="login__form" onSubmit={handleLogin}>
          <div className="login__field">
            <label htmlFor="email" className="login__label">
              Correo electronico
            </label>
            <input
              className="login__input"
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@correo.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="login__field">
            <label htmlFor="password" className="login__label">
              Contrasena
            </label>
            <input
              className="login__input"
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Ingresa tu contrasena"
              autoComplete="current-password"
              required
              minLength="6"
            />
          </div>
          <button
            className="login__button"
            type="submit"
            disabled={!form.email || !form.password}
          >
            Iniciar sesion
          </button>
          {message && <p className="login__message">{message}</p>}
        </form>
      </section>
      <dialog className="login__dialog" aria-live="polite" ref={dialogref}>
        <div className="login__dialog__content">
          <p>{message}</p>
          <button
            className="button"
            onClick={() => {
              dialogref.current.close();
            }}
          >
            Cerrar
          </button>
        </div>
      </dialog>
    </main>
  );
}

export default Login;
