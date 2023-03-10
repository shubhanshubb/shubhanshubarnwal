import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xoueosz', 'template_tsdjprb', form.current, 'wHWY_pO5eL844KARX')
    .then((result) => {
      console.log(result.text);
      }, (error) => {
      console.log(error.text);
      });
      e.target.reset()
    };
    
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className='contact_option-icon'/>
            <h4>Email</h4>
           <h5>shubhanshubb@gmail.com</h5>
           <a href="mailto:shubhanshubb@gmail.com" target="_blank">Mail me</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messanger</h4>
           <h5>MeShubhanshu</h5>
           <a href="https://m.me/MeShubhanshu" target="_blank">Say Hi!</a>
          </article>
          <article className="contact_option">
            <SiWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
           <h5>+918809848399</h5>
           <a href="https://api.whatsapp.com/send?phone=918809848399" target="_blank">Dm Hi !</a>
          </article>
        </div>
        {/* END OF Contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='Submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
