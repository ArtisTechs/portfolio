import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { SECTIONS } from "../../shared/enum/SectionsEnum";
import logo from "../../assets/img/artisTechs-logo.svg";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showGravatar = windowWidth >= 992;
  return (
    <Navbar expand="lg" className={isScrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand
          as={ScrollLink}
          to={SECTIONS.HOME}
          smooth={true}
          duration={10}
        >
          <img src={logo} alt="ArtisTechs logo" className="main-logo" />
          rtisTechs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              as={ScrollLink}
              to={SECTIONS.HOME}
              smooth={true}
              duration={10}
              className="nav-link"
            >
              <span>Home</span>
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to={SECTIONS.PROJECTS}
              smooth={true}
              duration={10}
              className="nav-link"
            >
              <span>Services</span>
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to={SECTIONS.ABOUT}
              smooth={true}
              duration={10}
              className="nav-link"
            >
              <span>About</span>
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to={SECTIONS.CONTACT}
              smooth={true}
              duration={10}
              className="nav-link"
            >
              <span>Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
