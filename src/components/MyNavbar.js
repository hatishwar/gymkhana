// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import gymlogo from '../Assets/gymlogo.jpeg';
// import '../Assets/hover-min.css'
import 'animate.css';

function MyNavbar() {
  return (
    

<Navbar className="">
      <Container>
      <Navbar.Brand href="#home"><img class="animate__animated animate__flip" src={gymlogo}></img></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown title="ABOUT" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ABOUT CLUB</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">CLUB HISTORY</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/facilities">FACILITIES</Nav.Link>
            <Nav.Link href="/restaurant">REASTURENT</Nav.Link>
            <Nav.Link href="/gallery">GALLERY</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
            <Nav.Link href="/" className='hvr-outline-in'>MEMBER LOGIN</Nav.Link>


          </Nav>
          
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default MyNavbar;
