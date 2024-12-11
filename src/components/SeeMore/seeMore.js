import React from "react";
import "./seeMore.css";

const SeeMore = () => {
  const PROJECTS = [
    {
      title: "Project Title 1",
      description: "Description for project 1.",
      technologies: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Project Title 2",
      description: "Description for project 2.",
      technologies: ["HTML", "Node.js", "Express"],
    },
  ];

  return (
    <div className="projects-container">
      {PROJECTS.map((project, index) => (
        <div key={index} className="project-card">
          <h6 className="project-title">{project.title}</h6>
          <p className="project-description">{project.description}</p>
          <div className="technologies-container">
            {project.technologies.map((tech, index) => (
              <span key={index} className="technology-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeeMore;
