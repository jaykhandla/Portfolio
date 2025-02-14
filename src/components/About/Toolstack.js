import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman } from "react-icons/si";  // Postman icon
import { FaDatabase } from "react-icons/fa";  // MongoDB icon (General Database)
import { VscVscode } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <VscVscode />
          <div className="icon-text">VSCode</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiPostman />
          <div className="icon-text">Postman</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <FaDatabase />
          <div className="icon-text">MongoDB</div>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
