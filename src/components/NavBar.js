import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Gravatar from "react-gravatar";

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

  const navBarStyle = {
    backgroundColor: isScrolled ? "transparent" : "white",
    padding: "10px",
    fontFamily: "Inter, sans-serif",
    borderBottom: isScrolled ? "none" : "1px solid #ddd",
    boxShadow: isScrolled ? "none" : "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s, border 0.3s, box-shadow 0.3s",
  };

  const brandStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const navLinkStyle = {
    margin: windowWidth < 992 ? "5px 8px" : "0 8px",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "500",
  };

  return (
    <Navbar expand="lg" style={navBarStyle}>
      <Container>
        <Navbar.Brand href="#home" style={brandStyle}>
          ✦ ArtisTech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" style={navLinkStyle}>
              Work
            </Nav.Link>
            <Nav.Link href="#link" style={navLinkStyle}>
              About
            </Nav.Link>
            <Nav.Link href="#contact" style={navLinkStyle}>
              Contact
              {windowWidth >= 992 && (
                <div className="text-center ms-3">
                  <Gravatar
                    className="rounded-circle"
                    email="suarezestanislaojose@gmail.com"
                    size={35}
                  />
                </div>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
