import React from "react";
import "./Footer.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faViber,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const FBLink = "https://www.facebook.com/ej.suarez.jr.2024";
  const GithubLink = "https://github.com/ArtisTechs";
  const LinkedInLink =
    "https://www.linkedin.com/in/estanislao-jose-suarez-015818258/";

  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <button onClick={() => handleLinkClick(GithubLink)}>
            <FontAwesomeIcon icon={faGithub} className="link-icon" />
          </button>
          <button onClick={() => handleLinkClick(LinkedInLink)}>
            <FontAwesomeIcon icon={faLinkedin} className="link-icon" />
          </button>
          <button onClick={() => handleLinkClick(FBLink)}>
            <FontAwesomeIcon icon={faFacebook} className="link-icon" />
          </button>
        </div>
        <p>
          <span>
            <FontAwesomeIcon icon={faViber} className="me-2" />
            09511682096
          </span>
          <span className="separator">|</span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            suarezesatanislaojose@gmail.com
          </span>
        </p>
        <p>© 2024 Estanislao Jose B. Suarez. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
