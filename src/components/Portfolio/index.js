import React, { useState }from "react";
import Project from "../Project";


function Portfolio () {
    const [projects] = useState([
        { title: 'P.A.R.K.O.U.R.', link1: 'https://parkour-review.herokuapp.com/', link2: 'https://github.com/angiebunk1/playground-rating-app', label: 'project1' },
        { title: 'Tech Blog', link1: 'https://desolate-temple-40613.herokuapp.com/', link2: 'https://github.com/angiebunk1/Tech-Blog', label: 'project2' },
        { title: 'Marvel Story Generator', link1: 'https://kaylab78.github.io/marvel-story-generator/', link2: 'https://github.com/angiebunk1/marvel-story-generator', label: 'project3' },
        { title: 'Note Taker', link1: 'https://blooming-springs-91895.herokuapp.com/', link2: 'https://github.com/angiebunk1/note-taker', label: 'project4' },
        { title: 'Work Day Scheduler', link1: 'https://angiebunk1.github.io/workday-calendar/', link2: 'https://github.com/angiebunk1/workday-calendar', label: 'project5' },
        { title: 'Social Network API', link1: 'https://drive.google.com/file/d/1kp9_RlfqPxngRzZ9xGaJmwp4Gpg05XfW/view?usp=sharing', link2: 'https://github.com/angiebunk1/social-network-api', label: 'project6' }
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