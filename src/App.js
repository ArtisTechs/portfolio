import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { NavBar } from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import BackgroundPage from "./pages/background-page/BackgroundPage";
import SampleProjectsPage from "./pages/sample-projects-page/SampleProjectsPage";
import { Link } from "react-scroll";
import AboutMePage from "./pages/about-me-page/AboutMePage";
import ContactUsPage from "./pages/contact-us-page/ContactUsPage";
import Footer from "./components/footer/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
          <ScrollToTop />
          <HomePage />
          <SampleProjectsPage />
          <AboutMePage />
          <ContactUsPage />
          <Footer />
          {/* Add additional pages here */}
        </div>
      </div>
    </Router>
  );
}

export default App;
