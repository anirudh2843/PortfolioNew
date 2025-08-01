import React from "react";
import { FaGithub, FaVideo } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import "./Project.css";

const ProjectCard = ({ name, image, techstack, links }) => {
  return (
    <div className="project-card">
      {/* Project Image */}
      <div className="project-image">
        <img src={image} alt={name} />
        <div className="overlay">
          {links.visit && (
            <a href={links.visit} target="_blank" rel="noopener noreferrer" className="icon-btn">
              <BiLinkExternal size={20} />
            </a>
          )}
          {links.code && (
            <a href={links.code} target="_blank" rel="noopener noreferrer" className="icon-btn">
              <FaGithub size={20} />
            </a>
          )}
          {links.video && (
            <a href={links.video} target="_blank" rel="noopener noreferrer" className="icon-btn">
              <FaVideo size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="project-info">
        <h3>{name}</h3>
        <p>
          <strong>Tech Stack:</strong> {techstack}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
