import "../css/About.css";
import React from "react";
import Avatar from "../img/portrait.jpeg";

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row" id="about-me">
          <div className="col-md-7">
            <h1>
              Daniel Petrik<br></br>
              <span className="fs-id">Full-Stack Developer</span>
            </h1>
            <p>About</p>
            <p className="paragraph">
              I am Daniel Petrik, originally from Serbia, a seasoned{" "}
              <b style={{ fontWeight: "bold" }}>full-stack developer</b> with a
              profound passion for technology and a talent for creative
              problem-solving. Over the course of my career, I have immersed
              myself in the dynamic field of{" "}
              <b style={{ fontWeight: "bold" }}>web development</b>. In addition
              to my coding expertise, I am an enthusiastic reader, exploring a
              wide range of literary genres, from science fiction to historical
              non-fiction.
            </p>
            <p className="paragraph">
              With a wealth of experience in crafting robust and scalable web
              applications, I have honed my skills in both{" "}
              <b style={{ fontWeight: "bold" }}>front-end</b> and
              <b style={{ fontWeight: "bold" }}> back-end development</b>. My
              commitment to staying abreast of the latest industry trends and
              technologies ensures that my work is not only proficient but also
              at the forefront of innovation. I thrive in dynamic work
              environments where challenges fuel my continuous growth and
              learning.
            </p>
          </div>
          <div className="col-md-5" id="contacts-id">
            <img src={Avatar}></img>
            <p style={{ paddingBottom: 20 }}>Contact</p>
            <div className="icons">
              <a href="https://github.com/petrikgit" target="_blank">
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
              <a href="https://sk.linkedin.com/in/daniel-petrik-b401aa27a?trk=people-guest_people_search-card" target="_blank">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                </svg>
              </a>
            </div>
            <p style={{ fontWeight: "500", color: "#111111", marginTop: 10 }}>
              <a className="mail-to" href="mailto:office@petrik.com" target="_blank" style={{textDecoration: 'none', color: "#111111"}}>office@petrikd.com</a>
            </p>
          </div>
        </div>
        <div className="row" id="education">
          <h1>Education & Experience</h1>
          <div className="row">
            <div className="col-md-6">
              <p style={{ color: "#999999", fontWeight: 300, marginBottom: 9 }}>
                2017 - 2018
              </p>
              <h3 style={{ lineHeight: "25px" }}>
                ITAcademy
                <br></br>
                <span
                  style={{ color: "#999999", fontWeight: 300, fontSize: 20 }}
                >
                  Java Development
                </span>
              </h3>
              <p
                className="paragraph"
                style={{ marginTop: 20, marginBottom: 50 }}
              >
                The aim of the final project within the Java Programming course
                is to independently create a project that encompasses all the
                areas covered in the Java study program. The project consists of
                creating a software solution approved by an expert commission,
                which includes program design, implementation, testing, and the
                creation of relevant documentation.
              </p>
            </div>
            <div className="col-md-6">
              <p style={{ color: "#999999", fontWeight: 300, marginBottom: 9 }}>
                09.2022 - 03.2023
              </p>
              <h3 style={{ lineHeight: "25px" }}>
                Gamanet a.s.
                <br></br>
                <span
                  style={{ color: "#999999", fontWeight: 300, fontSize: 20 }}
                >
                  Javascript Developer
                </span>
              </h3>
              <p className="paragraph" style={{ marginTop: 20 }}>
                - Creating websites in JavaScript according to the Employer’s
                instructions<br></br> - Collaboration with other teams of the
                Employer<br></br> - Other activities as per the Employer`s
                instructions
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p style={{ color: "#999999", fontWeight: 300, marginBottom: 9 }}>
                2019 - 2023
              </p>
              <h3 style={{ lineHeight: "25px" }}>
                Faculty of Natural Sciences<br></br>University of Saints Cyril
                and Methodius in Trnava
                <br></br>
                <span
                  style={{ color: "#999999", fontWeight: 300, fontSize: 20 }}
                >
                  Bc. Applied Informatics
                </span>
              </h3>
              <p className="paragraph" style={{ marginTop: 20 }}>
                The study program in applied informatics is part of the study
                field 18 informatics. It focuses on the principles, methods, and
                tools for creating software applications, graphic data
                processing, and data visualization in the natural sciences.
              </p>
            </div>
            <div className="col-md-6">
              <p style={{ color: "#999999", fontWeight: 300, marginBottom: 9 }}>
                05.2023 - present
              </p>
              <h3 style={{ lineHeight: "25px" }}>
                Novis Insurance Company
                <br></br>
                <span
                  style={{ color: "#999999", fontWeight: 300, fontSize: 20 }}
                >
                  Frontend Developer/Backend Developer
                </span>
              </h3>
              <p className="paragraph" style={{ marginTop: 20 }}>
                - Front-end development of new and existing applications{" "}
                <br></br>- Implementation of graphical visualizations <br></br>-
                Collaboration and communication with other team members during
                solution implementation <br></br>- Development of the assigned
                part of the IS (Information System) according to the provided
                specifications and documentation
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: 25,
            marginBottom: 25,
          }}
        >
          <hr style={{ width: "60px", color: "#111111" }}></hr>
        </div>
        <div className="skills">
          <p>
            HTML & CSS • Bootstrap • Javascript • React.js • Node.js • MongoDB •
            SQL • Python • Django • Webflow • Xano • C#{" "}
          </p>
          <p>
            Web Development • Game Development • Database Engineer • No-Code
            Platform • Full-Stack Development
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
