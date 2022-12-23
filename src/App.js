import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainNav } from "./layout/navBar";
import { Home } from "./components/home";
import { Profile } from "./components/profile";
import { Contact } from "./components/contact";
import { Footer } from "./layout/footer";
import { AuthProvider } from "./context/authContext";
import { Register } from "./components/register";
import { Login } from "./components/login";
import { PrivateRoute } from "./components/privateRoute";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<MainNav />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route
                path="user"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
