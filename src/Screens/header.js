import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const header = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Todos</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default header;
