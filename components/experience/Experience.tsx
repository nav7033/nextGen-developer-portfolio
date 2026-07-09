import React from 'react';
import './Experience.css';

const Experience = () => {
  
  const educationData = [
    {
      id: 1,
      instituteName: "DAV Institute of Engineering & Technology",
      course: "Bachelor of Technology in Computer Science",
      years: "2016 - 2020"
    },
    {
      id: 2,
      instituteName: "R.S. More College, Dhanbad",
      course: "Intermediate in Science (Class XII)",
      years: "2014 - 2016"
    },
    {
      id: 3,
      instituteName: "Mahendra Muni Saraswati Shishu Vidya Mandir, Madhupur",
      course: "Secondary School Certificate (Class X)",
      years: "2013 - 2014"
    }
  ];

  const experienceData = [
    {
      id: 4,
      companyName: "TechMojo Solutions Pvt. Ltd.",
      role: "Senior Software Developer (SDE-II)",
      years: "2022 - Present"
    },
    {
      id: 5,
      companyName: "FunctionUp",
      role: "Software Developer",
      years: "2021 - 2022"
    },
    {
      id: 6,
      companyName: "Self-Employed",
      role: "Independent Full-Stack Engineer (Upskilling)",
      years: "2020 - 2021"
    }
  ];
  return (
    <section className="timeline-section-container">
      <h2 className="timeline-main-heading">
        My
        <span> Education </span>
        &
        <span> Work Experience</span>
      </h2>

      <div className="timeline-grid-wrapper">
        <div className="timeline-column">
          <h3 className="column-title">Education</h3>
          <div className="column-divider-line"></div>

          <div className="timeline-list">
            {educationData.map((edu) => (
              <div className="timeline-item" key={edu.id}>
                <div className="item-details">
                  <h4 className="item-institution">{edu.instituteName}</h4>
                  <p className="item-subtitle">{edu.course}</p>
                </div>
                <span className="item-date-badge">{edu.years}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-column">
          <h3 className="column-title">Work Experience</h3>
          <div className="column-divider-line"></div>

          <div className="timeline-list">
            {experienceData.map((exe) => (
              <div className="timeline-item" key={exe.id}>
                <div className="item-details">
                  <h4 className="item-institution">{exe.companyName}</h4>
                  <p className="item-subtitle">{exe.role}</p>
                </div>
                <span className="item-date-badge">{exe.years}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;