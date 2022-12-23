import React from "react";
import "./footer.css";
import Logo from "../assets/logo.jpg";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <div className="main-footer">
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col sm={4} className="copy">&copy; 2022 - Luciano Schmarsow <br/> All Rights reserved</Col>
          <Col sm={4} >
            <div className="logo">
              <img src={Logo} alt="Bank Logo" /> <br/>
              <span>
                {" "}
                <strong>Inter Dimensional Bank</strong>
              </span>
            </div>
          </Col>
          <Col sm={4}>
            <ul className="footerLinks">
              <li>GuitHub</li>
              <li>Twitter</li>
              <li>Portfolio</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
        {/* <div className="row">
          <div className="col">
            
          </div>
          <div className="col"></div>
          <div className="col">
            <ul>
              <li>GitHub</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div> */}
      </Container>
    </div>
  );
};
