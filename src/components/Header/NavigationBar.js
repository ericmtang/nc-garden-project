import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from './logo/logoIcon.svg';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoText from './logo/logoText.svg';
import Avatar from './Avatar';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Row,
  Col
} from "reactstrap";


const NavigationBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="container-fluid navWrapper" fixed="top" dark expand="md">
      <Row>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="">
          <Nav navbar>
            <Col className="">
              <NavbarBrand tag={Link} to="/home/">
                <img src={logoText} alt="Grow Together" className="d-sm-none d-md-block logoText" />
                <img src={logoIcon} alt="Grow Together" className="pt-3 d-none d-sm-block d-md-none logoIcon" />
              </NavbarBrand>
            </Col>
            <Col className="navText">
              <NavItem>
                <NavLink tag={Link} to="/plantdb/">
                  Plant DB
              </NavLink>
              </NavItem>
            </Col>
            <Col className="navText">
              <NavItem>
                <NavLink tag={Link} to="/blog/">
                  Blog
              </NavLink>
              </NavItem>
            </Col>
            <Col className="navText">
              <NavItem>
                <NavLink tag={Link} to="/recipes/">
                  Recipes
              </NavLink>
              </NavItem>
            </Col>
            <Col className="navText">
              <NavItem>
                <NavLink tag={Link} to="/store/">
                  Store
              </NavLink>
              </NavItem>
            </Col>
            <Col className="navText">
              <NavItem>
                <NavLink tag={Link} to="/classifieds/">
                  Classifieds
              </NavLink>
              </NavItem>
            </Col>
            <Col className="navText">
              <Avatar firstName={user.firstName} lastName={user.lastName} img={user.img} header={true} className="avPic" />
            </Col>
          </Nav>
        </Collapse>
      </Row>
    </Navbar>
  );
};

export default NavigationBar;