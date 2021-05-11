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
  //const style1 = { fontFamily: "a-adelfa" };
  return (
    <div>
      <Navbar className="" color="success" dark expand="md">
        <NavbarBrand className="mx-3" href="/">
          <h3>GrowTogether</h3>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/blog/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/store/">Store</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/classifieds/">Classifieds</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Recipes</DropdownItem>
                <DropdownItem>Plant Database</DropdownItem>
                <DropdownItem>About</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <NavbarText className="mx-3 text-white">A Community for Gardeners</NavbarText>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
