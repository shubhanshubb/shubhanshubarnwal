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
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <ImUsers className="about_icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscRootFolder className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            I am a software developer with robust problem-solving skills and
            proven experience in creating and designing software in a
            test-driven environment. A <b> Thinker, Team Management,
            Collaborative and disciplined fresher </b>seeking an opportunity to work
            in a challenging environment and utilize my knowledge in the growth
            of the organization.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
