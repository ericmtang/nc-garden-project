import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const style2 = {
    fontFamily: "Comfortaa",
    fontSize: "100%",
  };
  return (
    <div>
      <Navbar className="" color="success" dark expand="md">
        <NavbarBrand className="mx-3" tag={Link} to="/home/">
          <h1 style={style1}>GrowTogether</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="p-3">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/plantdb/">Plant Database</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/blog/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/recipes/">Recipes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/store/">Store</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/classifieds/">Classifieds</NavLink>
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
        <NavbarText className="mx-3 text-light">
          <i>Where Gardeners Gather</i>
        </NavbarText>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
