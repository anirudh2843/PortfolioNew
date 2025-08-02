import axios from "axios";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "./Contact.css";
import contactImg from "../../assets/Contact.png";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "", // ✅ Company email
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.name.trim() || !values.email.trim() || !values.subject.trim() || !values.message.trim()) {
      toast.warning("Please fill all fields!");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/mail", values);

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setValues({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      toast.error("Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <ToastContainer />
      <h2 className="heading">
        <i className="fas fa-headset"></i> Get in <span>Touch</span>
      </h2>

      <div className="contact-container">
        <div className="image-box">
          <img src={contactImg} alt="Contact" />
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Full Name *" value={values.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email *" value={values.email} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject *" value={values.subject} onChange={handleChange} required />
          <textarea name="message" placeholder="Message *" value={values.message} onChange={handleChange} required></textarea>

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? (
              <span className="loading">
                Sending <BiLoaderAlt className="animate-spin" />
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
