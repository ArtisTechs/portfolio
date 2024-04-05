import React from "react";
import "../../shared/GlobalStyles.css"
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="background">
        <div className="content">
          <h1>Hello, I'm EJ Suarez</h1>
          <p>
            I'm a front-end developer and graphic designer working to enhance
            online presence for businesses.
          </p>
          <div className="buttons">
            <button className="blue-button">Download CV</button>
            <button className="common-button">Get in touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
