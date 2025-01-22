import React from "react";
import "../../shared/GlobalStyles.css";
import "./AboutMePage.css";

const AboutMePage = () => {
  return (
    <div className="about-me-page">
      <div className="about-me-container">
        <h1>About Me</h1>
        <p>
          Ever since high school, I've had a passion for programming. As a{" "}
          <b>Computer Engineering</b> graduate with <b>Latin honors</b>, I've
          gained extensive experience in web development and cloud computing.
          Currently, I'm working as a <b>Front-End Developer</b> in the
          Philippines, specializing in creating interactive, user-friendly web
          applications using various development tools.
        </p>
        <p>
          My goal is to transition into a <b>Full-Stack Developer</b> and
          eventually move into <b>Project Management</b>. I aim to utilize my
          technical skills to lead innovative projects aligned with business
          objectives, driving both technical excellence and strategic success.
        </p>
        <p>
          I am passionate about actively helping others with their needs or
          projects, offering support and contributing to meaningful outcomes. By
          doing so, I aim to grow personally and professionally, support my
          family financially, and nurture my curiosity about emerging
          technologies. This approach allows me to embrace diverse challenges,
          expand my knowledge, and make a positive impact.
        </p>
      </div>
    </div>
  );
};

export default AboutMePage;
