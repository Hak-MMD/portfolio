import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {HiUsers} from 'react-icons/hi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Mounth Working</small>
            </article>
            <article className='about__card'>
              <HiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Clients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>25+ Completed</small>
            </article>
          </div>
          <p>
              Hello! I'm Mykhailo - 15 years old Fullstack Developer! I live in Lviv, Ukrane. I was always interested in programming,
              so i started to learn it! Now I can make a completed fullstack site, and keep supporting it for you! 
              Also I can do a CRUD application using MERN-stack. So if you want to cooperate with me, or simply learn more about me - press this button!     
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About  