import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bubble from "../../Assets/Projects/Bubble effects.png";
import spark from "../../Assets/Projects/Spark Effects.png";
import prodesignstudio from "../../Assets/Projects/pro design studio.png";
import Theinteriordesign from "../../Assets/Projects/The interior design.png";
import weatherApp from "../../Assets/Projects/Weather app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather App"
              description="A simple and interactive weather application that allows users to get current weather information for any location. The app fetches real-time data from a weather API and displays key details such as temperature, humidity, wind speed, and weather conditions."
              ghLink="https://github.com/jaykhandla/Weather-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bubble}
              isBlog={false}
              title="Mouse Bubble Effect"
              description="The Bubble Effect on Mouse Movement is an interactive, web-based animation that creates visually captivating bubble-like effects whenever the user moves their mouse across the screen. As the mouse moves, small, colorful bubbles appear at the cursor's location and float away, adding a dynamic and playful touch to the webpage. This project demonstrates the power of CSS animations and JavaScript to create lightweight, real-time visual effects that engage users in an interactive experience."
              ghLink="https://github.com/jaykhandla/Mouse-Bubble-Effect"
              demoLink="https://jaykhandla.github.io/Mouse-Bubble-Effect/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spark}
              isBlog={false}
              title="Mouse Spark Effect"
              description="This project demonstrates an interactive spark effect using JavaScript and CSS. Upon clicking anywhere on the page, spark animations are triggered at the mouse position. The spark effect is generated dynamically, with multiple spark elements radiating outward in different directions, creating a visually appealing and interactive experience."
              ghLink="https://github.com/jaykhandla/Mouse-Spark-Effect"
              demoLink="https://jaykhandla.github.io/Mouse-Spark-Effect/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prodesignstudio}
              isBlog={false}
              title="Pro design studio"
              description="The project 'Pro Design Studio' is an interior design firm website with a dark mode toggle feature. The site is built using HTML, CSS, and JavaScript, allowing users to easily switch between light and dark themes."
              ghLink="https://github.com/jaykhandla/Pro-design-studio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Theinteriordesign}
              isBlog={false}
              title="The-interior-design-firm"
              description="The Interior Design Firm is a web-based application designed to showcase modern and elegant interior design ideas. The project allows users to explore various design templates and provides interactive features to help visualize their design choices."
              ghLink="https://github.com/jaykhandla/The-interior-design-firm"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;