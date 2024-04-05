import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="background">
        <div className="content">
          <h1>Hello, I'm EJ Suarez</h1>
          <p>
            I'm a front-end developer and graphic designer based in Philippines
          </p>
          <div className="buttons">
            <button className="resume-button">Resume</button>
            <button className="contact-button">Get in touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
