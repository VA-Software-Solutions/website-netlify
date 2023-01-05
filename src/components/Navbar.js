import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import clsx from "clsx";

import useWindowOnScroll from "../hooks/useWindowOnScroll";
import useSmoothScrollTo from "../hooks/useSmoothScrollTo";
import NavItem from "./Navitem";
import Image from "./Image";

const MyNavbar = ({ extraItems }) => {
  const handleScrollToTop = useSmoothScrollTo(0);

  const [expanded, setExpanded] = React.useState(false);

  const toggleMenu = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  const closeMenu = React.useCallback(() => {
    setExpanded(false);
  }, []);

  const handleBrandClick = React.useCallback(() => {
    closeMenu();
    handleScrollToTop();
  }, [closeMenu, handleScrollToTop]);

  const [shrink, setShrink] = React.useState(false);

  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);

  useWindowOnScroll(handleWindowScroll);

  const brandStyles = {
    width: "60px",
    cursor: "pointer"
  }

  return (
    <Navbar
      className={clsx("navbar-root", { "navbar-shrink": shrink })}
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="cursor-pointer" onClick={handleBrandClick}>
          <div style={brandStyles}>
            <Image fileName="logo/logo.png" alt="logo" />
          </div>
          
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation">
          Menu
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="text-uppercase ml-auto">
            <NavItem key="home" to="/" onClick={closeMenu}>Home</NavItem>
            <NavItem key="about" to="/about" onClick={closeMenu}>About</NavItem>
            <NavItem key="services" to="/services" onClick={closeMenu}>Services</NavItem>
            <NavItem key="careers" to="/careers" onClick={closeMenu}>Careers</NavItem>
            <NavItem key="contact" to="/contact" onClick={closeMenu}>Contact</NavItem>
          </Nav>
          {extraItems}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
};

export default MyNavbar;
