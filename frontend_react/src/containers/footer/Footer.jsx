import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import emailjs from '@emailjs/browser';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Custom validation for each field
    const input = e.target;
    if (input.name === "name") {
      // Check if name is empty
      if (input.value.trim() === "") {
        input.setCustomValidity("Please enter your name.");
      } else {
        input.setCustomValidity("");
      }
    }

    if (input.name === "email") {
      // Check if email is valid
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (input.value.trim() === "") {
        input.setCustomValidity("Please enter your email.");
      } else if (!emailPattern.test(input.value)) {
        input.setCustomValidity("Please enter a valid email address.");
      } else {
        input.setCustomValidity("");
      }
    }

    if (input.name === "message") {
      // Check if message is empty
      if (input.value.trim() === "") {
        input.setCustomValidity("Please enter your message.");
      } else {
        input.setCustomValidity("");
      }
    }
  };



const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  

  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  emailjs.send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((error) => {
      console.log("Failed to send email", error);
      setLoading(false);
    });
};


  return (
    <>
      <h2 className="head-text">Reach out to me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:ehianefaith98@gmail.com" className="p-text">ehianefaith98@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+2348136358397" className="p-text">+2348136358397</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="submit" className="p-text">
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Footer, 'contact');
