import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { PrivateRoute } from "./utils/privateRoute" ;
import { MainNav } from "./layout/navBar";
import { Home } from "./components/home";
import { Profile } from "./components/profile";
import { Contact } from "./components/contact";
import { Footer } from "./layout/footer";
import { Login } from "./components/loginRegister/login";
import { AccountMovs } from "./components/account/accountMovs";
import { MovDetail } from "./components/account/movDetail";
import { Transfers } from "./components/operations/transfers";
import { Deposits } from "./components/operations/deposits";
import { Payments } from "./components/operations/payments";
import { Withdraw } from "./components/operations/withdraw";
import { NotFound } from "./components/notFound";
import { Loans } from "./components/loans";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<MainNav />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route
                path="user/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="user/accountMov"
                element={
                  <PrivateRoute>
                    <AccountMovs />
                  </PrivateRoute>
                }
              />
              <Route
                path="user/accountMov/movDetail"
                element={
                  <PrivateRoute>
                    <MovDetail />
                  </PrivateRoute>
                }
              />
              <Route
                path="user/deposits"
                element={
                  <PrivateRoute>
                    <Deposits />
                  </PrivateRoute>
                }
              />
              <Route
                path="user/withdraw"
                element={
                  <PrivateRoute>
                    <Withdraw />
                  </PrivateRoute>
                }
              />
              <Route
                path="user/transfers"
                element={
                  <PrivateRoute>
                    <Transfers />
                  </PrivateRoute>
                }
              />
              <Route
                path="user/payments"
                element={
                  <PrivateRoute>
                    <Payments />
                  </PrivateRoute>
                }
              />
              <Route
                path="user/loans"
                element={
                  <PrivateRoute>
                    <Loans />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
