import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import '../App.css'

const Footer = () => {
return (
  <div className=" main-footer">  
  <Navbar color="dark" dark>
      <Container>
        <NavbarBrand className="footer">Made with 💓 by Amritanshu</NavbarBrand>
      </Container>
  </Navbar>
  </div>
);
};
export default Footer;


