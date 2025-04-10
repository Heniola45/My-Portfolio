import Footer from "../footer/Footer";
import "./ContactPage.css";

function ContactPage() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>I’d love to hear from you. Whether it’s a project, collaboration, or just a quick hello!</p>

        <form action="https://formspree.io/f/mjkyjkjn" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer/>
    </section>
  );
}

export default ContactPage;
