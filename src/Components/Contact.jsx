import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import contactus from "../assets/contactus3.png";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validate = () => {
    let tempErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!form.name) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }
    if (!form.email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Email is invalid.";
      isValid = false;
    }
    if (!form.message) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .send(
          "service_k9y1acb", 
          "template_rbi8xmr",
          form,
          "S7gy-D6L5Y0lPt5oi"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSubmitted(true);
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitted(false), 3000);
          },
          (error) => {
            console.error("FAILED...", error);
          }
        );
    }
  };

  return (
    <section id="contact" className="contact">
      <h3>Contact Me</h3>
      <div className="contact-container">
        <div className="contact-image">
          <img src={contactus} className="mx-auto md:mx-0" alt="Contact" />
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </label>
          <button type="submit" disabled={submitted}>
            Send
          </button>
          {submitted && (
            <div className="success-message">Form submitted successfully!</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
