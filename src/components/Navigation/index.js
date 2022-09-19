import React from "react";

function Navigation (props) {
    const { sections = [], 
            setCurrentSection,
            currentSection } = props;

    return (
        <nav>
            <ul className="nav">
                {sections.map((Section) => (
                    <li className={`${currentSection.name === Section.name && 'active'}`} key={Section.name}>
                        <span onClick={() => setCurrentSection(Section)}>{Section.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;