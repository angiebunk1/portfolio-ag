import React from "react";
import Navigation from "../Navigation";

function Header (props) {
    const { sections = [], 
        setCurrentSection,
        currentSection } = props;

    return (
        <div className="header">
            <h2>
                <a href="/">
                    ANGIE GUSTAFSON
                </a>
            </h2>
            <Navigation 
          sections={sections}
          setCurrentSection={setCurrentSection} 
          currentSection={currentSection}
          ></Navigation>
        </div>
    );
};

export default Header;