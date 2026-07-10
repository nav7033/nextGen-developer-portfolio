import React from "react";
import "./Background.css";

export default function Background() {
  return (
    <div className="futuristicBackground" aria-hidden="true">
      <div className="designCanvasAnchor">

        <div className="sectionHeader">
          ABOUT ME
        </div>
        <div className="paragraph" >
          I am a Full-Stack Engineer with over 4+ years of experience specializing in building highly scalable, event-driven web applications for global online gaming and sports betting platforms. On the backend, I design high-concurrency microservices and real-time data streaming architectures using Java 17, Spring Boot, and Apache Kafka. On the frontend, I excel at turning complex, fast-moving datasets into pixel-perfect, highly responsive user interfaces using React.js and Next.js. I thrive in cross-functional team environments where I can optimize system performance from end to end—ensuring sub-second UI responsiveness alongside secure, robust server-side execution.        </div>
        <button className="readMoreButton" type="button">
          <div className="line10" />
          <span className="readMoreText">| READ MORE |</span>
          <div className="line9" />
        </button>
        <div className="rectangle26">
          <div className="textIT">
            IT
          </div>
        </div>

      </div>
    </div>
  );
}