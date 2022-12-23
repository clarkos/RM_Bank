import { useAuth } from "../context/authContext";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Identify = () => {
  const { user } = useAuth();
  if (!user) {
    return (
    <Nav.Link as={Link} to="login"> LogIn </Nav.Link>
    )
  }
};
