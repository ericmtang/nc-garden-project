import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const style1 = {
    fontFamily: "Adelfa",
    fontSize: "300%",
  };
  return (
    <div>
      <Navbar className="" color="success" dark expand="md">
        <NavbarBrand className="mx-3" href="/">
          <h1 style={style1}>GrowTogether</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="p-3">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/plantdb/">Plant Database</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/recipes/">Recipes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/store/">Store</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/classifieds/">Classifieds</NavLink>
            </NavItem>
            {/*
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>About Us</DropdownItem>
                <DropdownItem>Donate</DropdownItem>
                <DropdownItem>Careers</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            */}
          </Nav>
        </Collapse>
        <NavbarText className="mx-3 text-white">
          A Community for Gardeners
        </NavbarText>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
