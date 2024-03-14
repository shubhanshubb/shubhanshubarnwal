import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { TbAward } from "react-icons/tb";
import { ImUsers } from "react-icons/im";
import { VscRootFolder } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <TbAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about_card">
              <ImUsers className="about_icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscRootFolder className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>As a React Native developer and software engineer deeply passionate about innovation and armed with problem-solving skills, I thrive in the dynamic landscape of the technology industry. My journey in App Development has always been characterized by a relentless pursuit of excellence and a commitment to staying at the forefront of technological advancements.
Drawing from my extensive expertise in React-Native, NodeJS, SQL, Sockets, and a range of other cutting-edge technologies, I excel in leading projects from conception to execution. At Wiingy in Bengaluru, I spearheaded the development of a sophisticated mobile application, leveraging the power of node.js and socket.io to enhance real-time communication capabilities.
My professional journey has been defined by a dedication to surpassing expectations, whether in crafting seamless user experiences or tackling complex technical challenges. Proficient in collaborating within cross-functional teams, I possess a track record of delivering high-quality solutions that exceed client expectations.</p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
