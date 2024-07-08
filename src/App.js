import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import BackgroundPage from "./pages/background-page/BackgroundPage";
import SampleProjectsPage from "./pages/sample-projects-page/SampleProjectsPage";
import AboutMePage from "./pages/about-me-page/AboutMePage";
import ContactUsPage from "./pages/contact-us-page/ContactUsPage";
import Footer from "./components/footer/Footer";
import { Element } from "react-scroll";
import { SECTIONS } from "./shared/enum/SectionsEnum";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="Background">
          <BackgroundPage />
        </div>
        <div className="MainPage">
          <Element name={SECTIONS.HOME}>
            <HomePage />
          </Element>
          <Element name={SECTIONS.PROJECTS}>
            <SampleProjectsPage />
          </Element>
          <Element name={SECTIONS.ABOUT}>
            <AboutMePage />
          </Element>
          <Element name={SECTIONS.CONTACT}>
            <ContactUsPage />
          </Element>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
