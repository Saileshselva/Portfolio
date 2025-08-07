import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { GiBrain } from "react-icons/gi";
import { FaSatelliteDish } from "react-icons/fa";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              icon={<GiBrain size={70} color="#6c63ff" />}
              isBlog={false}
              title="Brain Tumor Detection using Multimodal Image Fusion"
              description="Developed a medical diagnostic tool that fuses CT and MRI scans to enhance tumor detection. Applied feature extraction and optimization algorithms like PSO, DSO, and GA for improved classification accuracy. A GUI was built using Tkinter for user interaction."
              ghLink="" // Optional
              demoLink="" // Optional
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaSatelliteDish size={70} color="#6c63ff" />}
              isBlog={false}
              title="Target Tracking in Wireless Sensor Networks (WSN)"
              description="Implemented a real-time target tracking system using the Extended Kalman Filter algorithm. Enhanced tracking accuracy and reliability across noisy sensor data using advanced filtering techniques in wireless sensor environments."
              ghLink="" // Optional
              demoLink="" // Optional
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
