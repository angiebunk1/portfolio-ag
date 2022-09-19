import React from 'react';
import AG from '../../assets/images/AG.jpg';


function About() {
  return (
    <section className='about'>
      <h1>About me</h1>
      <div className='About-Me'>
      { <img src={AG} style={{ width: "20%" }} alt="Angie Gustafson standing by a wall and smiling" /> }
      <div className='bio'>
        <p>
        Back-End Web Developer with background in Library and Information Science.  Recent graduate of the University of Minnesota with a certificate in Web Development.  Creative and analytical thinker with strong organization, communication, and problem-solving skills. Known for being an ideas-generator and proactive collaborator.  
        </p>
      </div>
      </div>
    </section>
  );
}

export default About;