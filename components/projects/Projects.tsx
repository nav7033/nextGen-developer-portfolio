import React from 'react';
import './Projects.css';

const Projects = () => {
const projectsData = [
  {
    id: 1,
    title: "Sportsbook Application (SB)",
    category: "Full Stack",
    description: "Built and enhanced a real-time sports betting platform using Java Spring Boot microservices with MySQL and PostgreSQL, deployed on AWS, implementing user-focused features and performance optimizations that boosted player engagement and platform interaction.",
    year: "2022",
    image: "/icons/cover-sportsbook-application.png"
  },
  {
    id: 2,
    title: "Hospital Management System",
    category: "Backend Architecture",
    description: "Built a scalable full-stack system using Java Spring Boot, MySQL, PostgreSQL, Redis, and AWS S3, featuring patient records, doctor scheduling, appointment booking, JWT authentication, distributed locking to prevent overbooking, and containerized deployment with Docker.",
    year: "2022",
    image: "/icons/cover-hospital-management-system.png"
  },
  {
    id: 3,
    title: "Reusable React UI Component Library",
    category: "Frontend Architecture",
    description: "Built a reusable React.js UI component library ensuring design consistency across 12+ sportsbook brands, improving development efficiency by 30%.",
    year: "2023",
    image: "/icons/cover-react-component-library.png"
  },
  {
    id: 4,
    title: "Multi-Brand Banner Swiper",
    category: "Frontend",
    description: "Created a multi-brand banner swiper integrated seamlessly into the existing website architecture, driving a 50% increase in user interaction and reducing bounce rates.",
    year: "2023",
    image: "/icons/cover-multi-brand-banner-swiper.png"
  },
  {
    id: 5,
    title: "BOG Overlay & Market-Blurb",
    category: "Full Stack",
    description: "Launched BOG Overlay Display and Market-Blurb functionalities to elevate user experience in the sportsbook application, contributing to a 20% increase in active users month-over-month.",
    year: "2023",
    image: "/icons/cover-bog-overlay-market-blurb.png"
  },
  {
    id: 6,
    title: "Custom React Plugins (CMS Tooling)",
    category: "Frontend Tooling",
    description: "Developed custom React plugins including a JSON Editor and language pack editor, accelerating front-end content updates by 60% and streamlining CMS workflows.",
    year: "2023",
    image: "/icons/cover-custom-react-plugins-cms.png"
  },
  {
    id: 7,
    title: "Race Schedule & Jockey Carousels",
    category: "Frontend",
    description: "Implemented interactive carousels for race schedules and jockey details, increasing user engagement by 25% through improved data visualization.",
    year: "2023",
    image: "/icons/cover-race-schedule-jockey-carousels.png"
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