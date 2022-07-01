import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as Todo } from './images/icon-todo.svg';
import { ReactComponent as Calendar } from './images/icon-calendar.svg';
import { ReactComponent as Reminder } from './images/icon-reminders.svg';
import { ReactComponent as Planning } from './images/icon-planning.svg';




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
        <NavDropdown.Item id="items" eventKey="4.1"><Todo id='icon'/>To Do list</NavDropdown.Item>
        <NavDropdown.Item id="items" eventKey="4.2"><Calendar id='icon'/>Calendar</NavDropdown.Item>
        <NavDropdown.Item id="items" eventKey="4.3"><Reminder id='icon'/>Reminder</NavDropdown.Item>
        <NavDropdown.Item id="items" eventKey="4.3"><Planning id='icon'/>Planning</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Company" id="nav-dropdown">
        <NavDropdown.Item id="items" eventKey="4.1">History</NavDropdown.Item>
        <NavDropdown.Item id="items" eventKey="4.2">Our Team</NavDropdown.Item>
        <NavDropdown.Item id="items" eventKey="4.3">Blog</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home">Carrers</Nav.Link>
      <Nav.Link href="#home">About</Nav.Link>
    </Nav>

      <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link id='login1' href="#home">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Button id="button1" variant="outline-secondary">Secondary</Button>
      </Nav.Item>
      </Nav>
    </Container>
  </Navbar>

    </>
  );
}

export default App;
