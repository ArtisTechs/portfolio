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
          While maintaining my full-time job, I'm also eager to work as a
          freelancer, collaborating with others to enhance my skills and broaden
          my experience. By freelancing, I hope to help my <b>family</b>{" "}
          financially, providing them with the support they need while pursuing
          diverse opportunities to{" "}
          <b>grow and contribute to exciting projects</b>.
        </p>
      </div>
    </div>
  );
};

export default AboutMePage;
