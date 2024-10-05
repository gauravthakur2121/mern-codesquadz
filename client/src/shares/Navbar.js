import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AnimatedNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="animated-navbar"
    >
      <Container>
        <Navbar.Brand href="#home">Gaurav Shishodia</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/register" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link  as={Link}to="/dashboard" onClick={() => setExpanded(false)}>
              Dashboard
            </Nav.Link>
            <Nav.Link  as={Link} to="/register" onClick={() => setExpanded(false)}>
              Register Account
            </Nav.Link>
             <Nav.Link as={Link}  to="/login" onClick={() => setExpanded(false)}>
              Login account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AnimatedNavbar;
