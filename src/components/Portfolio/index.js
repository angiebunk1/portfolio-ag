import React, { useState }from "react";
import Project from "../Project";


function Portfolio () {
    const [projects] = useState([
        { title: 'Where Were You When', link1: 'https://where-were-you-when.herokuapp.com/', link2: 'https://github.com/angiebunk1/Where-Were-You-When', label: 'project1' },
        { title: 'P.A.R.K.O.U.R.', link1: 'https://parkour-review.herokuapp.com/', link2: 'https://github.com/angiebunk1/playground-rating-app', label: 'project2' },
        { title: 'Tech Blog', link1: 'https://desolate-temple-40613.herokuapp.com/', link2: 'https://github.com/angiebunk1/Tech-Blog', label: 'project3' },
        { title: 'Marvel Story Generator', link1: 'https://kaylab78.github.io/marvel-story-generator/', link2: 'https://github.com/angiebunk1/marvel-story-generator', label: 'project4' },
        { title: 'Note Taker', link1: 'https://blooming-springs-91895.herokuapp.com/', link2: 'https://github.com/angiebunk1/note-taker', label: 'project5' },
        { title: 'Work Day Scheduler', link1: 'https://angiebunk1.github.io/workday-calendar/', link2: 'https://github.com/angiebunk1/workday-calendar', label: 'project6' },
        ]);

      return (
        <div className="portfolio">
            <h2>Projects</h2>
            <div className="projects">
                {projects.map((project) => (
                    <Project project={project} key={project.title}></Project>
                ))}
            </div>              
            
        </div>
    );

}

export default Portfolio;