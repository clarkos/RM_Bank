import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { useAuth } from "../context/authContext";
import { Welcome } from "../layout/welcome";
import { Identify } from "./identify";

export const MainNav = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
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
            {"   "}
            InterDimensional Bank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="justify-content-end" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="user/profile">
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="user/deposits">
                Deposits
              </Nav.Link>
              <Nav.Link as={Link} to="user/transfers">
                Transfers
              </Nav.Link>
              <Nav.Link as={Link} to="user/payments">
                Payments
              </Nav.Link>
              <Nav.Link as={Link} to="user/loans">
                Loans
              </Nav.Link>
              <Nav.Link as={Link} to="contact">
                Contact
              </Nav.Link>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Text>{!user ? <Identify /> : <Welcome />}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet />
      </section>
    </>
  );
};
