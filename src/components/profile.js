import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const Profile = () => {
  const { user, logout, loading } = useAuth();
  const nav = useNavigate();

  const handleLogout = async () => {
    await logout();
    nav('/login')
  };

  if (loading) return <h2>Loading data...</h2>;

  return (
    <div className="container">
        <h3>Bienvenido {user.email}</h3> <br />
        <button onClick={handleLogout}>desconectarse</button>
    </div>
  );
}
