import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">JAY KHANDLA </span>
            from <span className="purple"> Wadhwan City, Gujarat, India.</span>
            <br />
            Passionate Web Developer with skilledin the MERN stack and hands-on experience
            at WayToCode Technologies.        
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to and enjoying music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Just a little bit more, and you'll have achieved perfection"
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
