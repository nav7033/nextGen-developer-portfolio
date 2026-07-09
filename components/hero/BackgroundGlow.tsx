import React from "react";
import "./Background.css";

export default function Background() {
  return (
    <div className="futuristicBackground" aria-hidden="true">
      {/* Container holding the specific Figma absolute graphics design pieces */}
      <div className="designCanvasAnchor">
        
        {/* <div className="logoITB">
        </div> */}
        <div className="sectionHeader">
          IT BERRIES
        </div>
        <div className="paragraph" >
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. 
        </div>
        {/* --- NEW READ MORE BUTTON CONTAINER WITH ACCENT LINES --- */}
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