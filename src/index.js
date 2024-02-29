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
      <div id="container">
        <div className="pre-loader" style={{ zIndex: 1 }}>
          <div className="loader"></div>
          <div className="loader-bg"></div>
        </div>
        <div className="loader-content">
          <div className="copy">
            <p className="ml16">
              Daniel.<span id="ml16-dev">dev</span>
            </p>
          </div>
        </div>
        <div className="loader-2"></div>
      </div>
      <div className="content" style={{ backgroundColor: "#111111" }}>
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);

document.addEventListener("DOMContentLoaded", function (event) {
  setTimeout(() => {
    window.scrollTo(1, 0);
  }, 0);
});

import("./js/index.js").then((module) => {
  module.default();
});

reportWebVitals();
