
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
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
          </p>
        </div>
        <button className="exploreButton">
          EXPLORE
        </button>
        <img className="separatorBlack" src="/icons/separatorBlack.jpeg" />
        <ServicesSection/>
        <img className="separatorBlack separatorBlack2" src="/icons/separatorBlack.jpeg" />
      </div>
    </section>
  );
} 