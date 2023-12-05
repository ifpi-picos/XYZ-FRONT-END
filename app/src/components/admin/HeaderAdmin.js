// components/AdminNavbar.js

import Link from 'next/link';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';

const AdminNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link href="/admin" passHref>
        <Navbar.Brand as="a">Admin Panel</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
     
         
          <Link href="/formularioreceita" passHref>
            <Nav.Link as="a">Cadastrar Receitas</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          <NavDropdown title="Configurações" id="basic-nav-dropdown">
            <Link href="/perfil" passHref>
              <NavDropdown.Item as="a">Perfil</NavDropdown.Item>
            </Link>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/principal">Sair</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminNavbar;
