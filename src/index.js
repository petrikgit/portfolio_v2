import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Header from "./components/header";
import Footer from "./components/footer";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="content">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
