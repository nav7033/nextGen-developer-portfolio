import "./ServicesSections.css";

export default function ServicesSection() {
  return (
    <div className="servicesContainer">
      <div className="serviceCard cardDesign">
        <div className="serviceHeader">
          <div className="icon iconDesign" />
          <h3 className="serviceTitle">DESIGN</h3>
        </div>
        <p className="serviceDescription">
          I deliver highly responsive implementations of complex Figma designs into real-time interfaces.
          Specialized in building reusable React.js UI component libraries across 12+ international brands,
          crafting interactive carousels, and engineering multi-brand layout systems that maximize visual
          consistency and boost user engagement.
        </p>
      </div>

      <div className="serviceCard cardDevelopment">
        <div className="serviceHeader">
          <div className="icon iconDevelopment" />
          <h3 className="serviceTitle">DEVELOPMENT</h3>
        </div>
        <p className="serviceDescription">
          Full-stack developer specialized in high-concurrency Java 17, Spring Boot, and React/Next.js architectures.
          I build secure REST APIs from scratch, integrate Apache Kafka for real-time live data streaming,
          and optimize server-side workloads using Redis caching to safely process high-concurrency traffic feeds
          during peak sportsbook market activity.
        </p>
      </div>

      <div className="serviceCard cardMaintenance">
        <div className="serviceHeader">
          <div className="icon iconMaintenance" />
          <h3 className="serviceTitle">MAINTENANCE</h3>
        </div>
        <p className="serviceDescription">
          I build highly maintainable ecosystems by writing custom React hooks to reduce code logic duplication by 20%
          and implementing rigorous global exception handling across backend APIs. Experienced in developing custom internal
          tooling such as custom CMS plugins, JSON configurations, and language pack editors, accelerating frontend.
          content updates by up to 60%.
        </p>
      </div>
    </div>
  );
}