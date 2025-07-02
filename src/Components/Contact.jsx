import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Send } from 'lucide-react';


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
    toast.success("Form submitted successfully!");
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });

    // Block form for 10 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 10000); // 10 seconds
  },
  (error) => {
    console.error("FAILED...", error);
    toast.error("Something went wrong. Please try again.");
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
        disabled={submitted}
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
        disabled={submitted}
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
        disabled={submitted}
      />
      {errors.message && <span className="error">{errors.message}</span>}
    </label>

    <button type="submit" disabled={submitted}  className="flex items-center justify-center gap-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed">
      
      {submitted ? "Please wait..." : "Send"}
      <Send size={20} strokeWidth={3}/>
    </button>
  </form>

  {/* Toast container for notifications */}
  <ToastContainer
  position="top-center"
  autoClose={4000}
  closeButton={false}          
  
  toastClassName="custom-toast"
  bodyClassName="custom-toast-body"
  progressClassName="custom-toast-progress"
/>
</div>


    </section>
  );
};

export default Contact;




