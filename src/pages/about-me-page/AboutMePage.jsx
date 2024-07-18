import React from "react";
import "../../shared/GlobalStyles.css";
import "./AboutMePage.css";

const AboutMePage = () => {
  return (
    <div className="about-me-page">
      <div className="about-me-container">
        <h1>About Me</h1>
        <p>
          Ever since I was a kid, I've had a deep love for art. It wasn't until
          my high school days that I discovered programming, and it quickly
          became a passion alongside my artistic interests.
        </p>
        <p>
          As a computer engineering graduate with Latin honors, I've gained
          extensive experience in web development and cloud computing. Currently
          working as a junior software engineer in the Philippines, I specialize
          in creating interactive, user-friendly web applications various
          development tools.
        </p>
        <p>
          My goal is to empower artists and creatives with professional,
          captivating websites to showcase their work. I'm motivated to
          transition into project management, utilizing my technical skills to
          lead innovative projects aligned with business objectives.
        </p>
      </div>
    </div>
  );
};

export default AboutMePage;
