import React from "react";
import "./footer.css";
import Logo from "../assets/logo.jpg";

export const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Logo} alt='Bank Logo'/>
            <span>
              {" "}
              <strong>InterDimensional Bank</strong>
            </span>
          </div>
          <div className="col">&copy; 2022 - Luciano Schmarsow</div>
          <div className="col">
            <ul>
              <li>GitHub</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
