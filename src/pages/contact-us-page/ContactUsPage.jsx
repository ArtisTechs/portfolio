import React from "react";
import "../../shared/GlobalStyles.css";
import "./ContactUsPage.css";

const ContactUsPage = () => {
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
          <h1>Contact</h1>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
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
