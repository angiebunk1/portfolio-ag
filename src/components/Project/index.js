import React from "react";



function Project ({ project }) {
    const {title, link1, link2, label } = project

return (

    <> 
        <div>
        <div>
        <p>
        <a href={link1} target='_blank'>Deployed Site  |  </a>
        <a href={link2} target='_blank'>Github Repo</a>
        </p>
        </div>   
        <div className={label}>
            <h2 className="project-titles">
            {title}
            </h2>

        </div>
        
        </div>
    </>

)
}


export default Project;