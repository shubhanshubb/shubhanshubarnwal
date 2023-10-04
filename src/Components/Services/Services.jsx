import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>App Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck className="service_list-icon" />
              <p>
                Expert React Native app development for seamless user
                experiences.
              </p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>
                Integration of third-party APIs for enhanced functionalities.
              </p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Custom solutions tailored to diverse business requirements.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>
                Secure authentication, data encryption, and robust app security.
              </p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>
                Continuous testing, debugging, and performance optimization.
              </p>
            </li>
          </ul>
        </article>
        {/* End of App Development*/}
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck className="service_list-icon" />
              <p>Intuitive and visually appealing user interfaces.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Responsive designs for seamless user experiences.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Wireframing, prototyping, and usability testing.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Collaborative UI/UX workshops and consultations.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Design system development and implementation.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck className="service_list-icon" />
              <p>
                Expertise in building scalable applications with Next.js
                framework.
              </p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Skilled in creating responsive UI with Tailwind CSS.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Responsive and interactive web applications.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>E-commerce platforms and content management systems.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>API integration and third-party service implementation.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Performance optimization and security enhancements.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
      </div>
    </section>
  );
};

export default Services;
