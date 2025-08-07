import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sailesh Kumar </span>
            from <span className="purple">Coimbatore, India.</span>
            <br />
            I am a B.Tech Information Technology graduate at PSG College of Technology.
            <br />
            My interests lie in Full Stack Development, Machine Learning, and Deep Learning,
            and I actively explore real-world applications in AI and web technologies.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing PC Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Tech Trends & Startups
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Sci-Fi and Documentaries
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build with purpose, learn with passion, and grow through challenges."
          </p>
          <footer className="blockquote-footer">Sailesh Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
