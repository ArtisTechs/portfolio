import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../../shared/GlobalStyles.css";
import "./ContactUsPage.css";
import { faSpinner, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactUsPage = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);
  const [canSend, setCanSend] = useState(true);

  useEffect(() => {
    const lastSentDate = localStorage.getItem("lastSentDate");
    if (lastSentDate) {
      const lastSent = new Date(lastSentDate);
      const now = new Date();
      if (lastSent.toDateString() === now.toDateString()) {
        setCanSend(false);
        setIsSent(true);
      }
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);
    setSendFailed(false);

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
          setIsSent(true);
          setIsSending(false);
          setCanSend(false);
          localStorage.setItem("lastSentDate", new Date().toISOString());
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          setSendFailed(true);
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
            project or if you have any inquiries.
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
                disabled={!canSend}
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
                disabled={!canSend}
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
                disabled={!canSend}
              ></textarea>
            </div>
            <button
              type="submit"
              className="blue-button send-button"
              disabled={!canSend || isSending || isSent}
            >
              {isSending ? (
                <FontAwesomeIcon
                  className="loading-icon"
                  icon={faSpinner}
                  spin
                  size="1x"
                />
              ) : isSent ? (
                <FontAwesomeIcon
                  className="check-icon"
                  icon={faCheck}
                  size="1x"
                />
              ) : (
                "Send"
              )}
            </button>
            {isSent && (
              <p className="success-message mt-2 mb-0">Message is sent!</p>
            )}
            {sendFailed && (
              <p className="text-danger mt-2 mb-0">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
