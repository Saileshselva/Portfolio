import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey in tech began with curiosity and quickly turned into a passion for
              building intelligent, user-centric applications.
              <br />
              <br />
              I’m proficient in languages like
              <i>
                <b className="purple"> C, C++, Python, Java, and JavaScript. </b>
              </i>
              <br />
              <br />
              My core areas of interest include developing full-stack &nbsp;
              <i>
                <b className="purple">Web Applications</b> and working on projects in{" "}
                <b className="purple">Machine Learning, Deep Learning, and Data Mining.</b>
              </i>
              <br />
              <br />
              I’ve worked extensively with the <b className="purple">MERN Stack</b>, and I enjoy 
              applying AI techniques in real-world scenarios.
              <br />
              <br />
              I’m also comfortable working with tools and frameworks like
              <i>
                <b className="purple"> TensorFlow, Keras, Scikit-Learn, Pandas</b>
              </i>{" "}
              and frontend libraries like
              <i>
                <b className="purple"> React.js</b>
              </i>{" "}
              to craft responsive and impactful interfaces.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Saileshselva"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
