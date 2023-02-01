import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NewsItem from "./NewsItem";

import Container from "react-bootstrap/Container";
const NewsNavbar = () => {
	return (
		<>
			<Navbar sticky="top" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">Flex Api</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/news/latest">Latest</Nav.Link>
						<Nav.Link href="/news/technology">Tech</Nav.Link>
						<Nav.Link href="/news/sports">Sports</Nav.Link>
						<Nav.Link href="/news/technology">Politics</Nav.Link>
						<Nav.Link href="/news/business">Business</Nav.Link>
						<Nav.Link href="/news/science">Science</Nav.Link>
						<Nav.Link href="/news/automobile">Automobile</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default NewsNavbar;
