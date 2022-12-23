import { useAuth } from "../context/authContext";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Welcome = () => {
  const { user, logout } = useAuth();

  if (user.DisplayName != null) {
    return (
      <Nav.Link as={Link} to="user/profile">
        wellcome {user.DisplayName} - <button onClick={logout}>Logout</button>
      </Nav.Link>
    );
  } else {
    return (
      <Nav.Link as={Link} to="user/profile">
        Welcome back{/* <br/>{user.email} */} <br/> <span onClick={logout}>Logout</span>
      </Nav.Link>
    );
  }
};
