import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import Footer from "../footer/Footer";
import "./ContactPage.css";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // <-- initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjkyjkjn", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>I’d love to hear from you. Whether it’s a project, collaboration, or just a quick hello!</p>

        {submitted ? (
          <div className="success-message">
            🎉 Thank you for your message! I’ll get back to you soon.
            <br />
            <button className="back-home-btn" onClick={() => navigate("/")}>
              Go to Homepage
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        )}

        {error && <div className="error-message">Oops! Something went wrong. Please try again.</div>}
      </div>
      <Footer />
    </section>
  );
}

export default ContactPage;

