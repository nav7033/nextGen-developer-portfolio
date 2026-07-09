import "./ServicesSections.css";

export default function ServicesSection() {
  return (
    <div className= "servicesContainer">
      {/* Service 1: DESIGN */}
      <div className="serviceCard cardDesign">
        <div className= "serviceHeader">
          <div className="icon iconDesign" />
          <h3 className="serviceTitle">DESIGN</h3>
        </div>
        <p className="serviceDescription">
          I deliver pixel-perfect implementations of Figma designs into responsive layouts. 
          Specialized in crafting custom React.js/Next.js UI component libraries, interactive 
          carousels, and design languages that maintain brand consistency while boosting user engagement.
        </p>
      </div>

      {/* Service 2: DEVELOPMENT (Updated with React/Next.js Highlights) */}
      <div className="serviceCard cardDevelopment">
        <div className= "serviceHeader">
          <div className="icon iconDevelopment" />
          <h3 className="serviceTitle">DEVELOPMENT</h3>
        </div>
        <p className="serviceDescription">
          Advanced front-end developer specialized in React.js and Next.js ecosystem architectures. 
          Engineered reusable component libraries across 12+ brands (improving efficiency by 30%) 
          and optimized state logic via custom hooks to reduce code duplication by 20%. Experienced in building 
          high-performance server-side layouts alongside Node.js/Express.js microservices.
        </p>
      </div>

      {/* Service 3: MAINTENANCE */}
      <div className="serviceCard cardMaintenance">
        <div className="serviceHeader">
          <div className="icon iconMaintenance" />
          <h3 className="serviceTitle">MAINTENANCE</h3>
        </div>
        <p className="serviceDescription">
          I keep codebases highly maintainable by engineering custom React hooks to eliminate 
          redundancy. Experienced in developing custom internal React tooling—such as custom CMS platforms 
          integrated with backend cron jobs for dynamic content delivery, and standalone JSON/language pack editors 
          to manage localized data easily—accelerating ongoing updates by up to 60%.
        </p>
      </div>
    </div>
  );
}