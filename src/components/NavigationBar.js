import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../img/logos/logo.png';
//import vines from '../img/logos/vineVariousGreens.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  //Row,
  //UncontrolledDropdown,
  //DropdownToggle,
  //DropdownMenu,
  //DropdownItem,
  NavbarText,
} from "reactstrap";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const style1 = {
    fontFamily: "Adelfa",
    fontSize: "300%",
  };
  //const vines = NAVBARIMAGES[1]; 
  /*
  const style2 = {
    fontFamily: "Comfortaa",
    fontSize: "100%",
  };
  */
  return (
    <div className="headerWrapper">
      <Navbar color="success" dark expand="md">
        <NavbarBrand className="row" tag={Link} to="/home/">
        <img className="img-fluid headerLogo" src={logo} alt="Grow Together Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="p-3">
          <Nav className="navBarMenu mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/plantdb/">
                Plant Database
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/blog/">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/recipes/">
                Recipes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/store/">
                Store
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/classifieds/">
                Classifieds
              </NavLink>
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
