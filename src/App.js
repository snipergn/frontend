import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import { ReactComponent as Logo } from './images/logo.svg';

const App = () => {
  return (
    <>
    
    {/* Logo */}

    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">
      <Logo/>
    </Navbar.Brand>

    {/* Navbar Elements*/}
    <Nav className="me-auto">
      <NavDropdown title="Features" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">To Do list</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Calendar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Reminder</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Planning</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Company" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">History</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Our Team</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Blog</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home">Carrers</Nav.Link>
      <Nav.Link href="#home">About</Nav.Link>
    </Nav>

      <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="#home" className='login1' >Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Button variant="outline-secondary" className='button1'>Secondary</Button>
      </Nav.Item>
      </Nav>
    </Container>
  </Navbar>

    </>
  );
}

export default App;
