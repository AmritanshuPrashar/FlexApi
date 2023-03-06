import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Flex Api</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link className="" href="/chatai">Ai Chat</Nav.Link>
            <Nav.Link href="/sentiment">Sentiment Analyser</Nav.Link>
            <Nav.Link href="/memes">Memes</Nav.Link>
            <Nav.Link href="/translate">Translate</Nav.Link>
            <Nav.Link  href="/news">News</Nav.Link>
            <Nav.Link  href="/weather">Weather</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

    </>
  );
}

export default Menu;