import React from "react";
import "../css/Hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="hero-container">
          <div className="hero">
            <h1>
              Hello<span className="gray-dot"></span>
            </h1>
            <p>
              I am Daniel Petrik -{" "}
              <span className="gray">Full Stack Developer</span>
              <br></br>
              Code Composer: Harmonizing Technology with Artistry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
