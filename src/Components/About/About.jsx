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

          <p>
            I am eager to contribute my expertise in a challenging role that
            promotes growth. Proficient in Front End and Cloud Technologies, I have
            hands-on experience in developing mobile and web applications using
            ReactJS/NextJS, React-Native, Tailwind CSS, and AWS. My ability to
            collaborate effectively within cross-functional teams, resolve
            complex technical challenges, and adapt to emerging technologies
            like React Native and Firebase highlights my adaptability and
            commitment. I am passionate about driving innovation and delivering
            high-quality solutions that exceed client expectations. I am
            actively seeking a dynamic position where I can apply my skills and
            enthusiasm, making substantial contributions to the organization's
            success.
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
