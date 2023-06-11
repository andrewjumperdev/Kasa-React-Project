import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/main.scss";
import Home from "./pages/Home/";
import Header from "./components/Header";
import CardDetail from "./components/CardDetail";
import PageNotFound from "./pages/404";
import Apropos from "./pages/Apropos";
import Footer from "./components/Footer/"


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<CardDetail />} />
        <Route path="/a-propos" element={<Apropos/>} /> 
        <Route path="*" element={<PageNotFound />} />        
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
