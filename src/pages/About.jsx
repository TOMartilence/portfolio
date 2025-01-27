import React from "react";
import "../css/About.css";

function About() {
  return (
    <>
      <div className="about-content" style={{"margin":"auto"}}>
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          Hi, I'm <strong>Thomas Jefferson</strong>, a 3rd-year Electrical and Electronics Engineering student with a passion for robotics, embedded systems, and innovative technologies. As the lead of the Intel IoT Club and a member of the TEDx Club's event management team, I thrive on exploring creative and technical pursuits.
        </p>
        <p className="about-description">
          Over the years, I have worked on exciting projects like Wi-Fi-controlled rovers, robotic arms, and voice-controlled robots. My expertise includes working with microcontrollers like ESP32, Raspberry Pi, and Arduino, along with programming in C, C++, and Python. I aim to integrate hardware and software to solve real-world challenges.
        </p>
        <p className="about-description">
          Outside of academics, I enjoy experimenting with power electronics, creating simulations in MATLAB, and learning advanced concepts in robotics and AI. I’m constantly exploring new horizons to enhance my technical and creative skills.
        </p>
      </div>
    </>
  );
}

export default About;
