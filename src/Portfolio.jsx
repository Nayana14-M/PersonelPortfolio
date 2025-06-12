import React from 'react';
import './portfolio.css';
//import pic from './images/NAYANAPIC1.jpg';

export default function Portfolio() {
  return (
    <section className='main'>
     
      
      <div id='right'>
        <section id="about">
          <h1>About</h1>
          <p>Welcome to my portfolio! I am Nayana M, a passionate web developer with a knack for creating dynamic and responsive web applications. I bring a unique blend of technical skills and creativity to every project.</p>
          <p>Being an enthusiastic and proactive recent graduate with a bachelor's degree, I am eager to launch a career in the software development field. I possess a strong understanding of Java programming, OOPS concepts, front-end technologies, and proficiency in grasping new technologies. I am seeking an opportunity to apply my skills to real-world development challenges.</p>
        </section>
        <section id="education">
          <h1>Education</h1>
          <p>Details about your educational background.</p>
        </section>
        <section id="interests">
          <h1>Interests</h1>
          <p>Details about your interests.</p>
        </section>
        <section id="skills">
          <h1>Skills</h1>
          <p>Details about your skills.</p>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <p>Details about your projects.</p>
        </section>
        <section id="contact">
          <h1>Contact Me</h1>
          <p>Details on how to contact you.</p>
        </section>
      </div>
    </section>
  );
}
