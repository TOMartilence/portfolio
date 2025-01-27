import React from "react";
import "../css/Education.css";

function Education() {
  return (
    <div className="education-container">
      <h1 className="section-title">Education</h1>
      <div className="education-section">
        <div className="education-item">
          <h2 className="education-degree">B.Tech in Electrical and Electronics Engineering</h2>
          <p className="education-institute">XYZ University</p>
          <p className="education-duration">2021 - Present</p>
          <p className="education-description">
            Focused on robotics, embedded systems, and power electronics. Key achievements include leading the Intel IoT Club and working on advanced robotics projects.
          </p>
        </div>
        <div className="education-item">
          <h2 className="education-degree">High School</h2>
          <p className="education-institute">ABC High School</p>
          <p className="education-duration">2019 - 2021</p>
          <p className="education-description">
            Specialized in Physics, Chemistry, and Mathematics with top scores. Actively participated in science fairs and robotics competitions.
          </p>
        </div>
      </div>

      <h1 className="section-title">Experience</h1>
      <div className="experience-section">
        <div className="experience-item">
          <h2 className="experience-role">Intel IoT Club Lead</h2>
          <p className="experience-organization">XYZ University</p>
          <p className="experience-duration">2023 - Present</p>
          <p className="experience-description">
            Organized workshops and guided peers in IoT and robotics projects. Developed innovative solutions combining hardware and software.
          </p>
        </div>
        <div className="experience-item">
          <h2 className="experience-role">TEDx Club Event Manager</h2>
          <p className="experience-organization">XYZ University</p>
          <p className="experience-duration">2024 - Present</p>
          <p className="experience-description">
            Managed event logistics and team coordination for TEDx events. Gained experience in teamwork, leadership, and creative problem-solving.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
