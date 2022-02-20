import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Header() {
  const history = useHistory();
  return (
    <>
      <Navbar
        id="nav--bar"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container id="navbar--container">
          <Navbar.Brand id="navbar--brand" href="#home">
            <img
              src="/images/mapMarker.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              id="navbar--img"
              alt="React Bootstrap logo"
            />
            FOODS BD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="home--btn" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link id="foods--btn" as={Link} to="/">
                Foods
              </Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/">
                Contact
              </Nav.Link>
            </Nav>
            <>
              <Nav.Link id="trace--btn" as={Link} to="/">
                TRACE
              </Nav.Link>
              <Nav.Link id="chat--btn" as={Link} to="/">
                MESSAGE
              </Nav.Link>
            </>
            <Button
              onClick={() => history.push("/login")}
              id="login--btn"
              variant="outline-success"
            >
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;