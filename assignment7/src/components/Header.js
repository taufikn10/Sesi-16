import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

export default function Header() {
  return (
    <>
      <Navbar className="fw-bold" expand="lg" variant="light" bg="light">
        <Container fluid>
          <Navbar.Brand href="/">Kanban Board</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
