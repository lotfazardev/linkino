import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState<undefined | boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="warning" light expand="md">
        <Link to="/">
          <NavbarBrand>Linkino</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/View">
                <NavLink>View Link</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Add">
                <NavLink>Add Link</NavLink>
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <Link to="/Login">
              <NavLink>Login</NavLink>
            </Link>
          </NavbarText>
          <NavbarText>
            <Link to="/Signup">
              <NavLink>Sign up</NavLink>
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
