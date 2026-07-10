
import "./About.css"
import ServicesSection from "./ServicesSection.componet"
export default function About() {


  return (
    <section id="about" className="about-section">
      <div className="about-div-section">
        <div className="headerContainer">
          <h2 className="aboutText">ABOUT ME</h2>
        </div>
        <div className="aboutParagraph">
          <p>
            I am a Full-Stack Engineer with over 4+ years of experience specializing in building highly scalable, event-driven web applications for global online gaming and sports betting platforms. On the backend, I design high-concurrency microservices and real-time data streaming architectures using Java 17, Spring Boot, and Apache Kafka. On the frontend, I excel at turning complex, fast-moving datasets into pixel-perfect, highly responsive user interfaces using React.js and Next.js. I thrive in cross-functional team environments where I can optimize system performance from end to end—ensuring sub-second UI responsiveness alongside secure, robust server-side execution.
          </p>
        </div>
        <button className="exploreButton">
          EXPLORE
        </button>
        <img className="separatorBlack" src="/icons/separatorBlack.jpeg" />
        <ServicesSection />
        <img className="separatorBlack separatorBlack2" src="/icons/separatorBlack.jpeg" />
      </div>
    </section>
  );
} 