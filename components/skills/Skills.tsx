import './Skills.css'
import SvgIcon from "@/components/SvgIcon/SvgIcon";

export default function Skills() {
  return (
    <section id='skills' className="skills-header-section">
      <div className="about-div-section">
        <div className="headerContainer">
          <h2 className="skillsText">SKILLS</h2>
        </div>
      </div>
     <section className="skills-section">
  <div className="skills-category-group">
    <h3 className="category-title">Frontend:</h3>
    <div className="skills-grid">
      <div className="skill-card">
        <div className="skill-icon icon-react">
          <SvgIcon src="/icons/skills/icon-react.svg" alt="React" width={85} height={100} />
        </div>
        <p>REACT</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-next">
          <SvgIcon src="/icons/skills/icon-next.svg" alt="Next.js" width={85} height={100} />
        </div>
        <p>NEXT</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-js">
          <SvgIcon src="/icons/skills/icon-js.svg" alt="JavaScript" width={85} height={100} />
        </div>
        <p>JAVASCRIPT</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-ts">
          <SvgIcon src="/icons/skills/icon-typeScript.svg" alt="TypeScript" width={85} height={100} />
        </div>
        <p>TypeScript</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-html">
          <SvgIcon src="/icons/skills/icon-html.svg" alt="HTML5" width={85} height={100} />
        </div>
        <p>HTML5</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-css">
          <SvgIcon src="/icons/skills/icon-css.svg" alt="CSS3" width={85} height={100} />
        </div>
        <p>CSS3</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-sass">
          <SvgIcon src="/icons/skills/icon-sass.svg" alt="SASS" width={85} height={100} />
        </div>
        <p>SASS</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-bootstrap">
          <SvgIcon src="/icons/skills/icon-boot.svg" alt="Bootstrap" width={85} height={100} />
        </div>
        <p>BOOTSTRAP</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-figma">
          <SvgIcon src="/icons/skills/icon-figma.svg" alt="Figma" width={85} height={100} />
        </div>
        <p>FIGMA</p>
      </div>
    </div>
  </div>

  <div className="skills-category-group">
    <h3 className="category-title">Backend:</h3>
    <div className="skills-grid">
      <div className="skill-card">
        <div className="skill-icon icon-java">
          <SvgIcon src="/icons/skills/icon-java.svg" alt="Java" width={85} height={100} />
        </div>
        <p>JAVA 17</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-SB">
          <SvgIcon src="/icons/skills/icon-spring.svg" alt="Spring Boot" width={85} height={100} />
        </div>
        <p>Spring Boot</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-hibernate">
          <SvgIcon src="/icons/skills/icon-hibernet.svg" alt="Hibernate" width={85} height={100} />
        </div>
        <p>Hibernate</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-micro">
          <SvgIcon src="/icons/skills/icon-micro.svg" alt="Microservices" width={85} height={100} />
        </div>
        <p>Microservices</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-sql">
          <SvgIcon src="/icons/skills/icon-mysql.svg" alt="MySQL" width={85} height={100} />
        </div>
        <p>MySQL</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-redis">
          <SvgIcon src="/icons/skills/icon-redis.svg" alt="Redis" width={85} height={100} />
        </div>
        <p>Redis</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-AK">
          <SvgIcon src="/icons/skills/icon-apche.svg" alt="Apache Kafka" width={85} height={100} />
        </div>
        <p>Apache Kafka</p>
      </div>
    </div>
  </div>

  <div className="skills-category-group">
    <h3 className="category-title">DevOps & Tools:</h3>
    <div className="skills-grid">
      <div className="skill-card">
        <div className="skill-icon icon-maven">
          <SvgIcon src="/icons/skills/icon-mavan.svg" alt="Maven" width={85} height={100} />
        </div>
        <p>Maven</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-git">
          <SvgIcon src="/icons/skills/icon-git.svg" alt="Git" width={85} height={100} />
        </div>
        <p>Git</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-Docker">
          <SvgIcon src="/icons/skills/icon-docker.svg" alt="Docker" width={85} height={100} />
        </div>
        <p>Docker</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-swagger">
          <SvgIcon src="/icons/skills/icon-swagger.svg" alt="Swagger" width={85} height={100} />
        </div>
        <p>Swagger</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-postman">
          <SvgIcon src="/icons/skills/iocn-postman.svg" alt="Postman" width={85} height={100} />
        </div>
        <p>Postman</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-cms">
          <SvgIcon src="/icons/skills/dotcms_Icon.png" alt="dotCMS" width={85} height={100} />
        </div>
        <p>dotCMS</p>
      </div>
    </div>
  </div>

  <div className="skills-category-group">
    <h3 className="category-title">LEARNING:</h3>
    <div className="skills-grid">
      <div className="skill-card">
        <div className="skill-icon icon-node">
          <SvgIcon src="/icons/skills/icon-node.svg" alt="Node.js" width={85} height={100} />
        </div>
        <p>NODEJS</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon icon-mongodb">
          <SvgIcon src="/icons/skills/icon-mongodb.svg" alt="MongoDB" width={85} height={100} />
        </div>
        <p>MONGODB</p>
      </div>
    </div>
  </div>
</section>
    </section >
  );
} 