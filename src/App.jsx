import { useState } from "react";
import TopBar from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Mid from "./components/Mid";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import Principal from "./views/principal";
import ErrorPage from "./components/ErrorPage";
import Login from "./views/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/cursos" element={<Mid />} />
      <Route path="/nosotros" element={<Bottom />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
