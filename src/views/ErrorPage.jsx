import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ErrorPage.css";
function ErrorPage() {
  return (
    <>
      <Header />
      <main className="error">
        <h1 className="error__title">Error 404</h1>
        <p className="error__message">
          The page you are looking for does not exist.
        </p>
        <button className="button" onClick={() => window.history.back()}>
          Volver atrás
        </button>
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
