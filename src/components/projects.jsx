import "../css/Projects.css";
import React from "react";
import Helix from "../img/helix.png";
import Divert from "../img/divert.png";
import Mendeleum from "../img/mendeleum.png";
import OldPortfolio from "../img/old-portfolio.png";
import Unnamed from "../img/covid_blog.png";
import Covid2 from "../img/covid.png";
import MusicSwitch from "../img/music_switch_2.png";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-5 card-container">
            <div className="card-inside">
              <img
                className="image-projects"
                draggable="false"
                src={Helix}
                alt="helix"
              ></img>
            </div>
          </div>
          <div className="col-md-7 card-container">
            <div className="card-inside">
              <div className="card-inside">
                <img
                  className="image-projects"
                  draggable="false"
                  src={Divert}
                  alt="divert"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 card-container" style={{ height: "600px" }}>
            <div className="card-inside">
              <img
                className="image-projects"
                draggable="false"
                src={Mendeleum}
                alt="mendeleum"
              ></img>
            </div>
          </div>
          <div className="col-md-6" style={{ height: "600px" }}>
            <div className="row">
              <div
                className="col-md-12"
                style={{ padding: 20, height: "300px" }}
              >
                <div className="card-inside">
                  <img
                    className="image-projects"
                    draggable="false"
                    src={OldPortfolio}
                    alt="old-portfolio"
                  ></img>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-12"
                style={{ padding: 20, height: "300px" }}
              >
                <div className="card-inside">
                  <img
                    className="image-projects"
                    draggable="false"
                    src={Unnamed}
                    alt="unnamed"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 card-container">
            <div className="card-inside">
              <img
                className="image-projects"
                draggable="false"
                src={Covid2}
                alt="covid2"
              ></img>
            </div>
          </div>
          <div className="col-md-5 card-container">
            <div className="card-inside">
              <img
                className="image-projects"
                draggable="false"
                src={MusicSwitch}
                alt="musicswitch"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
