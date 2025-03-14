import React from "react";
import "./Techstack.css"
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3Alt } from "react-icons/fa"; // HTML and CSS icons
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiGithubBadge,
} from "react-icons/di"; // JavaScript, React.js, Node.js, MongoDB, Git, HitHub icons
import { SiExpress } from "react-icons/si"; // Express.js icon
import { FaBootstrap } from "react-icons/fa6"; // Bootstrap icon

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <FaHtml5 />
          <span className="icon-text">HTML</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <FaCss3Alt />
          <span className="icon-text">CSS</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiJavascript1 />
          <span className="icon-text">JavaScript</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiReact />
          <span className="icon-text">React.js</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <FaBootstrap />
          <span className="icon-text">Bootstrap</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiNodejs />
          <span className="icon-text">Node.js</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiExpress />
          <span className="icon-text">Express.js</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiMongodb />
          <span className="icon-text">MongoDB</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiGit />
          <span className="icon-text">Git</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiGithubBadge />
          <span className="icon-text">GitHub</span>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;