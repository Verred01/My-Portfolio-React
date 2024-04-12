import React from 'react';
import '../assets/styles/style.css'; // Import the CSS file

function Projects({ projects }) {
  console.log(projects);
  return (
    <section className="card"> {/* Use className instead of style */}
      <hr className="solid" />
      <div className="parent-img">
        {projects.map((project) => (
          <div key={project.title}>
            <h3>{project.title}</h3>
            <a href={project.url}>
              <img
                src={project.image}
                onError={(e) => console.log('Error loading image:', e.target.src)}
              />
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;