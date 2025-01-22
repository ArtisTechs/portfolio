import React from "react";
import { scroller } from "react-scroll";
import "../../shared/GlobalStyles.css";
import "./HomePage.css";
import Gravatar from "react-gravatar";
import { SECTIONS } from "../../shared/enum/SectionsEnum";

const HomePage = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 10,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="homepage">
      <div className="intro-container">
        <div className="avatar-container">
          <Gravatar email="suarezestanislaojose@gmail.com" size={200} />
        </div>

        <div className="content">
          <h1>Hello, I'm EJ Suarez</h1>
          <p className="w-100">
            A passionate and dedicated <b>Web/App Developer</b> with a love for
            creating interactive and user-friendly web applications.
            Enthusiastic about helping others bring their ideas to life by
            transforming them into impactful web or app solutions.
          </p>
          <div className="buttons">
            <button
              className="common-button homepage-button"
              onClick={() => scrollToSection(SECTIONS.PROJECTS)}
            >
              What I do
            </button>
            <button
              className="blue-button homepage-button"
              onClick={() => scrollToSection(SECTIONS.CONTACT)}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
