import Header from "../components/Header";
import Hero from "../components/Hero";
import Mid from "../components/Mid";
import Bottom from "../components/Bottom";
import Footer from "../components/Footer";

function Principal() {
  return (
    <div className="app-shell">
      <Hero />
      <Mid />
      <Bottom />
    </div>
  );
}

export default Principal;
