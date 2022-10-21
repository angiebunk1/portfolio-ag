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
        Hi! I'm Angie.
        
        I am a reader, a writer, a creator, a contemplator, a collector, an organizer of information.  I hail from the rocky bluffs of Wisconsin (Meskonsing), the savannah plains of Cameroon (Adamawa), the wooded mountains of Washington (Yamakiasham Yaina), and the river valleys of Minnesota (Mni Sota).  I currently live on a small homestead with my family and an assortment of pets and livestock.  
        
        I have a Master’s degree in Library and Information Science, and have worked in public libraries for over a decade.  I was drawn to libraries because I have a passion for connecting people with information.  It is that same passion that drives me to pursue a new career in web development.
        
        I recently earned a certificate in full-stack web development from the University of Minnesota.  My strengths are in back-end skills such as SQL and MongoDB.  I have developed several fully functional applications, some independently and some as part of a team.  I am known for being an ideas-generator and proactive collaborator, staying receptive to team members’ needs and adaptive to change throughout the lifecycle of product development.
        
        I am excited to bring my skills to a dynamic team dedicated to creating high-quality web applications.  
        </p>
      </div>
      </div>
    </section>
  );
}

export default About;