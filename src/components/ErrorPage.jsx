import Header from "./Header";
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
      </main>
    </>
  );
}

export default ErrorPage;
