import React from "react";
import "../../shared/GlobalStyles.css";
import "./AboutMePage.css";

const AboutMePage = () => {
  return (
    <div className="about-me-page">
      <div className="about-me-container">
        <h1>About Me</h1>
        <p>
          I am a passionate computer engineering graduate with Latin honors,
          driven by a lifelong love for programming and software development.
          During my internship, I earned certifications in web development and
          cloud computing, further fueling my enthusiasm for technology.
        </p>
        <p>
          Currently, I work as a junior software engineer in the Philippines,
          focusing on coding and implementing new features for a timekeeping app
          and website. My college experience includes being the main developer
          of a prototype, a firefighting robot that is capable of autonomously
          extinguishing fires, and it went viral online.
        </p>
        <p>
          I enjoy creating interactive and user-friendly web applications,
          specializing in Angular and React frameworks. Proficient in
          JavaScript, TypeScript, and Bootstrap, I also have foundational
          knowledge of Python, C#, and Java. I am dedicated to continuous
          learning and collaboration, eager to expand my skill set in evolving
          technologies.
        </p>
        <p>
          Looking forward, I aim to advance into project management roles,
          leveraging my technical expertise to lead teams and drive innovative
          projects aligned with business objectives.
        </p>
      </div>
    </div>
  );
};

export default AboutMePage;
