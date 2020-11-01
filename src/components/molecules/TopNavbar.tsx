import React from "react";
import { useState } from "react";
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
        <NavbarBrand href="/">Linkino</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/View">View Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Add">Add Link</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavLink href="/Add">Login</NavLink>
          </NavbarText>
          <NavbarText>
            <NavLink href="/Add">Sign up</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
