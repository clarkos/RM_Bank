import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export const MainNav = () => {
  return (
    <>
      <Navbar bg="ligth" expand="lg">
        <Container>
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="BankLogo"
          />
          <span> </span>
          <Navbar.Brand as={Link} to="/">
              InterDimensional Bank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="user">
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="register">
                REGISTER
              </Nav.Link>
              <Nav.Link as={Link} to="login">
                LOGIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet />
      </section>
    </>
  );
};
