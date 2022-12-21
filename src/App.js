import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainNav } from "./layout/navBar";
import { Home } from "./components/home";
import { Profile } from "./components/profile";
import { Contact } from "./components/contact";
// import Footer from './components/Footer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainNav />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        {/* Using path="*"" means "match anything", 
        so this route acts like a catch-all for URLs that we don't have explicit routes for. */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
