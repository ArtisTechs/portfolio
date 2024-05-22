import React from "react";
import "../../shared/GlobalStyles.css";
import "./HomePage.css";
import Gravatar from "react-gravatar";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="intro-container">
        <div className="avatar-container">
          <Gravatar email="suarezestanislaojose@gmail.com" size={200} />
        </div>
        <div className="content">
          <h1>Hello, I'm EJ Suarez</h1>
          <p className="w-100">
            A front-end web developer and graphic designer
          </p>
          <div className="buttons">
            <button className="common-button homepage-button">
              Sample Works
            </button>
            <button className="blue-button homepage-button">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
