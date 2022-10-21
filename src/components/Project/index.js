import React from "react";



function Project ({ project }) {
    const {title, link1, link2, label, description, tech } = project

return (

    <> 
        <div>
        <div>
        <p>
        <h3>{title}</h3>
        {description}
        </p>
        <p>
        {tech}
        </p>
        <p>
        <a href={link1} target='_blank'>Deployed Site  |  </a>
        <a href={link2} target='_blank'>Github Repo</a>
        </p>
        </div>   
        <div className={label}>
            
        </div>
      
        
        </div>
    </>

)
}


export default Project;