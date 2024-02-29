import "../css/Projects.css";
import React from "react";
import Helix from "../img/helix.svg";
import Divert from "../img/divert.svg";
import Mendeleum from "../img/mendeleum.png";
import OldPortfolio from "../img/old-portfolio.svg";
import Unnamed from "../img/chatbot.jpg";
import Covid2 from "../img/covid.png";
import MusicSwitch from "../img/music_switch_2.svg";

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
                src={Mendeleum}
                alt="mendeleum"
              ></img>
              <div className="porftolio-layer">
                    <div className="portfolio-title">
                        <h4 id="menedelum-h4">Mendeleum</h4>
                        <h4 id="menedelum-h4-2" style={{fontSize: "1.3rem", marginBottom: "15px", marginTop: "10px"}}>(Game Development)</h4>
                        <div style={{backgroundColor: "rgb(20 20 20 / 60%)", backdropFilter: "blur(.25rem)", border: "1px solid transparent", boxShadow: "0.5rem 0.5rem 0.5rem rgba(0,0,0,.35)", borderRadius: "1rem", padding: "5px"}}>
                        <p id="menedelum-p">"Mendeleum - Little Rescuer" is a single-player game featuring a top-down view. This educational game aims to help players create basic chemical elements and revisit various chemical elements.</p>
                        <p id="menedelum-p-2">(Unity, C#)</p>
                        </div>
                    <a href="https://github.com/petrikgit/Mendeleum" target="_blank">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 card-container">
            <div className="card-inside">
              <div className="card-inside">
                <img
                  className="image-projects"
                  draggable="false"
                  src={OldPortfolio}
                  alt="oldporfolio"
                ></img>
                <div className="porftolio-layer">
                    <div className="portfolio-title">
                        <h4 id="menedelum-h4">Daniel.dev 0.1</h4>
                        <h4 id="menedelum-h4-2" style={{fontSize: "1.3rem", marginBottom: "15px", marginTop: "10px", }}>(Web Development)</h4>
                        <div style={{backgroundColor: "rgb(20 20 20 / 60%)", backdropFilter: "blur(.25rem)", border: "1px solid transparent", boxShadow: "0.5rem 0.5rem 0.5rem rgba(0,0,0,.35)", borderRadius: "1rem", padding: "5px"}}>
                          <p id="menedelum-p">The old portfolio website, displaying my work for inspiration. Explore my project for ideas and motivation.</p>
                          <p id="menedelum-p-2">(PHP, JavaScript)</p>
                        </div>
                    <a href="https://divert.tech" target="_blank">
                    <svg style={{color: "rgb(153, 153, 153)", width: "25px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z" fill="#999999"></path></svg></a>
                    </div>
              </div>
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
                src={Divert}
                alt="divert"
              ></img>
              <div className="porftolio-layer">
                    <div className="portfolio-title">
                        <h4 id="menedelum-h4">Divert</h4>
                        <h4 id="menedelum-h4-2" style={{fontSize: "1.3rem", marginBottom: "15px", marginTop: "10px"}}>(Web Application)</h4>
                        <div style={{backgroundColor: "rgb(20 20 20 / 60%)", backdropFilter: "blur(.25rem)", border: "1px solid transparent", boxShadow: "0.5rem 0.5rem 0.5rem rgba(0,0,0,.35)", borderRadius: "1rem", padding: "5px"}}>
                        <p id="menedelum-p">The application aims to simplify project management for beginners and starting teams by providing a user-friendly platform with features like Gantt charts, while avoiding the complexity and cost associated with existing solutions such as Asana, Slack, and Trello.</p>
                        <p id="menedelum-p-2">(React.js, Node.js, MongoDB)</p>
                        </div>
                        <a href="https://github.com/petrikgit/Divert" target="_blank">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a></div>
              </div>
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
                    src={Helix}
                    alt="helix"
                  ></img>
                  <div className="porftolio-layer">
                    <div className="portfolio-title">
                        <h4 id="menedelum-h4">Paradise Studio</h4>
                        <div style={{backgroundColor: "rgb(20 20 20 / 60%)", backdropFilter: "blur(.25rem)", border: "1px solid transparent", boxShadow: "0.5rem 0.5rem 0.5rem rgba(0,0,0,.35)", borderRadius: "1rem", padding: "5px"}}>
                          <p id="menedelum-p">A captivating website for a piercing studio effortlessly came to life using a no-code platform, offering an enticing digital space for clients to explore services and portfolios while easily accessing contact details.</p>
                        </div>
                    <a href="https://paradise-piercing.webflow.io/" target="_blank">
                    <svg style={{color: "rgb(153, 153, 153)", width: "25px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z" fill="#999999"></path></svg></a>
                    </div>
              </div>
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
                  <div className="porftolio-layer">
                    <div className="portfolio-title">
                        <h4 id="menedelum-h4">Vitality Vault</h4>
                        <div style={{backgroundColor: "rgb(20 20 20 / 60%)", backdropFilter: "blur(.25rem)", border: "1px solid transparent", boxShadow: "0.5rem 0.5rem 0.5rem rgba(0,0,0,.35)", borderRadius: "1rem", padding: "5px"}}>
                          <p id="menedelum-p">A dynamic website for gym seamlessly materialized through a no-code platform, providing a compelling online space for members to connect and explore fitness offerings. (In progress)</p>
                        </div>
                    {/* <a href="https://paradise-piercing.webflow.io/" target="_blank">
                    <svg style={{color: "rgb(153, 153, 153)", width: "25px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z" fill="#999999"></path></svg></a>
                     */}
                    </div>
              </div>
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
              <div className="porftolio-layer">
                    <div className="portfolio-title">
                        <h4 id="menedelum-h4">Covid 1.0</h4>
                        <h4 id="menedelum-h4-2" style={{fontSize: "1.3rem", marginBottom: "15px", marginTop: "10px"}}>(Game Development)</h4>
                        <div style={{backgroundColor: "rgb(20 20 20 / 60%)", backdropFilter: "blur(.25rem)", border: "1px solid transparent", boxShadow: "0.5rem 0.5rem 0.5rem rgba(0,0,0,.35)", borderRadius: "1rem", padding: "5px"}}>
                        <p id="menedelum-p">"COVID 1.0" is a 2D open-world video game made with the Godot game engine. Players act as doctors in a vast natural setting, aiming to vaccinate as many coronavirus-infected humans as possible before time expires.</p>
                        <p id="menedelum-p-2">(Godot)</p>
                        </div>
                    <a href="https://github.com/petrikgit/Covid-1.0" target="_blank">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    </div>
              </div>
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
              <div className="porftolio-layer">
                    <div className="portfolio-title">
                        <h4 id="menedelum-h4">Music Switch</h4>
                        <h4 id="menedelum-h4-2" style={{fontSize: "1.3rem", marginBottom: "15px", marginTop: "10px"}}>(Web Application)</h4>
                        <div style={{backgroundColor: "rgb(20 20 20 / 60%)", backdropFilter: "blur(.25rem)", border: "1px solid transparent", boxShadow: "0.5rem 0.5rem 0.5rem rgba(0,0,0,.35)", borderRadius: "1rem", padding: "5px"}}>
                        <p id="menedelum-p">This user-friendly e-commerce site, built with Java, sells musical instruments and gear, showcasing innovative solutions in online retail.</p>
                        <p id="menedelum-p-2">(Java Web, MySQL)</p>
                        </div>
                    <a href="https://github.com/petrikgit/Music-Switch" target="_blank">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
