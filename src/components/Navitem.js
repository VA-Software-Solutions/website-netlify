import React from "react";

import { Nav } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "gatsby";

const NavItem = ({ to, isScrollLink, onClick, children }) => {
  if (isScrollLink)
    return (    
      <Nav.Item>
        <ScrollLink
          className="nav-link cursor-pointer"
          activeClass="active"
          to={to}
          spy={true}
          smooth="easeInOutQuart"
          onClick={onClick}
        >
          {children || to}
        </ScrollLink>
      </Nav.Item>
    )

  return (
    <Nav.Item>
      <Link
        className="nav-link cursor-pointer"
        activeClass="active"
        to={to}
        onClick={onClick}
      >
        {children || to}
      </Link>
    </Nav.Item>
  );
};

export default NavItem;
