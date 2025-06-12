import React from 'react';
import pic from './images/NAYANAPIC1.jpg';
import { NavLink } from 'react-router-dom';
import './portfolio.css';


export default function About() {
  return (

    <>

     <section className='main'>
      <section className='left'>
        <img src={pic} alt="profile pic" />
        <h2>Nayana M</h2>
        <NavLink to="/"><button>HOME</button></NavLink><br />
        <NavLink to="/about"><button>ABOUT</button></NavLink><br />

        <NavLink to="/education"><button>EDUCATION</button></NavLink><br />
        <NavLink to="/interests"><button>INTERESTS</button></NavLink><br />
        <NavLink to="/skills"><button>SKILLS</button></NavLink><br />
        <NavLink to="/projects"><button>PROJECTS</button></NavLink><br />
        <NavLink to="/contact"><button>CONTACT ME</button></NavLink><br />

        <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download="My_CV.pdf">
          <button>Download CV</button>
        </a>
      </section>
      <section className="right">
      <div id="about">
    <h1>About</h1>
    <p>Welcome to my portfolio! I am Nayana M, a passionate web developer with a knack for creating dynamic and responsive web applications. I bring a unique blend of technical skills and creativity to every project.</p>
    <p>Being an enthusiastic and proactive recent graduate with a bachelor's degree, I am eager to launch a career in the software development field. I possess a strong understanding of Java programming, OOPS concepts, front-end technologies, and proficiency in grasping new technologies. I am seeking an opportunity to apply my skills to real-world development challenges.</p>
  </div>
    </section>
    </section> 
    </>
    
  )
}
