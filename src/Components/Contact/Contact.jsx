import React from "react";
import axios from "axios";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";

import contactImg from "../../assets/Contact.png";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Change
  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !values.name.trim() ||
      !values.email.trim() ||
      !values.subject.trim() ||
      !values.message.trim()
    ) {
      toast.warning("Please fill all fields!");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: "03ddc826-d0ca-4283-9742-dbba608e0a7f",

        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      });

      if (response.data.success) {
        toast.success("Message Sent Successfully!");

        setValues({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);

      toast.error("Failed To Send Message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <ToastContainer />

      <h2 className="heading">
        Get In <span>Touch</span>
      </h2>

      <div className="contact-container">
        {/* Left Image */}
        <div className="image-box">
          <img src={contactImg} alt="contact" />
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={values.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={values.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={values.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? (
              <span className="loading">
                Sending...
                <BiLoaderAlt className="animate-spin" />
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
