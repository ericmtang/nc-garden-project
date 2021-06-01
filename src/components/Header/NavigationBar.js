import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '/img/logo/logoIcon.psd';
import './NavigationBar.css';
import textLogo from '/img/logo/logoText.psd'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  NavbarText,
} from "reactstrap";


const NavigationBar = ({user}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="headerWrapper mx-auto">
      <div class="jumbotron-fluid jumbotron">
        <img src={textLogo} alt="Grow Together" />
        <h4><i className="fa fa-pencil">Login</i></h4>
      </div>
      <Navbar color="success" dark expand="md">
        <NavbarBrand tag={Link} to="/home/">
          <img src={logo} alt="Grow Together"/>
        </NavbarBrand>
        <div className="d-flex flex-md-column align-items-end">
          <div className="d-flex flex-md-column">
            <Avatar className="text-light ml-3 justify-content-sm-start" firstName={user.firstName} lastName={user.lastName} img={user.img} right={false} />
          </div>
          <div className="d-flex flex-md-column justify-content-end linkText">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="p-3">
              <Nav className="navBarMenu mr-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/plantdb/">
                    PlantDB
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
          </div>
        </div>
      </Navbar>

    </div>
  );
};

export default NavigationBar;