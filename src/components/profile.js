import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Tab, Tabs } from "react-bootstrap";
import { Deposits } from "./deposits";
import { Transfers } from "./transfers";
import { Payments } from "./payments";
import { AccountMovs } from "./accountMovs";

import "./profile.css"

export const Profile = () => {
  const { user, logout, loading } = useAuth();
  const nav = useNavigate();

  const handleLogout = async () => {
    await logout();
    nav("/login");
  };

  if (loading) return <h2>Loading data...</h2>;

  return (
    <div className="container">
      <div className="profileHead">
      <h3>Bienvenido {user.email}</h3>
      <span onClick={handleLogout}>desconectarse</span>
      </div>
      <Tabs
        defaultActiveKey="data"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="data" title="Your Data">
          <span>some content</span>
        </Tab>
        <Tab eventKey="deposits" title="Deposits">
          <span>some content</span>
          <Deposits />
        </Tab>
        <Tab eventKey="transfers" title="Transfers">
          <span>some content</span>
          <Transfers />
        </Tab>
        <Tab eventKey="payments" title="Payments">
          <span>some content</span>
          <Payments />
        </Tab>
        <Tab eventKey="movements" title="Movements">
          <span>some content</span>
          <AccountMovs />
        </Tab>
        <Tab eventKey="loans" title="Your Loans">
          <span>some content</span>
        </Tab>
      </Tabs>
    </div>
  );
};
