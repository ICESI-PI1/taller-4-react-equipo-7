import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


function NavBarNavigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top w-100">
      <Container>
        <Navbar.Brand href="">GESTOR DE LIBROS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Autores" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Crear</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Listar
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Libros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Crear</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Listar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button variant="outline-primary">Login</Button>
            <Button variant="primary" className="ms-2">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarNavigation;