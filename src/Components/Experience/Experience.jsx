import React from "react";
import "./experience.css";
import { FaReact } from "react-icons/fa6";
import { FcAndroidOs } from "react-icons/fc";
import { IoIosAppstore } from "react-icons/io";
import { BiLogoJavascript } from "react-icons/bi";
import { SiNextdotjs, SiSocketdotio, SiPython, SiMui } from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";
import { FaNode, FaAws } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
          <article className="experience_details">
              <FaReact className="experience_details-icon" />
              <div>
              <h4>React Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <IoIosAppstore className="experience_details-white" />
              <div>
              <h4>iOS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FcAndroidOs className="experience_details-icon" />
              <div>
              <h4>Android</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiNextdotjs className="experience_details-black" />
              <div>
                <h4>NextJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BiLogoJavascript className="experience_details-icon" />
              <div>
              <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMui className="experience_details-icon" />
              <div>
              <h4>MUI</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END of FrontEnd */}

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaNode className="experience_details-green" />
              <div>
              <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <TbBrandMysql className="experience_details-white" />
              <div>
              <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiSocketdotio className="experience_details-white" />
              <div>
              <h4>Socket.io</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaAws className="experience_details-white" />
              <div>
              <h4>AWS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiPython className="experience_details-white" />
              <div>
              <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiLogoFirebase className="experience_details-yellow" />
              <div>
              <h4>Firebase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
