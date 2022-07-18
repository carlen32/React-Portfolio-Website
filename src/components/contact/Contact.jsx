/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {FiMail} from 'react-icons/fi';
import {FaFacebookMessenger} from 'react-icons/fa';
import {AiFillPhone} from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9c1uc9m', 'template_u5p2n1a', form.current, 'T-WGpzv5HfDoDzobS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>carlen488@gmail.com</h5>
            <a href="mailto:carlen488@gmail.com" target="_blank">Send A Message</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>David Carlen</h5>
            <a href="https://m.me/profile.php?id=100082530069752" target='_blank'>Send A Message</a>
          </article>
          <article className="contact__option">
            <AiFillPhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>928-301-1754</h5>
          </article>
        </div>
        {/* END OF CONTACT OPtions */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" id="" cols="30" rows="7" placeholder="Your Message" required></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
