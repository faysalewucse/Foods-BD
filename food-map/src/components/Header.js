import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import "../CSS/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const gotoRegister = () => {
    navigate("/register");
  };
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
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>

              <NavDropdown
                menuVariant="dark"
                title="Categories"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Burgers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Chicken</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Caked & Bakery
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Dessert</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={gotoRegister}>Register</Nav.Link>
            </Nav>
            <>
              <Nav.Link id="trace--btn" as={Link} to="/">
                TRACE
              </Nav.Link>
              <img
                src="images/shopping-cart.png"
                width={30}
                height={30}
                alt="cart-logo"
              />
            </>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Faysal Ahmed"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/customer">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Orders
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Logout
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
