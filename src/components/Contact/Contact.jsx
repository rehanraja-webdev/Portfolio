import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <span className="section-tag">CONTACT</span>

      <h2>
        Let's <span>Connect</span>
      </h2>

      <p className="contact-description">
        I'm currently open to internships, collaborations, and exciting
        opportunities. Feel free to reach out through any of the platforms
        below.
      </p>

      <div className="contact-cards">
        <a href="mailto:rehanraja.dev@gmail.com" className="contact-card">
          <FaEnvelope />
          <h3>Email</h3>
        </a>

        <a
          href="https://github.com/rehanraja-webdev"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub />
          <h3>GitHub</h3>
        </a>

        <a
          href="https://www.linkedin.com/in/rehan-raja-devs"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin />
          <h3>LinkedIn</h3>
        </a>

        <a
          href="https://instagram.com/official_rehan.0786"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaInstagram />
          <h3>Instagram</h3>
        </a>
      </div>
    </section>
  );
};

export default Contact;
