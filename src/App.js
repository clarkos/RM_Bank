import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainNav } from "./layout/navBar";
import { Home } from "./components/home";
import { Profile } from "./components/profile";
import { Contact } from "./components/contact";
import { Footer } from "./layout/footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<MainNav />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
