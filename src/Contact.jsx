import React from 'react'
import { NavLink } from 'react-router-dom'
import pic from './images/NAYANAPIC1.jpg';
import './portfolio.css';

export default function Contact() {
  return (
    <>
    <section className='main'>
      <section className='left'>
        <img src={pic} alt="profile pic" />
        <h2>Nayana M</h2>
        
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
      <section className='right'>
        <div id="contact"></div>
      </section>
    </section>
    </>
  )
}
