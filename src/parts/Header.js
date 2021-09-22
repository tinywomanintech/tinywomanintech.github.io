import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link className="nav-item nav-link  " to="/">
              Home
            </Link>
            <Link className="nav-item nav-link  " to="/about">
              About
            </Link>
            <Link className="nav-item nav-link  " to="/projects">
              Projects
            </Link>
            <Link className="nav-item nav-link " to="/blog">
              Blog
            </Link>
            <Link className="nav-item nav-link  " to="/contacts">
              Contacts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
