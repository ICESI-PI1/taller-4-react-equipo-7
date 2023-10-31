import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';



function NavBarNavigation() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };


  const buttonStyle = {
    background: 'transparent',
    color: 'black',
    border: 'none',
    boxShadow: 'none',
    padding: '0',
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top w-100">
      <Container>
        <Navbar.Brand href="">GESTOR DE LIBROS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Autores" id="basic-nav-dropdown">

              <NavDropdown.Item>
                <Link to="/authors/create">
                  <Button style={buttonStyle}>Crear</Button>
                </Link>

              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to="/authors">
                  <Button style={buttonStyle}>Listar</Button>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Libros" id="basic-nav-dropdown">

            <NavDropdown.Item >
                <Link to="/books/create">
                  <Button style={buttonStyle}>Crear</Button>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to="/books">
                  <Button style={buttonStyle}>Listar</Button>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
      {token ? ( // Si hay un token
        <Button variant="danger" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      ) : ( // Si no hay un token
        <>
          <Link to="/login">
            <Button variant="outline-primary">Iniciar Sesión</Button>
          </Link>
          <Link to="/register">
            <Button variant="primary" className="ms-2">
              Registrarse
            </Button>
          </Link>
        </>
      )}
    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarNavigation;