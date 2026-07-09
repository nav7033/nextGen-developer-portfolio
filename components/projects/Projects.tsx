import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Frame Studio",
      category: "Backend Architecture", 
      description: "Developing robust microservices with optimized database query execution plans.",
      year: "2026",
      image: "/images/frame-studio.jpg" 
    },
    {
      id: 2,
      title: "Design Vista",
      category: "Full Stack",
      description: "Building responsive web interfaces connected seamlessly to enterprise Java backends.",
      year: "2025",
      image: "/images/design-vista.jpg"
    },
    {
      id: 3,
      title: "Design Vista",
      category: "Full Stack",
      description: "Building responsive web interfaces connected seamlessly to enterprise Java backends.",
      year: "2025",
      image: "/images/design-vista.jpg"
    }
    ,
    {
      id: 4,
      title: "Design Vista",
      category: "Full Stack",
      description: "Building responsive web interfaces connected seamlessly to enterprise Java backends.",
      year: "2025",
      image: "/images/design-vista.jpg"
    }
  ];

  return (
    <section id='projects' className="gallery-section-container">
      <div className="gallery-top-bar">
        <h2 className="gallery-main-title">PROJECTS</h2>
      </div>
      <div className="gallery-filter-row">
        <div className="gallery-view-badge">
          <span className="icon-grid">⚃</span> Gallery view
        </div>
      </div>


      <div className="projects-gallery-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="gallery-card">

            {/* Card Image Cover */}
            <div
              className="gallery-card-cover"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              {/* Optional fallback overlay graphic typography */}
              <div className="cover-overlay-text">{project.title.toUpperCase()}</div>
            </div>

            {/* Card Information Body */}
            <div className="gallery-card-body">
              <h3 className="gallery-card-title">{project.title}</h3>

              <span className="gallery-pill-badge">
                {project.category}
              </span>

              <p className="gallery-card-desc">
                {project.description}
              </p>

              <span className="gallery-card-year">
                {project.year}
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;