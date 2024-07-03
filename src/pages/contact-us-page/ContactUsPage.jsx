import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../../shared/GlobalStyles.css";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-us-page">
      <div className="contact-us-container">
        <div className="contact-us-label">
          <h1>Interested in working together?</h1>
          <p>
            Feel free to reach out if you're interested in collaborating on a
            project.
          </p>
        </div>
        <div className="contact-us-content">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="youremail@domain.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="blue-button send-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
