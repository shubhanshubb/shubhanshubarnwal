import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { SiWhatsapp } from 'react-icons/si';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Implement email sending logic here
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className="contact_option-icon" />
            <h4>Email</h4>
            {/* <h5>connect@shubhanshubb.dev</h5> */}
            <a href="mailto:connect@shubhanshubb.dev">Mail me</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            {/* <h5>MeShubhanshu</h5> */}
            <a href="https://m.me/MeShubhanshu" target="_blank" rel="noopener noreferrer">
              Say Hi!
            </a>
          </article>
          <article className="contact_option">
            <SiWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            {/* <h5>+918809848399</h5> */}
            <a href="https://api.whatsapp.com/send?phone=918809848399" target="_blank" rel="noopener noreferrer">
              Dm Hey!
            </a>
          </article>
        </div>
        {/* END OF Contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
