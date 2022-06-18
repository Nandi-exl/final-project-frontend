import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import "./Header.css";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="/">
      <Navbar
        bg="warning"
        expand="sm"
        activeKey="/"
      >
        <Navbar.Brand className="font-size" href="/">Food Journal</Navbar.Brand>
        <Nav className="font-size">
          <Nav.Link href="/">Home</Nav.Link>
          {/* <Nav.Link href="#about">About</Nav.Link> */}
          <NavDropdown title="Dishes" id="basic-nav-dropdown">
            <NavDropdown.Item href="/foods">Foods</NavDropdown.Item>
            {/* <NavDropdown.Item eventKey="disabled" disabled>Food</NavDropdown.Item> */}
            <NavDropdown.Divider />
            <NavDropdown.Item href="/foods/breakfast">Breakfast</NavDropdown.Item>
            <NavDropdown.Item href="/foods/lunch">Lunch</NavDropdown.Item>
            <NavDropdown.Item href="/foods/dinner">Dinner</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/beverages">Beverages</NavDropdown.Item>
            {/* <NavDropdown.Item eventKey="disabled" disabled>Beverage</NavDropdown.Item> */}
            <NavDropdown.Divider />
            <NavDropdown.Item href="/beverages/alcohol">Alcohol</NavDropdown.Item>
            <NavDropdown.Item href="/beverages/non-alcohol">Non-alcohol</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
