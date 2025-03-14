import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNpm } from "react-icons/di";   // NPM icon
import { SiPostman } from "react-icons/si";  // Postman icon
import { VscVscode } from "react-icons/vsc";    // VScode icon

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
          <DiNpm />
          <div className="icon-text">Node Package Manager</div>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;