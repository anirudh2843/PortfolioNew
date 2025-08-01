import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import "./Project.css";

const Projects = ({ projectsData = [] }) => {
  const [projects, setProjects] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    if (projectsData.length > 0) {
      setProjects([...projectsData]);
    }
  }, [projectsData]);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.slice(0, viewAll ? projects.length : 6).map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))
        ) : (
          <p className="no-projects">No projects available.</p>
        )}
      </div>

      {/* View All Button */}
      {projects.length > 6 && (
        <div className="view-all">
          <button onClick={() => setViewAll(!viewAll)} className="view-btn">
            {viewAll ? "Show Less" : "View All"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
