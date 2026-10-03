import "./App.css";
import Mid from "./components/Mid";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import Principal from "./views/principal";
import ErrorPage from "./views/ErrorPage";
import Login from "./views/Login";
import CursosView from "./views/CursosView";
import NosotrosView from "./views/NosotrosView";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/cursos" element={<CursosView />} />
        <Route path="/nosotros" element={<NosotrosView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
