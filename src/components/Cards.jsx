import React from "react";
import "../css/Cards.css"
function Cards() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A sleek and modern personal portfolio to showcase my work.",
      technologies: ["React", "CSS", "Tailwind"],
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "An online store with features like cart, checkout, and admin panel.",
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app with real-time data from OpenWeather API.",
      technologies: ["React", "API", "Bootstrap"],
      link: "#",
    },
  ];

  return (
    <>
            <h1 style={{"textAlign":"center","backgroundColor":"black","color":"white","padding":"30px"}}>Projects</h1>

    <div className="cards-container">
      {projects.map((project, index) => (
        <div className="card" key={index}>
            <img src={project.image} alt=""  style={{"width":"160px","borderRadius":"10px"}}/>
          <h3 className="card-title">{project.title}</h3>
          <p className="card-description">{project.description}</p>
          <ul className="card-technologies" style={{"listStyle":"none"}}>
            {project.technologies.map((tech, idx) => (
              <li key={idx} className="tech-item">
                {tech}
              </li>
            ))}
          </ul>
          <a href={project.link} className="card-button">
            View Project
          </a>
        </div>
      ))}
    </div>

    </>

  );
}

export default Cards;
